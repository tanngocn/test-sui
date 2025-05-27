import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface IItem {
  label: string;
  value: string;
}

interface IInputSelectProps {
  options: IItem[];
  field?: ControllerRenderProps<FieldValues, string>;
  value?: string;
  classNames?: string;
  classInput?: string;
  placeholder?: string;
  onChange?: (value: string, name: string) => void;
  isTable?: boolean;
}

const InputSelect: FC<IInputSelectProps> = ({
  field,
  isTable = false,
  options,
  value,
  onChange,
  placeholder,
  classNames,
  classInput,
}) => {
  const handleChange = (value: string) => {
    field?.onChange(value);
    !!onChange && onChange(value, String(field?.name));
  };

  return (
    <div className={cn(classNames)}>
      <Select
        value={value ? String(value) : field?.value}
        onValueChange={handleChange}
      >
        <SelectTrigger
          className={cn(
            "border rounded-[12px] text-white border-black-300 bg-background-input h-11",
            {
              "text-white/60": !value || !field?.value,
              "text-white": value || field?.value,
              "min-w-[96px] content-14": isTable,
              "min-w-[150px]": !isTable,
            },
            classInput
          )}
        >
          {isTable && (
            <SelectValue placeholder={placeholder}>{value}/page</SelectValue>
          )}
          {!isTable && <SelectValue placeholder={placeholder} />}
        </SelectTrigger>
        <SelectContent className="text-white">
          {options?.map((item: IItem, index: number) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        
        </SelectContent>
      </Select>
    </div>
  );
};

export default InputSelect;
