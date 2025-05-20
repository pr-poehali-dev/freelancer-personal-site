
const Footer = () => {
  return (
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
  );
};

export default Footer;
