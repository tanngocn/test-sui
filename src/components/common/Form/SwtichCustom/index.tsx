import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { LAYOUT_ROW } from "@/constants/common";
import { FC } from "react";
import Row from "../../Row";

interface SwitchCustomProps {
  label?: string;
  name: string;
  onFilter: (value: boolean) => void;
  checked:boolean;
  className?: string;
}
const SwitchCustom: FC<SwitchCustomProps> = ({ label, name, onFilter, checked  }) => {

const handleChange = (value: boolean) => {
    onFilter(value);
};
  return (
    <Row type={LAYOUT_ROW.START} className="gap-2">
      <Label htmlFor={name} className="text-[16px]">{label}</Label>
      <Switch id={name} className="bg-primary" checked={checked} onChange={(e) => handleChange((e.target as HTMLInputElement).checked)} />
    </Row>
  );
};


export default SwitchCustom;