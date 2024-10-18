import { cn } from "@/lib/utils";
import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  Icon?: LucideIcon;
  className?: string;
  value: string;
  IconSize?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  Icon,
  className,
  value,
  IconSize = 24,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-[300px] h-[60px] bg-[#FF3B3F] flex rounded-full text-xl px-8 py-4 items-center font-bold tracking-wide justify-center cursor-pointer relative",
        className
      )}
      onClick={onClick}
    >
      <span>{value}</span>
      {Icon && (
        <Icon size={IconSize} strokeWidth="3" className="absolute right-8" />
      )}
    </button>
  );
};

export default Button;
