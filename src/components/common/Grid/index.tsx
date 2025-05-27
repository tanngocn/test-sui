import { LAYOUT_GRID } from "@/constants/common";
import { cn } from "@/lib/utils";
import { FC, ReactElement } from "react";

interface GridLayoutProps {
  type: LAYOUT_GRID;
  children: ReactElement[]|ReactElement;
  className?:string;
}
const GridLayout: FC<GridLayoutProps> = ({ type, children,className }) => {
  if (type === LAYOUT_GRID.SECTION) {
    return (
      <div className={cn("grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ", className)}>
        {children}
      </div>
    );
  }

  return <></>;
};

export default GridLayout;
