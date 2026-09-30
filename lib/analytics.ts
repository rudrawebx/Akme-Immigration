// Analytics & Conversion Tracking System
// Supports GA4, GTM, Meta Pixel with privacy-safe tracking and UTM preservation

export interface UtmParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  landingPage?: string;
  referrer?: string;
}

const UTM_STORAGE_KEY = 'akme_utm_params';

// Capture and preserve UTM parameters across sessions
export function captureUtmParameters(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const existingStr = sessionStorage.getItem(UTM_STORAGE_KEY);
    const existing: UtmParams = existingStr ? JSON.parse(existingStr) : {};

    const utmSource = urlParams.get('utm_source') || existing.utmSource;
    const utmMedium = urlParams.get('utm_medium') || existing.utmMedium;
    const utmCampaign = urlParams.get('utm_campaign') || existing.utmCampaign;
    const utmContent = urlParams.get('utm_content') || existing.utmContent;
    const utmTerm = urlParams.get('utm_term') || existing.utmTerm;

    const currentData: UtmParams = {
      utmSource: utmSource || undefined,
      utmMedium: utmMedium || undefined,
      utmCampaign: utmCampaign || undefined,
      utmContent: utmContent || undefined,
      utmTerm: utmTerm || undefined,
      landingPage: existing.landingPage || window.location.pathname,
      referrer: existing.referrer || document.referrer || undefined,
    };

    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentData));
    return currentData;
  } catch {
    return {};
  }
}

export function getStoredUtmParameters(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

// Global Event Tracker for GA4, GTM, and Meta Pixel
export function trackConversion(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  const sanitizedParams = {
    ...params,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Analytics 4
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, sanitizedParams);
  }

  // 2. Google Tag Manager DataLayer
  if (Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push({
      event: eventName,
      ...sanitizedParams,
    });
  }

  // 3. Meta (Facebook) Pixel
  if (typeof (window as any).fbq === 'function') {
    // Map custom event to standard pixel event where applicable
    if (eventName === 'Form Submit' || eventName === 'Profile Assessment') {
      (window as any).fbq('track', 'Lead', sanitizedParams);
    } else if (eventName === 'Payment Success') {
      (window as any).fbq('track', 'Purchase', {
        value: params.value || 0,
        currency: 'INR',
      });
    } else if (eventName === 'Payment Start') {
      (window as any).fbq('track', 'InitiateCheckout', sanitizedParams);
    } else {
      (window as any).fbq('trackCustom', eventName, sanitizedParams);
    }
  }

  // Dev log for transparency
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Event Tracked: ${eventName}]`, sanitizedParams);
  }
}
