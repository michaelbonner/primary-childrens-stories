import React, { useEffect } from "react";
import Head from "next/head";
import TagManager from "react-gtm-module";
import { CookiesProvider } from "react-cookie";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-PN62ZXM"
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://primary-childrens-stories.michaelbonner.now.sh/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Primary Children’s Hospital is recognized as one of the nation’s best children’s hospitals. For nearly a century, we’ve helped countless kids win."
        />
        <meta
          property="og:image"
          content="https://primary-childrens-stories.michaelbonner.now.sh/og-image.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans:400,400i,500,500i,600,600i,700,700i&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
}

export default MyApp;
