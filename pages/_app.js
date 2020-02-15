import React, { useEffect } from "react";
import Head from "next/head";
import TagManager from "react-gtm-module";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  pauseOnVisibilityChange: true,
  draggable: true,
  pauseOnHover: true
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-MWNT839"
    });
    TagManager.initialize({
      gtmId: "GTM-PN62ZXM"
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Primary Children’s Hospital is recognized as one of the nation’s best children’s hospitals. For nearly a century, we’ve helped countless kids win."
        />
        <meta
          property="og:image"
          content="https://herekidswin.org/og-image.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans:400,400i,500,500i,600,600i,700,700i&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
