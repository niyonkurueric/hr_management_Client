import LoginPage from "../pages/auth/loginPage";
import LandingPage from "../pages/public/landingPage";
import { IRoute } from "../types";

const publicRoutes: IRoute[] = [
  {
    path: "",
    element: LandingPage,
  },
  {
    path: "login",
    element: LoginPage,
  },
];

export default publicRoutes;
