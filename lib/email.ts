import nodemailer from 'nodemailer';
import { SITE_CONFIG } from './config';
import { Lead, Payment } from './db';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || SITE_CONFIG.email;

function getTransporter() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendLeadNotifications(lead: Lead) {
  const transporter = getTransporter();

  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #E52329; margin-top: 0;">New Lead Received - ${lead.id}</h2>
      <p>A new consultation inquiry has been submitted on the AKME Immigrations website:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold; width: 35%;">Lead ID:</td><td style="padding: 8px;">${lead.id}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${lead.name}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Target Country:</td><td style="padding: 8px;">${lead.country}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${lead.service}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">City:</td><td style="padding: 8px;">${lead.city}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Qualification:</td><td style="padding: 8px;">${lead.qualification}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">IELTS / PTE:</td><td style="padding: 8px;">${lead.ieltsScore || lead.pteScore || 'Not appeared'}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Experience / Budget:</td><td style="padding: 8px;">${lead.experience || '-'} / ${lead.budget || '-'}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Source:</td><td style="padding: 8px;">${lead.source || 'Website Direct'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td style="padding: 8px;">${lead.message || 'No additional message'}</td></tr>
      </table>
      <div style="margin-top: 25px;">
        <a href="${SITE_CONFIG.url}/admin" style="background-color: #E52329; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">Open in Admin CRM</a>
      </div>
    </div>
  `;

  const userEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #E52329; margin-top: 0;">Thank You for Contacting AKME Immigrations</h2>
      <p>Dear ${lead.name},</p>
      <p>We have successfully received your profile assessment inquiry (Reference ID: <strong>${lead.id}</strong>).</p>
      <p>Our senior education and visa counselling team will review your qualifications and target country (${lead.country}) within 24 business hours.</p>
      <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #E52329; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 0; font-weight: bold; color: #0f172a;">Need Immediate Assistance?</p>
        <p style="margin: 5px 0 0 0; color: #475569;">Connect with an assigned advisor directly via WhatsApp or call our Patiala office.</p>
        <p style="margin: 10px 0 0 0;">
          <a href="https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20AKME,%20my%20Lead%20ID%20is%20${lead.id}" style="background-color: #25D366; color: #ffffff; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block; font-size: 14px;">Chat on WhatsApp</a>
          &nbsp;
          <a href="tel:${SITE_CONFIG.phoneRaw}" style="background-color: #0f172a; color: #ffffff; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block; font-size: 14px;">Call Us: ${SITE_CONFIG.phoneDisplay}</a>
        </p>
      </div>
      <p style="font-size: 13px; color: #64748b;">
        AKME Immigrations & Education<br/>
        Opposite Punjabi University, Patiala, Punjab, India
      </p>
    </div>
  `;

  if (!transporter) {
    console.log(`[Notification Service] SMTP not configured. Lead email mock log: ${lead.id} for ${lead.email}`);
    return;
  }

  try {
    // Send admin notification
    await transporter.sendMail({
      from: `"${SITE_CONFIG.name}" <${SMTP_USER || SITE_CONFIG.email}>`,
      to: NOTIFY_EMAIL,
      subject: `[New Lead] ${lead.name} - ${lead.country} (${lead.service})`,
      html: adminEmailHtml,
    });

    // Send user confirmation
    if (lead.email) {
      await transporter.sendMail({
        from: `"${SITE_CONFIG.name}" <${SMTP_USER || SITE_CONFIG.email}>`,
        to: lead.email,
        subject: `Your Inquiry Reference: ${lead.id} - AKME Immigrations`,
        html: userEmailHtml,
      });
    }
  } catch (err) {
    console.error('Error sending lead emails:', err);
  }
}

export async function sendPaymentNotifications(payment: Payment) {
  const transporter = getTransporter();

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #16a34a; margin-top: 0;">Payment Receipt Confirmation</h2>
      <p>Dear ${payment.customerName},</p>
      <p>Your payment to AKME Immigrations has been successfully verified.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Receipt Ref:</td><td style="padding: 8px;">${payment.id}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Payment ID:</td><td style="padding: 8px;">${payment.razorpayPaymentId || payment.orderId}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${payment.service}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Amount Paid:</td><td style="padding: 8px; font-weight: bold; color: #16a34a;">₹${payment.amount.toLocaleString('en-IN')} ${payment.currency}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px; font-weight: bold;">Payment Mode:</td><td style="padding: 8px;">${payment.method || 'Online (UPI / Card)'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Date:</td><td style="padding: 8px;">${new Date(payment.verifiedAt || payment.createdAt).toLocaleString('en-IN')}</td></tr>
      </table>
      <p style="margin-top: 20px; font-size: 13px; color: #64748b;">
        Please preserve this email as your official receipt.
      </p>
    </div>
  `;

  if (!transporter) {
    console.log(`[Notification Service] SMTP not configured. Payment receipt mock log: ${payment.id} for ${payment.email}`);
    return;
  }

  try {
    await transporter.sendMail({
      from: `"${SITE_CONFIG.name}" <${SMTP_USER || SITE_CONFIG.email}>`,
      to: payment.email,
      subject: `Payment Receipt: ${payment.id} - AKME Immigrations`,
      html: emailHtml,
    });
  } catch (err) {
    console.error('Error sending payment email:', err);
  }
}
