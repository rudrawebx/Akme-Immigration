import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const leads = db.getLeads();

  const headers = [
    'Lead ID',
    'Date',
    'Name',
    'Phone',
    'Email',
    'City',
    'Country',
    'Service',
    'Qualification',
    'IELTS Score',
    'PTE Score',
    'Work Experience',
    'Status',
    'Source',
    'UTM Source',
    'UTM Campaign',
    'Latest Note',
  ];

  const escapeCsv = (val: any) => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = leads.map(l => {
    const latestNote = l.notes && l.notes.length > 0 ? l.notes[l.notes.length - 1].text : '';
    return [
      escapeCsv(l.id),
      escapeCsv(new Date(l.createdAt).toLocaleDateString('en-IN')),
      escapeCsv(l.name),
      escapeCsv(l.phone),
      escapeCsv(l.email),
      escapeCsv(l.city),
      escapeCsv(l.country),
      escapeCsv(l.service),
      escapeCsv(l.qualification),
      escapeCsv(l.ieltsScore),
      escapeCsv(l.pteScore),
      escapeCsv(l.experience),
      escapeCsv(l.status),
      escapeCsv(l.source),
      escapeCsv(l.utmSource),
      escapeCsv(l.utmCampaign),
      escapeCsv(latestNote),
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\n');

  return new NextResponse(csvContent, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="akme_leads_${new Date().toISOString().split('T')[0]}.csv"`,
    },
  });
}
