
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-purple-500">{project.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <Button variant="link" className="p-0 text-purple-400 hover:text-purple-300">
          Подробнее
          <Icon name="ArrowRight" className="ml-2" size={16} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
