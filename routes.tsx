import { createBrowserRouter } from "react-router";
import Login from "@/app/pages/Login";
import Signup from "@/app/pages/Signup";
import Dashboard from "@/app/pages/Dashboard";
import Projects from "@/app/pages/Projects";
import ProjectDetails from "@/app/pages/ProjectDetails";
import Team from "@/app/pages/Team";
import ScrumBoard from "@/app/pages/ScrumBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/scrum",
    element: <ScrumBoard />,
  },
]);