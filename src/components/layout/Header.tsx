
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "backdrop-blur-md bg-black/40 py-2" : "backdrop-blur-md bg-black/30 py-4"
    }`}>
      <div className="container mx-auto px-4">
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
  );
};

export default Header;
