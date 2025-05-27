import Row from "@/components/common/Row";
import { LAYOUT_ROW } from "@/constants/common";
import { APP_URL, routesApp } from "@/routes/index";
import { ConnectButton } from "@mysten/dapp-kit";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="shadow-sm py-[21px] border-b">
      <nav className="container">
        <div className=" flex items-center justify-between ">
          <div className="nav-left flex-1 ">
            <Row type={LAYOUT_ROW.START} className="gap-1">
              <div className="logo text-[40px] mr-4">
                <Link to={APP_URL.HOME}>
                  <h2>Logo</h2>
                </Link>
              </div>
              <ul className="md:flex hidden items-center gap-4">
                {routesApp.map((route, index) => (
                  <Link
                    key={index}
                    to={route.link}
                    className="text-[16px] p-4 text-white border-b-2 border-transparent hover:border-primary transition-all duration-300"
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </Row>
          </div>
          <div className="nav-right">
            <ConnectButton />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
