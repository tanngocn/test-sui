import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { FC, ReactElement } from 'react';
import { ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

interface IInputProps {
  suffix?: ReactElement;
  field?: ControllerRenderProps<FieldValues, string>;
  placeholder?: string;
  classNames?: string;
  classInput?: string;
  max?: number;
  balance?: number | string | undefined;
  isAllowed?: (value: unknown) => boolean;
  maxLength?: number;
  onChange?: (value?: string) => void;
}

const InputNumber: FC<IInputProps> = ({
  field,
  maxLength,
  suffix,
  classNames,
  max,
  placeholder,
  onChange,
  isAllowed,
  classInput,
}) => {
  return (
    <div
      className={cn(
        'flex items-center mt-0 rounded-[12px]  xl:h-[54px] lg:h-[44px] h-[42px] border border-black-300 text-white',
        {
          'bg-black content-14': suffix,
        },
        classNames
      )}
    >
      <NumericFormat
        value={field?.value}
        onValueChange={(values) => {
          if (!field?.name) return;
          const { value } = values;
          field?.onChange(value);
          if (onChange) {
            onChange(value);
          }
        }}
        customInput={Input}
        datatype="BigNumber"
        max={max}
        maxLength={maxLength}
        allowNegative={false}
        isAllowed={isAllowed}
        placeholder={placeholder}
        valueIsNumericString={true}
        thousandSeparator
        className={cn('border-transparent xl:h-[52px] lg:h-[44px] h-[40px] ', classInput)}
      />
      {suffix}
    </div>
  );
};

export default InputNumber;
