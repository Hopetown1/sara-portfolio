// Shared layout for the home page and individual project pages. Section reads the
// active project slug from the router, so both routes render the same tree and the
// left-hand nav stays in place while the right column changes.
import Head from 'next/head';
import Footer from './Footer';
import Section from './Section';
import { usePortfolio } from '@/context/PortfolioContext';

const PortfolioPage = ({ title = 'Sara Barcons' }) => {
  const { loading } = usePortfolio();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sara's Portfolio" />
        <link rel="icon" href="/FAVICON_sarabarcons 2.png" />
        <link rel="preconnect" href="https://lspp38nx.apicdn.sanity.io" />
        <link rel="dns-prefetch" href="https://lspp38nx.apicdn.sanity.io" />
      </Head>

      <main style={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
        <Section />
        <Footer />
      </main>
    </>
  );
};

export default PortfolioPage;
