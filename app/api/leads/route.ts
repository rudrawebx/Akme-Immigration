import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendLeadNotifications } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Anti-spam honeypot check
    if (body.website_url_hp && body.website_url_hp.trim() !== '') {
      return NextResponse.json({ success: true, leadId: 'SPAM_FILTERED' });
    }

    // 2. Validate mandatory fields
    const { name, phone, email, country, service } = body;
    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, message: 'Name, phone, and email are required fields.' },
        { status: 400 }
      );
    }

    // 3. Clean and sanitize phone
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid phone number.' },
        { status: 400 }
      );
    }

    // 4. Save to Database
    const newLead = db.createLead({
      name: name.trim(),
      phone: cleanPhone,
      email: email.trim().toLowerCase(),
      city: body.city?.trim() || '',
      age: body.age?.trim() || '',
      qualification: body.qualification || 'Not Specified',
      course: body.course?.trim() || '',
      experience: body.experience || 'Fresher',
      ieltsScore: body.ieltsScore || '',
      pteScore: body.pteScore || '',
      country: country || 'Canada',
      service: service || 'Study Visa',
      budget: body.budget || '',
      message: body.message?.trim() || '',
      source: body.source || (body.utmSource ? `Campaign (${body.utmSource})` : 'Website Form'),
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      utmContent: body.utmContent,
      utmTerm: body.utmTerm,
      landingPage: body.landingPage,
      referrer: body.referrer,
    });

    // 5. Trigger email notification asynchronously
    sendLeadNotifications(newLead).catch((err) => {
      console.error('Failed to dispatch lead notifications:', err);
    });

    return NextResponse.json({
      success: true,
      leadId: newLead.id,
      message: 'Inquiry registered successfully.',
    });
  } catch (error: any) {
    console.error('Lead submission API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error while recording your inquiry.' },
      { status: 500 }
    );
  }
}
