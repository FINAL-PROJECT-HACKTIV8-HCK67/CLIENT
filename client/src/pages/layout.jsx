import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";

function Layout() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default Layout;
