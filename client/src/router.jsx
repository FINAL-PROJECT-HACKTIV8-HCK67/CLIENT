import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Register from "./pages/register";
import SideBar from "./components/sidebar";
import Courses from "./pages/course";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/login",
    element: <Login/>
  }, 
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/courses",
    element: <Courses/>
  }

])