import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Register from "./pages/register";
import Courses from "./pages/course";
import Layout from "./pages/layout";
import CourseId from "./pages/courseId";
import Quiz from "./pages/quiz";
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
    ],
  },
]);
