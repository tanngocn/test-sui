import { LAYOUT_ROW, LAYOUT_ROW_DRIRECT_COL } from "@/constants/common";
import Row from "../Row";
import { FC } from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressProps {
  percent: number;
  currentValue: number;
  maxTotal: number;
}
const ProgressCustom: FC<ProgressProps> = ({
  percent,
  currentValue,
  maxTotal,
}) => {
  return (
    <div className="progress p-4 rounded-[8px] w-full bg-[#000]">
      <Row type={LAYOUT_ROW_DRIRECT_COL.START}>
        <Row type={LAYOUT_ROW.BETWEEN}>
          <span className="text-[16px] font-semibold">
            {currentValue}/{maxTotal}
          </span>
          <span className="text-[16px] font-semibold">{percent}%</span>
        </Row>
        <Progress className="h-[10px]" value={percent} />
      </Row>
    </div>
  );
};
export default ProgressCustom;
