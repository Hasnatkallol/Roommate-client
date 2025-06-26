import { createBrowserRouter, RouterProvider } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Components/Home";
import Errorpage from "../Components/Errorpage";
import Loading from "../Components/Loading";
import Addtofindroommate from "../Pages/Addtofindroommate";
import Browselisting from "../Pages/Browselisting";
import Mylisting from "../Pages/Mylisting";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Privateroute from "../PrivateRoute/Privateroute";

import Update from "../Pages/Update";
import Detailspage from "../Pages/Detailspage";
import DashBoardLayout from "../DashBoardLayout/DashBoardLayout";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "browselisting",
        element: <Browselisting></Browselisting>,
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "login",
        Component: Login,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "signup",
        Component: Signup,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "contactus",
        Component: ContactUs,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "aboutus",
        Component: AboutUs,
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "roommate/:id",
        loader: ({ params }) =>
          fetch(`https://room-server.vercel.app/roommate/${params.id}`),
        // Component: Detailspage,
        element: (
          <Privateroute>
            <Detailspage></Detailspage>
          </Privateroute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(`https://room-server.vercel.app/allroommate/${params.id}`),
        Component: Update,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "dashboard",
    Component: DashBoardLayout,
    children: [
      {
        path: "addtofindroommate",
        element: <Addtofindroommate></Addtofindroommate>,
      },
      {
        path: "mylisting",
        element: <Mylisting></Mylisting>,
      },
    ],
  },
]);
