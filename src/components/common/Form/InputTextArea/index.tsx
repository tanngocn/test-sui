import { Textarea } from "@/components/ui/textarea";
import { cn, localizedNumber } from "@/lib/utils";
import { FC } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface ITextAreaProps {
  field?: ControllerRenderProps<FieldValues, string>;
  placeholder?: string;
  classNames?: string;
  maxLength?: number;
  classInput?: string;
  onChange?: (value?: string) => void;
}

const InputTextArea: FC<ITextAreaProps> = ({
  placeholder,
  field,
  maxLength,
  classNames,
  classInput,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    field?.onChange(e.target?.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={cn(
        "text-area border border-black-300 !rounded-[12px] relative bg-background-input py-2",
        classNames
      )}
    >
      <Textarea
        {...field}
        placeholder={placeholder}
        className={cn("border-transparent", classInput)}
        onChange={handleChange}
        maxLength={maxLength}
      />
      <div className="relative bottom-0 w-full text-right right-4 content-12 !text-white/60">
        {field?.value ? String(field?.value).length : 0}/{" "}
        {localizedNumber(1000)}
      </div>
    </div>
  );
};

export default InputTextArea;
