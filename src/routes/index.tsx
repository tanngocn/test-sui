import { createBrowserRouter } from "react-router";
import PublicLayout from "../components/layouts/PublicLayout";
import ProjectsPage from "../views/project";
import StakingPage from "../views/staking";
import GNTokenPage from "../views/gn-token";
import HomePage from "@/views/home";
import ExampleView from "@/views/example";

export const APP_URL = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECTS_DETAIL: "/projects/:projectId",
  STAKING: "/staking",
  GN_TOKEN: "/gn-token",
  ABOUT_US: "/about-us",
  CONTACT: "/contact",
};
export const routes = createBrowserRouter([
  {
    path: APP_URL.HOME,
    Component: PublicLayout,
    children: [
      {
        path: APP_URL.HOME,
        Component: HomePage,
      },
      {
        path: APP_URL.PROJECTS,
        Component: ProjectsPage,
        loader: () => {},
      },
      {
        path: APP_URL.STAKING,
        Component: StakingPage,
        loader: () => {},
      },
      {
        path: APP_URL.GN_TOKEN,
        Component: GNTokenPage,
        loader: () => {},
      },
      {
        path: APP_URL.ABOUT_US,
        Component: ExampleView,
        loader: () => {},
      },
      {
        path: APP_URL.CONTACT,
        Component: ExampleView,
        loader: () => {},
      },
    ],
  },
]);

export const routesApp = [
  {
    name: "Projects",
    link: APP_URL.PROJECTS,
  },
  {
    name: "Staking",
    link: APP_URL.STAKING,
  },
  {
    name: "About Us",
    link: APP_URL.ABOUT_US,
  },
  {
    name: "Contact",
    link: APP_URL.CONTACT,
  },
];