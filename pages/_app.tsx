import '../styles/globals.css';
import Script from 'next/script';
import { useRouter } from 'next/dist/client/router';
import { AppProps } from 'next/app';
import { pageview } from '../libs/gtag';
import { useEffect } from 'react';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const handleRouteChange = (url: string): void => {
    pageview(url);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  });

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />

      <Script id="gtagSetup">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

export default MyApp;
