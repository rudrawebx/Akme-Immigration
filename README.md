# AKME Immigrations & Education - Modern Website & CRM

Official, production-grade Next.js 14 rebuild for **AKME Immigrations & Education**, Patiala, Punjab.

Built with Next.js App Router, TypeScript, Tailwind CSS, Razorpay UPI/Card Payment Gateway integration, and an internal Lead & Payment Management CRM.

---

## 🌟 Core Features

- **Next.js 14 App Router Architecture**: Clean component-based hierarchy with SSR/SSG for ultra-fast page loads and SEO optimization.
- **Brand Identity**: Preserved official AKME logo, brand red accents (`#DC2626`), and a bright, clean, modern light aesthetic.
- **Hero Video Showcase**: Integrated high-definition student campus video with autoplay, loop, audio controls, and an instant assessment switcher.
- **Streamlined Navigation**:
  - Consolidated **Services** dropdown (Study Visa, Visitor Visa, Business Immigration, IELTS Coaching, PTE Prep, Language Academy).
  - Prominent **Free Profile Assessment** CTA.
- **Country Destination Guides**: Comprehensive guides for Canada (with Toronto skyline visuals), Australia, UK, USA, Germany, Ireland, and New Zealand.
- **Lead Generation & Management**:
  - Atomic JSON data storage (`data/leads.json`, `data/payments.json`).
  - Automated ID generation (`AKME-LD-2026-XXXX`).
  - Protected admin dashboard at `/admin` with CSV export, status updates, and notes.
- **Razorpay Payment Gateway**:
  - Supports UPI, QR code, Credit/Debit cards, and Net Banking.
  - Server-side HMAC SHA256 signature verification.
  - Test/mock mode fallback when live credentials are not provided.
- **SEO & Compliance**:
  - Dynamic `sitemap.xml` and `robots.txt`.
  - JSON-LD Schema markup (EducationalOrganization, FAQPage, BreadcrumbList).
  - OpenGraph and Twitter card metadata.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://akmeimmigrations.com

# Razorpay Keys (Live or Test)
RAZORPAY_KEY_ID=rzp_live_your_key_id
RAZORPAY_KEY_SECRET=your_key_secret_here
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_your_key_id

# Admin CRM
ADMIN_EMAIL=admin@akmeimmigrations.com
ADMIN_PASSWORD=AkmeAdmin@2026!
SESSION_SECRET=your-random-secure-session-string
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or available port) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🛡️ Admin CRM Access
- URL: `/admin`
- Default Email: `admin@akmeimmigrations.com`
- Default Password: `AkmeAdmin@2026!`

---

## 🏢 Business Information
- **Name**: AKME Immigrations & Education
- **Address**: SCO 37 & 38, near Vardhman Hospital, Urban Estate Phase II, Rajpura Road, Patiala, Punjab
- **Helpline**: +91 98155-12980
- **Email**: akme.help@gmail.com
- **Website**: https://akmeimmigrations.com
