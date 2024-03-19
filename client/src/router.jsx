import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Register from "./pages/register";
import Courses from "./pages/course";
<<<<<<< HEAD
import Profile from "./pages/profile";
=======
import Layout from "./pages/layout";
import CourseId from "./pages/courseId";
import Quiz from "./pages/quiz";
import Achievement from "./pages/achievement";
>>>>>>> f726b1a2f4e0b1f5567966dbfa5cb0c730d774cb
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
    element: <Layout />,
    children: [
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseId />,
      },
      {
        path: "/quiz/:id",
        element: <Quiz />,
      },
      {
        path: "/achievements",
        element: <Achievement />,
      }
    ],
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
]);
