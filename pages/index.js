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
        // console.log('Fetched appearance data:', data);
        setAppearance(data[0]);
        // console.log('Font Type:', data[0].font);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Head>
        <title>Saras Portfolio</title> 
        <meta name="description" content="Sara's Portfolio" /> 
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://use.typekit.net/cyz5kzd.css"></link> */}

        {/* IS slower because stylesheet is not in _document.js */}
        {appearance && <link rel="stylesheet" href={`${appearance.font}`} />}
      </Head>

      <main style={{ backgroundColor: '#7414140' }}>
        <Section />
        <Footer /> 
      </main>
    </>
  );
}

// export default function Home() {
//     const [appearance, setAppearance] = useState(null);
//   useEffect (() => {
//   client
//   .fetch('*[_type == "appearance"]')
//   .then((data) => {
//     console.log('Fetched appearance data:', data);
//     setAppearance(data[0]);
//     console.log('Font Type:', data[0].font);

//   })
//   .catch(console.error);
// }, []);
//   return (
//     <>
//       <Head>
//         <title>Saras Portfolio</title> 
//         <meta name="description" content="Sara's Portfolio" /> 
//         <link rel="icon" href="/favicon.ico" />
//         {/* <link rel="stylesheet" href="https://use.typekit.net/cyz5kzd.css"></link> */}
//         <link rel="stylesheet" href={appearance.font} />
//       </Head>

//       <mains style={{ backgroundColor: '#7414140' }}>
//         <Section />
//         <Footer /> 
//       </mains>
  
//     </>
//   );
// }
