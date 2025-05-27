import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { STATUS_POOL } from "@/constants/common";
import { FC, ReactElement } from "react";
import ProgressCustom from "../Progress";
import Coundown from "../Countdown";
import CardRow from "./CardRow";

interface CardProps {
  data: unknown;
  rows: {
    label: string;
    value: string | number | ReactElement;
  }[];
  status: STATUS_POOL;
}

const CardCustom: FC<CardProps> = ({ data, status, rows }) => {
  console.log(data, status);
  return (
    <Card className="p-0 border border-[#d1d1d1] rounded-[8px] shadow-lg">
      <CardHeader className="p-0 h-[240px]">
        <img
          src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg"
          alt="card-image"
          className="w-full h-full"
        />
      </CardHeader>
      <CardContent className="p-0 px-4">
        <h2 className="text-[30px] font-[600] mb-4">Project Name</h2>
        <CardRow data={rows} />
      </CardContent>
      <CardFooter className="p-0 w-full mt-4">
        {status === STATUS_POOL.ONGOING && (
          <ProgressCustom
            currentValue={100000}
            maxTotal={1000000}
            percent={10}
          />
        )}
        {status !== STATUS_POOL.ONGOING && (
          <Coundown
            label="countdown start"
            status={status}
            time={Date.now() + 1000 * 3600 * 30 * 24}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default CardCustom;
