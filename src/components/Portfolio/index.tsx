import CompenentHeader from '../CompenentHeader';
import Container from '../Container';
import ProjectCard from './ProjectCard';
import { portfolioData } from '@/mocks/constants';

function Portfolio() {
  return (
    <Container id="portfolio">
      <CompenentHeader title="Portfolio" />
      <div className="flex items-center justify-center flex-wrap gap-6 sticky top-0">
        {portfolioData.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </Container>
  );
}

export default Portfolio;
