import { LAYOUT_ROW, LAYOUT_ROW_DRIRECT_COL } from "@/constants/common";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

const Row = ({
  type,
  children,
  className,
}: {
  type: LAYOUT_ROW | LAYOUT_ROW_DRIRECT_COL;
  className?: string;
  children: ReactElement[] | ReactElement;
}) => {
  if (type === LAYOUT_ROW.BETWEEN)
    return (
      <div className={cn("flex justify-between", className)}>
        {children}
      </div>
    );
  if (type === LAYOUT_ROW.CENTER)
    return (
      <div className={cn("flex items-center justify-center", className)}>
        {children}
      </div>
    );
  if (type === LAYOUT_ROW.START)
    return <div className={cn("flex items-center", className)}>{children}</div>;
  
  if (type === LAYOUT_ROW_DRIRECT_COL.START)
    return <div className={cn("flex flex-col", className)}>{children}</div>;

  if (type === LAYOUT_ROW_DRIRECT_COL.CENTER)
    return <div className={cn("flex flex-col", className)}>{children}</div>;
};

export default Row;
