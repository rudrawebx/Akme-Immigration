import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search') || undefined;
  const status = searchParams.get('status') || undefined;
  const country = searchParams.get('country') || undefined;
  const service = searchParams.get('service') || undefined;
  const source = searchParams.get('source') || undefined;

  const leads = db.getLeads({ search, status, country, service, source });
  const metrics = db.getMetrics();

  return NextResponse.json({
    success: true,
    leads,
    metrics,
  });
}

export async function PATCH(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, status, note } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, message: 'Lead ID required' }, { status: 400 });
    }

    if (status) {
      db.updateLead(id, { status });
    }

    if (note && note.text) {
      db.addLeadNote(id, {
        text: note.text,
        author: note.author || 'Staff Counsellor',
      });
    }

    const updated = db.getLeadById(id);
    return NextResponse.json({ success: true, lead: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Update error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ success: false, message: 'Lead ID required' }, { status: 400 });
  }

  const deleted = db.deleteLead(id);
  return NextResponse.json({ success: deleted });
}
