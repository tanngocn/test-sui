import { LAYOUT_ROW } from "@/constants/common";
import { FC, ReactElement } from "react";
import Row from "../../Row";

interface CardRowProps {
  data: {
    label: string;
    value: string | number | ReactElement;
  }[];
}

const CardRow: FC<CardRowProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index: number) => (
        <Row type={LAYOUT_ROW.BETWEEN} key={index}>
          <label>{item.label}</label>
          <span>{item.value}</span>
        </Row>
      ))}
    </>
  );
};

export default CardRow;
