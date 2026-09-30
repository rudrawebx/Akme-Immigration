import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/auth';
import AdminDashboardClient from './AdminDashboardClient';

export const metadata = {
  title: 'AKME CRM Dashboard & Lead Manager',
};

export default function AdminPage() {
  const isAuth = isAdminAuthenticated();

  if (!isAuth) {
    redirect('/admin/login');
  }

  return <AdminDashboardClient />;
}
