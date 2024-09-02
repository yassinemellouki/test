import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import PageContentWrapper from "../components/PageContentWrapper";

const Main = () => {
  return (
    <div className="bg-slate-100 h-full">
      <Nav />
      <PageContentWrapper>
        <Outlet />
      </PageContentWrapper>
    </div>
  );
};

export default Main;
