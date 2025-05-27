import Row from "@/components/common/Row";
import { LAYOUT_ROW } from "@/constants/common";
import Countdown from "react-countdown";

const DateTimeDisplay = ({ value, type }: {value:number, type:string}) => {
  return (
    <div>
      <span>{value}</span>
      {type}
    </div>
  );
};

const CountdownTimer = ({ targetDate }: {targetDate: number}) => {

  const renderer = ({ days, hours, minutes, completed }: { days: number; hours: number; minutes: number; seconds: number; completed: boolean }) => {
    if (completed) {
      return <span>Time's up!</span>;
    } else {
      return (
        <Row type={LAYOUT_ROW.START} className="gap-[4px]">
          <DateTimeDisplay value={days} type={"d"} />
          <DateTimeDisplay value={hours} type={"h"} />
          <DateTimeDisplay value={minutes} type={"m"} />
        </Row>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
