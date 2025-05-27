import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FC, ReactElement } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface IInputProps {
  field?: ControllerRenderProps<FieldValues, string>;
  prefix?: ReactElement | undefined;
  suffix?: ReactElement | undefined;
  placeholder?: string;
  classNames?: string;
  classInput?: string;
  max?: number;
  maxLength?: number;
  onChange?: (value?: string) => void;
}

const InputText: FC<IInputProps> = ({
  prefix = undefined,
  suffix = undefined,
  field,
  classNames,
  max,
  maxLength = 256,
  placeholder,
  onChange,
  classInput,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field?.onChange(e.target?.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center mt-0 rounded-[12px] h-11 border border-black-300 text-white",
        classNames,
        {
          "pl-5 bg-background-input content-14": prefix,
          "pr-5 bg-black content-14": suffix,
        }
      )}
    >
      {prefix}
      <Input
        value={field?.value}
        className={cn(
          "bg-background-input border-0 w-full h-[42px] px-3",
          classInput
        )}
        placeholder={placeholder}
        onChange={handleChange}
        max={max}
        maxLength={maxLength}
      />
      {suffix}
    </div>
  );
};

export default InputText;
