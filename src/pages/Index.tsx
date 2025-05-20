
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    projects: false,
    contact: false,
  });

  // Имитация загрузки элементов с анимацией
  useEffect(() => {
    setTimeout(() => setIsVisible({ ...isVisible, hero: true }), 300);
    setTimeout(() => setIsVisible({ ...isVisible, about: true }), 600);
    setTimeout(() => setIsVisible({ ...isVisible, projects: true }), 900);
    setTimeout(() => setIsVisible({ ...isVisible, contact: true }), 1200);
  }, []);

  const projects = [
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

  const skills = [
    "React", "Vue.js", "JavaScript", "TypeScript", "Node.js", 
    "HTML/CSS", "UI/UX дизайн", "Figma", "Адаптивная верстка"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Алексей.dev
            </div>
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="#about" onClick={() => setActiveSection("about")} 
                   className={`hover:text-purple-400 transition-colors ${activeSection === "about" ? "text-purple-500" : ""}`}>
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setActiveSection("projects")} 
                   className={`hover:text-purple-400 transition-colors ${activeSection === "projects" ? "text-purple-500" : ""}`}>
                  Проекты
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setActiveSection("contact")} 
                   className={`hover:text-purple-400 transition-colors ${activeSection === "contact" ? "text-purple-500" : ""}`}>
                  Контакты
                </a>
              </li>
            </ul>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Нанять меня
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {/* Герой секция */}
        <section id="hero" className={`min-h-[90vh] flex items-center transition-opacity duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
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

        {/* О фрилансере */}
        <section id="about" className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${isVisible.about ? 'opacity-100' : 'opacity-0'}`}>
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

        {/* Проекты */}
        <section id="projects" className={`py-20 transition-opacity duration-1000 ${isVisible.projects ? 'opacity-100' : 'opacity-0'}`}>
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
                    <Card key={project.id} className="overflow-hidden bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
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
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="website" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.filter(p => p.category === "website").map((project) => (
                    <Card key={project.id} className="overflow-hidden bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
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
                  ))}
                </div>
              </TabsContent>
              
              {/* Остальные вкладки проектов реализованы аналогично */}
              <TabsContent value="mobile" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.filter(p => p.category === "mobile").map((project) => (
                    <Card key={project.id} className="overflow-hidden bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
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
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="ecommerce" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.filter(p => p.category === "ecommerce").map((project) => (
                    <Card key={project.id} className="overflow-hidden bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
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
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-10">
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                Все проекты
                <Icon name="ExternalLink" className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contact" className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${isVisible.contact ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Связаться со мной
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-full">
                      <Icon name="Mail" className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p>alex@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-full">
                      <Icon name="Phone" className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Телефон</p>
                      <p>+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-full">
                      <Icon name="MapPin" className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Локация</p>
                      <p>Москва, Россия</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 mt-8">Социальные сети</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 hover:bg-purple-500/20 p-2.5 rounded-full transition-colors">
                    <Icon name="Github" className="text-purple-500" size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-purple-500/20 p-2.5 rounded-full transition-colors">
                    <Icon name="Linkedin" className="text-purple-500" size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-purple-500/20 p-2.5 rounded-full transition-colors">
                    <Icon name="Twitter" className="text-purple-500" size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-purple-500/20 p-2.5 rounded-full transition-colors">
                    <Icon name="Instagram" className="text-purple-500" size={20} />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Напишите мне</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Имя</label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Ваше имя" 
                        className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Ваш email" 
                        className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Тема</label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="Тема сообщения" 
                      className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Сообщение</label>
                    <Textarea 
                      id="message" 
                      placeholder="Ваше сообщение" 
                      className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4 md:mb-0">
              Алексей.dev
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
