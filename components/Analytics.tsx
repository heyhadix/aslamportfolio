'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined') return;

    // Track initial page view
    if ((window as any).gtag) {
      (window as any).gtag('config', GA_ID, {
        page_path: window.location.pathname,
      });
    }
  }, []);

  if (!GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Helper function to track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag && GA_ID) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Helper function to track project views
export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', 'Projects', projectName);
};

// Helper function to track contact form submissions
export const trackContactSubmission = (success: boolean) => {
  trackEvent('contact_form', 'Contact', success ? 'success' : 'error');
};
