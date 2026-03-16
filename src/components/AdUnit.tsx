import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdUnit() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 overflow-hidden flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minWidth: '300px', width: '100%' }}
        data-ad-client="ca-pub-3012142307165848"
        data-ad-slot="7337677614"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
