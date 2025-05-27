import CardCustom from "@/components/common/CardCustom";
import InputSelect from "@/components/common/Form/InputSelect";
import InputText from "@/components/common/Form/InputText";
import SwitchCustom from "@/components/common/Form/SwtichCustom";
import GridLayout from "@/components/common/Grid";
import PaginationCustom from "@/components/common/Pagination";
import Row from "@/components/common/Row";
import SectionCommon from "@/components/common/Section";
import { LAYOUT_GRID, LAYOUT_ROW, STATUS_POOL } from "@/constants/common";
import { Search } from "lucide-react";
import { useState } from "react";
// import { debounce } from "lodash";
const rows = [
  {
    label: "Total Raise",
    value: "1000000 ETH",
  },
  {
    label: "Rate",
    value: "1 ETH = 2500 USDC",
  },
  {
    label: "Your status",
    value: "Whitelist",
  },
];
const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    projectStatus: "",
    status: "",
    owner: false,
    sortBy: "",
    page: 1,
  });
  const total = 10;
  // const handleSort = () => {};
  // const handleFilter = (values: unknown) => {};

  const handleSwitch = (value: boolean) => {console.log(value);
  };

  // const debounceSearch = debounce((value:string) => {

  //   console.log(value);
    
  //   setSearchParams((prev: any) => ({
  //     ...prev,
  //     keyword:value,
  //   }));
  // }, 2000);


  const onPageChange = (pageNumber: number) => {
    setSearchParams &&
      setSearchParams((prev: any) => ({
        ...prev,
        page: Number(pageNumber),
      }));
  };

  return (
    <SectionCommon
      title="Project List"
      showButtonViewMore={false}
      classTitle="text-left"
    >
      <Row type={LAYOUT_ROW.BETWEEN} className="mb-4 items-center">
        <Row type={LAYOUT_ROW.START} className="gap-2">
          <InputText
            classInput="min-w-[400px]"
            prefix={<Search />}
          />
          <InputSelect options={[{label:'shhs', value:'hello'}]} placeholder="Project status" />
          <InputSelect options={[]} />
        </Row>
        <SwitchCustom
          label="Show only my projects"
          name="owner"
          onFilter={handleSwitch}
          checked={false}
        />
      </Row>
      <Row type={LAYOUT_ROW.BETWEEN} className="mb-4">
        <span className="flex items-center"> Total projects: {total}</span>
        <Row type={LAYOUT_ROW.START} className="gap-2">
          <span>Sort By</span>
          <InputSelect options={[]} />
        </Row>
      </Row>
      <GridLayout type={LAYOUT_GRID.SECTION} className="gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <CardCustom
            key={index}
            status={STATUS_POOL.WHITELIST}
            data={{}}
            rows={rows}
          />
        ))}
      </GridLayout>

      <PaginationCustom
        currentPage={searchParams.page}
        totalPages={1}
        onPageChange={onPageChange}
        showPreviousNext
      />
    </SectionCommon>
  );
};

export default ProjectsPage;
