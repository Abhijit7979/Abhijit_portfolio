import { SectionContainer } from '@/components/layout/SectionContainer';
import { FadeInView } from '@/components/animations/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { BlogCard } from '@/components/cards/BlogCard';
import { blogPosts } from '@/data/blog';

export const BlogSection = () => {
  return (
    <SectionContainer id="blog" className="bg-muted/30">
      <FadeInView>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Articles & Insights
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
          <p className="text-center text-muted-foreground max-w-2xl mb-12">
            Technical articles and insights about AI, RAG pipelines, and multi-agent systems
          </p>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
