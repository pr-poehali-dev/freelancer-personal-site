
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection = ({ isVisible }: ProjectsSectionProps) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Интернет-магазин",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      description: "Разработка полнофункционального магазина с интеграцией платежей",
    },
    {
      id: 2,
      title: "Мобильное приложение",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop",
      description: "Приложение для доставки еды с интуитивным интерфейсом",
    },
    {
      id: 3,
      title: "Корпоративный сайт",
      category: "website",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      description: "Разработка брендированного сайта для юридической компании",
    },
    {
      id: 4,
      title: "Дашборд аналитики",
      category: "dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      description: "Интерактивная панель для визуализации данных",
    },
  ];

  return (
    <section id="projects" className={`py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Мои проекты
        </h2>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="w-full justify-start bg-gray-800/50 p-1 mb-8">
            <TabsTrigger value="all">Все проекты</TabsTrigger>
            <TabsTrigger value="website">Веб-сайты</TabsTrigger>
            <TabsTrigger value="mobile">Мобильные</TabsTrigger>
            <TabsTrigger value="ecommerce">Интернет-магазины</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          {["website", "mobile", "ecommerce"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(p => p.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
            Все проекты
            <Icon name="ExternalLink" className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
