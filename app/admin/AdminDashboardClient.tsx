'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Users, 
  CreditCard, 
  Download, 
  Search, 
  Filter, 
  Phone, 
  MessageCircle, 
  PlusCircle, 
  LogOut, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Eye,
  Trash2,
  Settings,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Lead, Payment } from '@/lib/db';
import { COUNTRIES_LIST, SERVICES_LIST, SITE_CONFIG } from '@/lib/config';

export default function AdminDashboardClient() {
  const router = useRouter();

  // Tab State
  const [activeTab, setActiveTab] = useState<'leads' | 'payments' | 'settings'>('leads');

  // Leads & Metrics Data
  const [leads, setLeads] = useState<Lead[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [countryFilter, setCountryFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');

  // Detail Modal / Note
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [noteText, setNoteText] = useState('');

  // Fetch leads and metrics
  const fetchData = async () => {
    setLoading(true);
    try {
      const q = new URLSearchParams();
      if (search) q.set('search', search);
      if (statusFilter !== 'All') q.set('status', statusFilter);
      if (countryFilter !== 'All') q.set('country', countryFilter);
      if (serviceFilter !== 'All') q.set('service', serviceFilter);

      const res = await fetch(`/api/admin/leads?${q.toString()}`);
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
        setMetrics(data.metrics);
      }

      // Fetch payments
      const payRes = await fetch('/api/admin/payments');
      const payData = await payRes.json();
      if (payData.success) {
        setPayments(payData.payments);
      }
    } catch (err) {
      console.error('Failed to load CRM data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, statusFilter, countryFilter, serviceFilter]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        fetchData();
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead(data.lead);
        }
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const handleAddNote = async (id: string) => {
    if (!noteText.trim()) return;
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          note: {
            text: noteText.trim(),
            author: 'Counsellor Desk',
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setNoteText('');
        fetchData();
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead(data.lead);
        }
      }
    } catch (err) {
      console.error('Failed to add note', err);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm(`Are you sure you want to delete lead ${id}?`)) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setSelectedLead(null);
        fetchData();
      }
    } catch (err) {
      console.error('Delete error', err);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
  };

  const handleExportCsv = () => {
    window.location.href = '/api/admin/export';
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      
      {/* Top Admin Navbar */}
      <nav className="bg-white text-slate-900 border-b border-slate-200 px-6 py-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-1">
              <div className="relative h-7 w-28">
                <Image src="/images/akme-logo.png" alt="AKME" fill className="object-contain" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs uppercase tracking-wider text-brand-red font-bold block">Internal CRM</span>
              <span className="text-sm font-semibold text-slate-900">Lead & Payment Management</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCsv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* KPI Strip */}
        {metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Total Inquiries</span>
              <span className="text-2xl font-extrabold text-slate-900 mt-1 block">{metrics.totalLeads}</span>
              <span className="text-[11px] text-slate-500">All registered leads</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase text-brand-red block">New Leads</span>
              <span className="text-2xl font-extrabold text-brand-red mt-1 block">{metrics.newLeads}</span>
              <span className="text-[11px] text-slate-500">Awaiting contact</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Today's Leads</span>
              <span className="text-2xl font-extrabold text-slate-900 mt-1 block">{metrics.todayLeads}</span>
              <span className="text-[11px] text-slate-500">Submitted today</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Qualified</span>
              <span className="text-2xl font-extrabold text-slate-900 mt-1 block">{metrics.qualifiedLeads}</span>
              <span className="text-[11px] text-slate-500">Credentials verified</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase text-emerald-600 block">Converted</span>
              <span className="text-2xl font-extrabold text-emerald-600 mt-1 block">{metrics.convertedLeads}</span>
              <span className="text-[11px] text-slate-500">Enrolled / Filed</span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase text-amber-600 block">Payments Recvd</span>
              <span className="text-2xl font-extrabold text-amber-600 mt-1 block">₹{metrics.totalRevenue.toLocaleString('en-IN')}</span>
              <span className="text-[11px] text-slate-500">{metrics.successfulPayments} paid orders</span>
            </div>
          </div>
        )}

        {/* Tab Selector */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
              activeTab === 'leads' ? 'bg-brand-red text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            Leads CRM ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
              activeTab === 'payments' ? 'bg-brand-red text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            Payments Log ({payments.length})
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
              activeTab === 'settings' ? 'bg-brand-red text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            System Settings
          </button>
        </div>

        {/* TAB 1: LEADS CRM */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            
            {/* Filters Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="relative lg:col-span-2">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by Name, Phone, Email, or Lead ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>

              <div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Converted">Converted</option>
                  <option value="Not Interested">Not Interested</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div>
                <select
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none"
                >
                  <option value="All">All Countries</option>
                  {COUNTRIES_LIST.map((c) => (
                    <option key={c.slug} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <select
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none"
                >
                  <option value="All">All Services</option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Lead ID / Date</th>
                      <th className="py-3 px-4">Candidate Name</th>
                      <th className="py-3 px-4">Contact</th>
                      <th className="py-3 px-4">Target Country</th>
                      <th className="py-3 px-4">Service</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-500">
                          No candidate leads match your search criteria.
                        </td>
                      </tr>
                    ) : (
                      leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 px-4">
                            <span className="font-mono font-bold text-brand-red block">{lead.id}</span>
                            <span className="text-[11px] text-slate-400">
                              {new Date(lead.createdAt).toLocaleDateString('en-IN')}
                            </span>
                          </td>

                          <td className="py-3.5 px-4 font-semibold text-slate-900">
                            <div>{lead.name}</div>
                            <span className="text-[11px] text-slate-400 font-normal">{lead.city || 'Punjab'}</span>
                          </td>

                          <td className="py-3.5 px-4 space-y-1">
                            <div className="flex items-center gap-1.5 font-medium text-slate-800">
                              <span>{lead.phone}</span>
                            </div>
                            <div className="text-[11px] text-slate-500">{lead.email}</div>
                          </td>

                          <td className="py-3.5 px-4 font-medium text-slate-800">
                            {lead.country}
                          </td>

                          <td className="py-3.5 px-4">
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                              {lead.service}
                            </span>
                          </td>

                          <td className="py-3.5 px-4">
                            <select
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border focus:outline-none ${
                                lead.status === 'New'
                                  ? 'bg-red-50 text-red-700 border-red-200'
                                  : lead.status === 'Qualified'
                                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                                  : lead.status === 'Converted'
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-slate-50 text-slate-700 border-slate-200'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Qualified">Qualified</option>
                              <option value="Follow-up">Follow-up</option>
                              <option value="Converted">Converted</option>
                              <option value="Not Interested">Not Interested</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>

                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="p-1.5 text-slate-600 hover:text-brand-red hover:bg-slate-100 rounded-lg transition-colors"
                                title="View Complete Lead Profile"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <a
                                href={`tel:${lead.phone}`}
                                className="p-1.5 text-slate-600 hover:text-brand-red hover:bg-slate-100 rounded-lg transition-colors"
                                title="Call Candidate"
                              >
                                <Phone className="w-4 h-4" />
                              </a>
                              <a
                                href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20this%20is%20from%20AKME%20Immigrations%20regarding%20your%20inquiry%20${lead.id}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                title="Chat on WhatsApp"
                              >
                                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PAYMENTS LOG */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Verified Payment Transactions</h3>
                <p className="text-xs text-slate-500">Live & sandbox online payments recorded through Razorpay</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                Gateway: Active
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Receipt Ref / Order</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Payment ID</th>
                    <th className="py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {payments.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-500">
                        No payment records registered yet.
                      </td>
                    </tr>
                  ) : (
                    payments.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/70">
                        <td className="py-3.5 px-4">
                          <span className="font-mono font-bold text-slate-900 block">{p.id}</span>
                          <span className="text-[11px] text-slate-400 font-mono">{p.orderId}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <strong className="block text-slate-900">{p.customerName}</strong>
                          <span className="text-xs text-slate-500">{p.phone}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">{p.service}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          ₹{p.amount.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            p.status === 'Paid'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : p.status === 'Created'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-red-50 text-red-700 border border-red-200'
                          }`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs text-slate-600">
                          {p.razorpayPaymentId || '-'}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-500">
                          {new Date(p.createdAt).toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: SYSTEM SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm max-w-3xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Platform Integration & Security Status
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <strong className="block text-slate-900">Razorpay Payment Gateway</strong>
                  <span className="text-slate-500">Server-side order generation and HMAC cryptographic verification</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-semibold rounded-lg text-xs">
                  Configured
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <strong className="block text-slate-900">Lead Database & Storage</strong>
                  <span className="text-slate-500">File-backed atomic storage with real-time indexing</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-semibold rounded-lg text-xs">
                  Operational
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <strong className="block text-slate-900">Admin Authentication</strong>
                  <span className="text-slate-500">HttpOnly secure cookie sessions with HMAC token signing</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-semibold rounded-lg text-xs">
                  Protected
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <strong className="block text-slate-900">UTM Campaign & Referrer Tracker</strong>
                  <span className="text-slate-500">Captures utm_source, utm_medium, utm_campaign with inquiries</span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-semibold rounded-lg text-xs">
                  Active
                </span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* LEAD PROFILE DETAIL MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 my-8">
            
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400">Candidate Dossier</span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedLead.name}</h3>
                <span className="text-xs font-mono font-bold text-brand-red">{selectedLead.id}</span>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[11px]">Phone</span>
                <a href={`tel:${selectedLead.phone}`} className="font-semibold text-brand-red hover:underline">
                  {selectedLead.phone}
                </a>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[11px]">Email</span>
                <span className="font-semibold text-slate-800">{selectedLead.email}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[11px]">Target Destination</span>
                <span className="font-semibold text-slate-800">{selectedLead.country}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[11px]">Service Requested</span>
                <span className="font-semibold text-slate-800">{selectedLead.service}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[11px]">Qualification</span>
                <span className="font-semibold text-slate-800">{selectedLead.qualification || '-'}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block text-[11px]">IELTS / Score</span>
                <span className="font-semibold text-slate-800">{selectedLead.ieltsScore || selectedLead.pteScore || 'None'}</span>
              </div>
            </div>

            {selectedLead.message && (
              <div className="p-3.5 bg-slate-50 rounded-xl text-xs sm:text-sm">
                <span className="text-slate-400 block text-[11px] font-semibold mb-1">Student Message</span>
                <p className="text-slate-700 italic">"{selectedLead.message}"</p>
              </div>
            )}

            {/* Counsellor Notes Timeline */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                Counselling Notes Timeline
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {(!selectedLead.notes || selectedLead.notes.length === 0) ? (
                  <p className="text-xs text-slate-400 italic">No staff notes recorded yet.</p>
                ) : (
                  selectedLead.notes.map((n, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                      <div className="flex justify-between text-slate-400 text-[10px] mb-1">
                        <span>{n.author}</span>
                        <span>{new Date(n.date).toLocaleString('en-IN')}</span>
                      </div>
                      <p className="text-slate-800">{n.text}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Add Note Input */}
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Add note on candidate status, transcript status, call outcome..."
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-red"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddNote(selectedLead.id);
                  }}
                />
                <button
                  onClick={() => handleAddNote(selectedLead.id)}
                  className="px-4 py-2 bg-brand-red hover:bg-brand-redDark text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Save Note
                </button>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleDeleteLead(selectedLead.id)}
                className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Lead</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedLead.name)},%20this%20is%20from%20AKME%20Immigrations.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
