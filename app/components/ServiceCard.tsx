import SpotlightCard from "@/components/SpotlightCard";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <SpotlightCard className="bg-white border border-gray-200">
      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </SpotlightCard>
  );
}
