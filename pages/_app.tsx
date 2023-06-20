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

  return <Component {...pageProps} />;
}
