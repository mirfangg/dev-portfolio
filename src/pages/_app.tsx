import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Layout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ParallaxProvider>
  );
}
