import React from "react";
import { Check } from "lucide-react";

interface OptionProps {
  value: string;
  isChecked: boolean;
  onSelect: () => void;
  mul: boolean;
}

const OptionCheckbox = ({ value, isChecked, onSelect, mul }: OptionProps) => {
  return (
    <div
      className={`w-full min-h-[60px] cursor-pointer flex justify-start px-8 sm:text-[14px] lg:text-[18px] text-zinc-600 font-medium items-center bg-[#F3F4FA] rounded-md gap-4 ${
        isChecked
          ? "border-[4.44px] border-[#44B77B]"
          : "border-[4.44px] border-[#F3F4FA]"
      }`}
      onClick={onSelect}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer ${
          isChecked
            ? "bg-[#44B77B]"
            : "border-[4px] border-black opacity-[8.3%]"
        }`}
      >
        {isChecked && <Check className="text-white" size={16} />}
      </div>
      {value}
    </div>
  );
};

export default OptionCheckbox;
