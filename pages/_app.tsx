import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { analytics } from '../firebase/firebase';
import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';

export default function App({ Component, pageProps }: AppProps) {
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
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6745225928334897"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
