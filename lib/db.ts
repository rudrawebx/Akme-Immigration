import fs from 'fs';
import path from 'path';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  age?: string;
  qualification: string;
  course?: string;
  experience?: string;
  ieltsScore?: string;
  pteScore?: string;
  country: string;
  service: string;
  budget?: string;
  message?: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  landingPage?: string;
  referrer?: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Follow-up' | 'Converted' | 'Not Interested' | 'Closed';
  notes?: Array<{ text: string; author: string; date: string }>;
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: string; // e.g. AKME-PAY-1001
  orderId: string; // Razorpay order_id
  razorpayPaymentId?: string; // Razorpay pay_id
  customerName: string;
  phone: string;
  email: string;
  service: string;
  amount: number; // in INR
  currency: string;
  status: 'Created' | 'Pending' | 'Paid' | 'Failed' | 'Refunded';
  method?: string; // UPI, Card, Netbanking
  signature?: string;
  createdAt: string;
  verifiedAt?: string;
  metadata?: Record<string, any>;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const PAYMENTS_FILE = path.join(DATA_DIR, 'payments.json');

function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(LEADS_FILE)) {
    // Seed initial verified leads
    const initialLeads: Lead[] = [
      {
        id: "AKME-LD-2026-1001",
        name: "Gurpreet Singh",
        phone: "+91 98765 43210",
        email: "gurpreet.s@gmail.com",
        city: "Patiala",
        qualification: "Bachelor of Technology (CSE)",
        experience: "2 Years",
        ieltsScore: "7.0 Bands",
        country: "Canada",
        service: "Study Visa",
        budget: "CAD $20,000 - $25,000",
        message: "Interested in Fall 2026 intake for Post-Graduate Certificate in Cloud Computing.",
        source: "Website Direct",
        status: "Qualified",
        notes: [
          { text: "Spoke with student. Academic credentials verified. Transcripts pending.", author: "Senior Counsellor", date: "2026-09-28T11:30:00.000Z" }
        ],
        createdAt: "2026-09-28T10:15:00.000Z",
        updatedAt: "2026-09-28T11:30:00.000Z"
      },
      {
        id: "AKME-LD-2026-1002",
        name: "Navjot Kaur",
        phone: "+91 98144 88219",
        email: "navjot.k99@yahoo.com",
        city: "Mohali",
        qualification: "B.Sc Nursing",
        experience: "3 Years",
        ieltsScore: "7.5 Bands",
        country: "Australia",
        service: "Study Visa",
        budget: "AUD $25,000 - $30,000",
        message: "Looking for Master of Nursing admissions with AHPRA pathway.",
        source: "Google Search",
        status: "New",
        notes: [],
        createdAt: "2026-09-29T14:20:00.000Z",
        updatedAt: "2026-09-29T14:20:00.000Z"
      }
    ];
    fs.writeFileSync(LEADS_FILE, JSON.stringify(initialLeads, null, 2), 'utf-8');
  }

  if (!fs.existsSync(PAYMENTS_FILE)) {
    const initialPayments: Payment[] = [
      {
        id: "AKME-PAY-2026-1001",
        orderId: "order_sample_initial",
        razorpayPaymentId: "pay_sample_test",
        customerName: "Gurpreet Singh",
        phone: "+91 98765 43210",
        email: "gurpreet.s@gmail.com",
        service: "Profile Evaluation & Filing Support",
        amount: 2500,
        currency: "INR",
        status: "Paid",
        method: "UPI (Google Pay)",
        createdAt: "2026-09-28T11:45:00.000Z",
        verifiedAt: "2026-09-28T11:46:12.000Z"
      }
    ];
    fs.writeFileSync(PAYMENTS_FILE, JSON.stringify(initialPayments, null, 2), 'utf-8');
  }
}

function readLeadsFile(): Lead[] {
  ensureDataFiles();
  try {
    const content = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(content) || [];
  } catch (err) {
    console.error('Error reading leads file:', err);
    return [];
  }
}

function writeLeadsFile(leads: Lead[]) {
  ensureDataFiles();
  const tempPath = `${LEADS_FILE}.tmp.${Date.now()}`;
  fs.writeFileSync(tempPath, JSON.stringify(leads, null, 2), 'utf-8');
  fs.renameSync(tempPath, LEADS_FILE);
}

function readPaymentsFile(): Payment[] {
  ensureDataFiles();
  try {
    const content = fs.readFileSync(PAYMENTS_FILE, 'utf-8');
    return JSON.parse(content) || [];
  } catch (err) {
    console.error('Error reading payments file:', err);
    return [];
  }
}

function writePaymentsFile(payments: Payment[]) {
  ensureDataFiles();
  const tempPath = `${PAYMENTS_FILE}.tmp.${Date.now()}`;
  fs.writeFileSync(tempPath, JSON.stringify(payments, null, 2), 'utf-8');
  fs.renameSync(tempPath, PAYMENTS_FILE);
}

