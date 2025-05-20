
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section id="hero" className={`min-h-[90vh] flex items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Привет, я Алексей
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Фронтенд-разработчик</h2>
            <p className="text-gray-300 text-lg mb-8">
              Создаю современные и эффективные веб-приложения с отличным пользовательским опытом. Более 5 лет опыта в разработке интерфейсов.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Мои проекты
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                Связаться
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-50 animate-pulse"></div>
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-purple-500/50 relative">
                <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop" alt="Алексей" />
                <AvatarFallback className="bg-purple-900">АС</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
