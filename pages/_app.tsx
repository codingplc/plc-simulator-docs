import '@/styles/globals.css';
import { logEvent } from 'firebase/analytics';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { analytics } from '../firebase/firebase';

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'screen_view', {
        firebase_screen: 'screenName',
        firebase_screen_class: 'screenClass',
      });
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {/* No ads on the home page: they compete with the one click it asks for. next/script,
          because a plain script tag does not run when React adds it after a page change. */}
      {asPath !== '/' && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6745225928334897"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
