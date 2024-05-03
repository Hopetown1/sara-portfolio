import { Html, Head, Main, NextScript } from "next/document";
import {client} from '../sanity/lib/client' // Adjust the path if necessary
import { useEffect } from "react";
export default function Document() {

  useEffect (() => {
  client
  .fetch('*[_type == "appearance"]')
  .then((data) => {
    // console.log('Fetched appearance data:', data);
    setAppearance(data[0]);
  })
  .catch(console.error);
}, []);

  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/cyz5kzd.css" />
        {/* <link rel="stylesheet" href={appearance.font} /> */}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

