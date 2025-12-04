import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SkillCategory } from '@/types/portfolio';

interface SkillCardProps {
  skillCategory: SkillCategory;
}

export const SkillCard = ({ skillCategory }: SkillCardProps) => {
  return (
    <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
      <CardHeader>
        <CardTitle className="text-xl">{skillCategory.category}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skillCategory.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
