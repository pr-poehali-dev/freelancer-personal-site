
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
}

const ContactItem = ({ icon, label, value }: ContactItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-purple-500/20 p-2 rounded-full">
        <Icon name={icon} className="text-purple-500" />
      </div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ContactItem;
