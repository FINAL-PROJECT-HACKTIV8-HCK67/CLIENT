import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";

function Layout() {
  return (
    <div className="h-full flex flex-grow">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Layout;