// Public DB API
export const db = {
  // LEADS
  getLeads(filters?: {
    search?: string;
    status?: string;
    country?: string;
    service?: string;
    source?: string;
  }): Lead[] {
    let leads = readLeadsFile();

    if (!filters) {
      return leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    if (filters.status && filters.status !== 'All') {
      leads = leads.filter(l => l.status.toLowerCase() === filters.status?.toLowerCase());
    }

    if (filters.country && filters.country !== 'All') {
      leads = leads.filter(l => l.country.toLowerCase() === filters.country?.toLowerCase());
    }

    if (filters.service && filters.service !== 'All') {
      leads = leads.filter(l => l.service.toLowerCase().includes(filters.service?.toLowerCase() || ''));
    }

    if (filters.source && filters.source !== 'All') {
      leads = leads.filter(l => (l.source || '').toLowerCase().includes(filters.source?.toLowerCase() || ''));
    }

    if (filters.search) {
      const q = filters.search.toLowerCase();
      leads = leads.filter(l =>
        l.id.toLowerCase().includes(q) ||
        l.name.toLowerCase().includes(q) ||
        l.phone.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.city.toLowerCase().includes(q)
      );
    }

    return leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  getLeadById(id: string): Lead | undefined {
    const leads = readLeadsFile();
    return leads.find(l => l.id === id);
  },

  createLead(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: Lead['status'] }): Lead {
    const leads = readLeadsFile();
    const year = new Date().getFullYear();
    const count = leads.length + 1001;
    const id = `AKME-LD-${year}-${count}`;
    const now = new Date().toISOString();

    const newLead: Lead = {
      ...data,
      id,
      status: data.status || 'New',
      notes: data.notes || [],
      createdAt: now,
      updatedAt: now,
    };

    leads.unshift(newLead);
    writeLeadsFile(leads);
    return newLead;
  },

  updateLead(id: string, updates: Partial<Lead>): Lead | null {
    const leads = readLeadsFile();
    const index = leads.findIndex(l => l.id === id);
    if (index === -1) return null;

    leads[index] = {
      ...leads[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    writeLeadsFile(leads);
    return leads[index];
  },

  addLeadNote(id: string, note: { text: string; author: string }): Lead | null {
    const leads = readLeadsFile();
    const index = leads.findIndex(l => l.id === id);
    if (index === -1) return null;

    const notes = leads[index].notes || [];
    notes.push({
      ...note,
      date: new Date().toISOString()
    });

    leads[index].notes = notes;
    leads[index].updatedAt = new Date().toISOString();

    writeLeadsFile(leads);
    return leads[index];
  },

  deleteLead(id: string): boolean {
    const leads = readLeadsFile();
    const filtered = leads.filter(l => l.id !== id);
    if (filtered.length === leads.length) return false;
    writeLeadsFile(filtered);
    return true;
  },

  // PAYMENTS
  getPayments(filters?: {
    search?: string;
    status?: string;
  }): Payment[] {
    let payments = readPaymentsFile();

    if (filters?.status && filters.status !== 'All') {
      payments = payments.filter(p => p.status.toLowerCase() === filters.status?.toLowerCase());
    }

    if (filters?.search) {
      const q = filters.search.toLowerCase();
      payments = payments.filter(p =>
        p.id.toLowerCase().includes(q) ||
        p.orderId.toLowerCase().includes(q) ||
        (p.razorpayPaymentId || '').toLowerCase().includes(q) ||
        p.customerName.toLowerCase().includes(q) ||
        p.email.toLowerCase().includes(q) ||
        p.phone.toLowerCase().includes(q)
      );
    }

    return payments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  getPaymentById(id: string): Payment | undefined {
    const payments = readPaymentsFile();
    return payments.find(p => p.id === id || p.orderId === id || p.razorpayPaymentId === id);
  },

  createPayment(data: Omit<Payment, 'id' | 'createdAt' | 'status'> & { status?: Payment['status'] }): Payment {
    const payments = readPaymentsFile();
    const year = new Date().getFullYear();
    const count = payments.length + 1001;
    const id = `AKME-PAY-${year}-${count}`;

    const newPayment: Payment = {
      ...data,
      id,
      status: data.status || 'Created',
      createdAt: new Date().toISOString(),
    };

    payments.unshift(newPayment);
    writePaymentsFile(payments);
    return newPayment;
  },

  updatePayment(orderIdOrId: string, updates: Partial<Payment>): Payment | null {
    const payments = readPaymentsFile();
    const index = payments.findIndex(p => p.id === orderIdOrId || p.orderId === orderIdOrId);
    if (index === -1) return null;

    payments[index] = {
      ...payments[index],
      ...updates,
    };

    writePaymentsFile(payments);
    return payments[index];
  },

  // DASHBOARD METRICS
  getMetrics() {
    const leads = readLeadsFile();
    const payments = readPaymentsFile();

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const monthStr = now.toISOString().slice(0, 7);

    const todayLeads = leads.filter(l => l.createdAt.startsWith(todayStr)).length;
    const monthLeads = leads.filter(l => l.createdAt.startsWith(monthStr)).length;
    const newLeads = leads.filter(l => l.status === 'New').length;
    const qualifiedLeads = leads.filter(l => l.status === 'Qualified').length;
    const convertedLeads = leads.filter(l => l.status === 'Converted').length;

    const successfulPayments = payments.filter(p => p.status === 'Paid');
    const pendingPayments = payments.filter(p => p.status === 'Pending' || p.status === 'Created');
    const totalRevenue = successfulPayments.reduce((acc, p) => acc + (p.amount || 0), 0);

    return {
      totalLeads: leads.length,
      todayLeads,
      monthLeads,
      newLeads,
      qualifiedLeads,
      convertedLeads,
      totalPayments: payments.length,
      successfulPayments: successfulPayments.length,
      pendingPayments: pendingPayments.length,
      totalRevenue,
    };
  }
};
