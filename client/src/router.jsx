import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Register from "./pages/register";
import Courses from "./pages/course";
import Profile from "./pages/profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
]);
