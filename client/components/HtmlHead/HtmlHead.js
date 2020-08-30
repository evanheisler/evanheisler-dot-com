import React from "react";
import Head from "next/head";

const HtmlHead = ({ title }) => {
  return (
    <Head>
      <meta
        name="description"
        content="Writing code since 2006. Highly focused on the JavaScript ecosystem and working with mission-based organizations."
      />
      <link rel="canonical" href="https://evanheisler.com" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="text/html" />
      <meta property="og:title" content="Evan Heisler :: Software Engineer" />
      <meta
        property="og:description"
        content="Writing code since 2006. Highly focused on the JavaScript ecosystem and working with mission-based organizations."
      />
      <meta
        property="og:image"
        content="https://gravatar.com/avatar/14fe54e6d06e1da71a51d0a9ac62f8c0?s=1080"
      />
      <meta property="og:url" content="https://evanheisler.com" />
      <meta property="og:site_name" content="evanheisler dot com" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <title>{title}</title>
    </Head>
  );
};

export default HtmlHead;
