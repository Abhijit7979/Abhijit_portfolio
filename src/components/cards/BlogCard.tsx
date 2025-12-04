import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/types/portfolio';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 h-full opacity-60">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{post.title}</CardTitle>
          <Badge variant="outline" className="text-xs">
            Coming Soon
          </Badge>
        </div>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime} min read
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
