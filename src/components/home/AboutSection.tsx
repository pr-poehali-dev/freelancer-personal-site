
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  isVisible: boolean;
}

const AboutSection = ({ isVisible }: AboutSectionProps) => {
  const skills = [
    "React", "Vue.js", "JavaScript", "TypeScript", "Node.js", 
    "HTML/CSS", "UI/UX дизайн", "Figma", "Адаптивная верстка"
  ];

  return (
    <section id="about" className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Обо мне
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Мой путь</h3>
            <p className="text-gray-300 mb-6">
              Я начал свой путь как веб-разработчик в 2017 году. За это время я успел поработать с множеством технологий и инструментов, и накопил богатый опыт в создании пользовательских интерфейсов.
            </p>
            <p className="text-gray-300 mb-6">
              Моя философия — создавать не просто работающие, но и красивые сайты, которые помогают бизнесу расти и находить новых клиентов.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button variant="outline" className="gap-2 border-purple-500 text-purple-500 hover:bg-purple-500/10">
                <Icon name="FileText" size={16} />
                Скачать резюме
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Навыки</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-purple-500 text-purple-300 py-1.5 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Образование</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Магистр компьютерных наук</h4>
                <p className="text-gray-400">Московский Государственный Университет, 2015-2017</p>
              </div>
              <div>
                <h4 className="font-medium">Бакалавр информационных технологий</h4>
                <p className="text-gray-400">Московский Государственный Университет, 2011-2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
