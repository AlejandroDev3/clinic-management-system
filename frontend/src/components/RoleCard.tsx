import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";

type RoleCardProps = {
  icon: ReactNode;
  title: string;
  onClick: () => void;
  selected: boolean;
};

function RoleCard({
  icon,
  title,
  onClick,
  selected,
}: RoleCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer p-4 text-center transition-all hover:scale-105 bg-gray-100/90 ${
        selected
          ? "border-2 border-yellow-500 bg-yellow-50/80 shadow-lg"
          : "border hover:bg-slate-100/90"
      }`}
    >
      <div className="flex justify-center">
        {icon}
      </div>

      <p className="mt-2 text-sm font-semibold">
        {title}
      </p>
    </Card>
  );
}

export default RoleCard;