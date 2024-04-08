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
      </Head>

      <main>
        <Section />
        <Footer /> 
      </main>
  
    </>
  );
}
