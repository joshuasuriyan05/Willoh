import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: Props) {
  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">

      {Icon && (
        <Icon className="text-[#0b1c3d] mb-4" size={32} />
      )}

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

    </div>
  );
}