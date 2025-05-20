
import ContactItem from "./ContactItem";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
  isVisible: boolean;
}

const ContactSection = ({ isVisible }: ContactSectionProps) => {
  return (
    <section id="contact" className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Связаться со мной
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
            <div className="space-y-4 mb-6">
              <ContactItem 
                icon="Mail" 
                label="Email" 
                value="alex@example.com" 
              />
              <ContactItem 
                icon="Phone" 
                label="Телефон" 
                value="+7 (999) 123-45-67" 
              />
              <ContactItem 
                icon="MapPin" 
                label="Локация" 
                value="Москва, Россия" 
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Социальные сети</h3>
            <SocialLinks />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Напишите мне</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
