import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Register from "./pages/register";

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
  }
])