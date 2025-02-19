import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Blog } from "./pages/Blog";
import { JSX } from "react";
import { NotFound } from "./pages/NotFound";

interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export const routes: RouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/blog", element: <Blog /> },
  { path: "*", element: <NotFound /> },

];
