import BannerSection from "@/components/Banner";
import CardCustom from "@/components/common/CardCustom";
import GridLayout from "@/components/common/Grid";
import Row from "@/components/common/Row";
import SectionCommon from "@/components/common/Section";
import AboutImage from "@/assets/images/about-us.png";
import { Button } from "@/components/ui/button";
import {
  LAYOUT_GRID,
  LAYOUT_ROW,
  LAYOUT_ROW_DRIRECT_COL,
  STATUS_POOL,
} from "@/constants/common";

const HomePage = () => {
  const rows = [
    {
      label: "Total Raise",
      value: "1000000 ETH",
    },
    {
      label: "Rate",
      value: "1 ETH = 2500 USDC",
    },
  ];
  return (
    <div className="home-page">
      <BannerSection />
      <SectionCommon title="Ongoing pools">
        <GridLayout type={LAYOUT_GRID.SECTION} className="gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardCustom
              key={index}
              status={STATUS_POOL.ONGOING}
              data={{}}
              rows={rows}
            />
          ))}
        </GridLayout>
      </SectionCommon>
      <SectionCommon title="Upcoming pools">
        <GridLayout type={LAYOUT_GRID.SECTION} className="gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardCustom
              key={index}
              status={STATUS_POOL.UPCOMING}
              data={{}}
              rows={rows}
            />
          ))}
        </GridLayout>
      </SectionCommon>
      <SectionCommon title="Completed Sales">
        <GridLayout type={LAYOUT_GRID.SECTION} className="gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardCustom
              key={index}
              status={STATUS_POOL.WHITELIST}
              data={{}}
              rows={rows}
            />
          ))}
        </GridLayout>
      </SectionCommon>
      <SectionCommon showButtonViewMore={false}>
        <div className="container bg-primary rounded-[8px] p-4">
          <Row
            type={LAYOUT_ROW.BETWEEN}
            className="md:items-center md:flex-row flex-col"
          >
            <Row
              type={LAYOUT_ROW_DRIRECT_COL.START}
              className="md:max-w-[50%] max-w-[100%]"
            >
              <h2 className="text-[24px] max-w-[400px] mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                nihil animi molestiae ratione expedita, unde, quasi
              </p>
              <Button className="w-[100px] bg-secondary text-black h-[20px] mt-4 py-[20px]">
                About us
              </Button>
            </Row>
            <img src={AboutImage} alt="" />
          </Row>
        </div>
      </SectionCommon>
    </div>
  );
};

export default HomePage;
