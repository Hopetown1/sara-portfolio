import { Html, Head, Main, NextScript } from "next/document";
// import {client} from '../sanity/lib/client' // Adjust the path if necessary
// import { useEffect, useState } from "react";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        {/* <link rel="stylesheet" href="https://use.typekit.net/cyz5kzd.css" /> */}

        {/* {appearance && <link rel="stylesheet" href={`${appearance.font}`} />} */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

