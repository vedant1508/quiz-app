import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

interface ResultIndicatorProps {
  variant: "correct" | "incorrect";
  count: number;
  label: string;
}

const ResultIndicator = ({ variant, count, label }: ResultIndicatorProps) => {
  return (
    <div
      className={cn(
        "flex items-center p-5 rounded-md max-w-xl gap-3",
        variant === "correct" ? "bg-green-100" : "bg-red-100"
      )}
    >
      {variant === "correct" ? (
        <div className="h-4 w-4 rounded-full bg-[#44B77B]"></div>
      ) : (
        <div className="h-4 w-4 rounded-full bg-[#FF3B3F]"></div>
      )}
      <span
        className="text-zinc-800 font-semibold"
      >
        {count}
      </span>
      <span
        className="text-zinc-500 font-medium"
      >
        {label}
      </span>
    </div>
  );
};

export default ResultIndicator;
