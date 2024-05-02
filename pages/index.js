import Head from 'next/head';
import Footer from './Components/Footer';
import Section from './Components/Section';
// import '../styles/globals.css';



export default function Home() {
  return (
    <>
      <Head>
        <title>Saras Portfolio</title> 
        <meta name="description" content="Sara's Portfolio" /> 
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://use.typekit.net/cyz5kzd.css"></link> */}
      </Head>

      <mains style={{ backgroundColor: '#7414140' }}>
        <Section />
        <Footer /> 
      </mains>
  
    </>
  );
}
