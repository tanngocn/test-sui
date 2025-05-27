import Row from "@/components/common/Row";
import { LAYOUT_ROW, LAYOUT_ROW_DRIRECT_COL } from "@/constants/common";
import { routesApp } from "@/routes/index";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container py-8">
        <Row type={LAYOUT_ROW_DRIRECT_COL.CENTER}>
          <div className="logo text-center mb-4">
            <h1>Logo</h1>
          </div>
          <Row type={LAYOUT_ROW.CENTER} className="gap-1">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </Row>
          <Row type={LAYOUT_ROW.CENTER} className="gap-4 mt-4">
            {routesApp.map((route, index: number) => (
              <Link
                key={index}
                to={route.link}
                className="text-[16px] p-1 text-white border-b-2 border-transparent hover:border-primary transition-all duration-300"
              >
                {route.name}
              </Link>
            ))}
          </Row>
        </Row>
      </div>
      <Row type={LAYOUT_ROW.CENTER} className="gap-1 py-1">
        <span>© 2025 Company</span>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </Row>
    </footer>
  );
};
export default Footer;
