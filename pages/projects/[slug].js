import { useRouter } from 'next/router';
import PortfolioPage from '../Components/PortfolioPage';
import { usePortfolio } from '@/context/PortfolioContext';
import { slugify } from '@/lib/slug';

export default function ProjectPage() {
  const router = useRouter();
  const { projects } = usePortfolio();

  const project = projects.find((p) => slugify(p.title) === router.query.slug);
  const title = project ? `${project.title} — Sara Barcons` : 'Sara Barcons';

  return <PortfolioPage title={title} />;
}
