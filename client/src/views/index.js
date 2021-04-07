import { Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "../components/SignIn";
import Dashboard from "../components/Dashboard";

export const views = [
  {
    Component: Home,
    path: "/",
    key: "HOME",
    name: "Home",
    exact: true,
  },
  {
    Component: SignIn,
    key: "SIGNIN",
    name: "Sign In",
    path: "/sign-in",
  },
  {
    Component: Dashboard,
    key: "DASHBOARD",
    name: "Dashboard",
    path: "/dashboard",
  },
];

export const renderRoute = ({ Component, ...rest }) => {
  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};
