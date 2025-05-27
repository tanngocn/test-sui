import { LAYOUT_ROW, STATUS_POOL } from "@/constants/common";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Row from "../Row";
import CountdownTimer from "@/components/ui/countdown";

interface CountdownProps {
  label?: string;
  time: number;
  status: STATUS_POOL;
}

const Coundown: FC<CountdownProps> = ({ label, time, status }) => {
  return (
    <Row type={LAYOUT_ROW.START} className="p-4 gap-4 bg-[#000] rounded-[8px] w-[calc(100%-32px)] mb-4 mx-auto">
      <div
        className={cn("w-[18px] h-[18px] bg-[#fff] rounded-full blur-[4px]", {
          "bg-notification-green": status === STATUS_POOL.UPCOMING,
          "bg-notification-yellow": status === STATUS_POOL.WHITELIST,
        })}
      ></div>
      <>
        {label && <span className="text-[16px] font-semibold">{label}</span>}
        <CountdownTimer targetDate={time} />
      </>
    </Row>
  );
};
export default Coundown;