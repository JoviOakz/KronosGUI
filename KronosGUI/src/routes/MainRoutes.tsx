import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import SOE from "../pages/SOE";
import TG from "../pages/TG";
import DE from "../pages/DE";
import ZS from "../pages/ZS";
import GK from "../pages/GK";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shadows-of-evil",
        element: <SOE />,
      },
      {
        path: "/the-giant",
        element: <TG />,
      },
      {
        path: "/der-eisendrache",
        element: <DE />,
      },
      {
        path: "/zetsubou-no-shima",
        element: <ZS />,
      },
      {
        path: "/gorod-krovi",
        element: <GK />,
      }
]);