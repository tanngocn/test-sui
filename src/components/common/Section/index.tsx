import { ReactElement } from "react";
import Row from "../Row";
import { LAYOUT_ROW } from "@/constants/common";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  children: ReactElement[] | ReactElement;
  showButtonViewMore?: boolean;
  classWrapper?: string;
  classTitle?: string;
}

const SectionCommon = ({
  title,
  children,
  classWrapper = "",
  classTitle = 'text-center',
  showButtonViewMore = true,
}: SectionProps) => {
  return (
    <div className={cn("section py-12", classWrapper)}>
      <div className="container">
        <>
          {title && (
            <h2 className={cn("text-[35px] mb-12 capitalize",classTitle)}>
              {title}
            </h2>
          )}
        </>
        {children}
      </div>
      {showButtonViewMore && (
        <Row type={LAYOUT_ROW.CENTER}>
          <Button className="h-[28px] py-[24px] px-4 mt-8">
            View all projects
          </Button>
        </Row>
      )}
    </div>
  );
};
export default SectionCommon;
