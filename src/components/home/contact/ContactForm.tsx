
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log("Form submitted:", formData);
    // Очистка формы после отправки
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Имя</label>
          <Input 
            id="name" 
            type="text" 
            placeholder="Ваше имя" 
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Ваш email" 
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">Тема</label>
        <Input 
          id="subject" 
          type="text" 
          placeholder="Тема сообщения" 
          value={formData.subject}
          onChange={handleChange}
          className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Сообщение</label>
        <Textarea 
          id="message" 
          placeholder="Ваше сообщение" 
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
          rows={5}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
      >
        Отправить сообщение
      </Button>
    </form>
  );
};

export default ContactForm;
