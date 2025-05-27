import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Header";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary ">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default PublicLayout