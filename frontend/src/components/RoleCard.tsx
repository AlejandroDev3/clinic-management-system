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
      className={`cursor-pointer p-4 text-center transition-all hover:scale-105 ${
        selected
          ? "border-2 border-blue-500 bg-blue-50 shadow-lg"
          : "border hover:bg-slate-100"
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