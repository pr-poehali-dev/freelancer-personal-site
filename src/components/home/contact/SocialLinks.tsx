
import Icon from "@/components/ui/icon";

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    { name: "GitHub", icon: "Github", url: "#" },
    { name: "LinkedIn", icon: "Linkedin", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "Instagram", icon: "Instagram", url: "#" },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a 
          key={social.name}
          href={social.url} 
          className="bg-gray-800 hover:bg-purple-500/20 p-2.5 rounded-full transition-colors"
          aria-label={social.name}
        >
          <Icon name={social.icon} className="text-purple-500" size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
