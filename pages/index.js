import Head from 'next/head';
import Footer from './Components/Footer';
import Section from './Components/Section';
// import '../styles/globals.css';
import {client} from '../sanity/lib/client' // Adjust the path if necessary
import { useEffect, useState } from "react";

export default function Home() {
  const [appearance, setAppearance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch('*[_type == "appearance"]')
      .then((data) => {
        setAppearance(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Sara Barcons</title> 
        <meta name="description" content="Sara's Portfolio" /> 
        <link rel="icon" href="/FAVICON_sarabarcons 2.png" />
        <link rel="preconnect" href="https://lspp38nx.apicdn.sanity.io"/>
        <link rel="dns-prefetch" href="https://lspp38nx.apicdn.sanity.io"/>

        {/* <link rel="stylesheet" href="https://use.typekit.net/cyz5kzd.css"></link> */}

        {/* IS slower because stylesheet is not in _document.js */}
        {/* {appearance && <link rel="stylesheet" href={`${appearance.font}`} />} */}
      </Head>

      <main style={{ backgroundColor: '#7414140' }}>
        <Section />
        <Footer /> 
      </main>
    </>
  );
}
