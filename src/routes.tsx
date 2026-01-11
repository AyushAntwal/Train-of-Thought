import { createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./Layout";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import("./pages/home/Home");
          return { Component: module.default };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const module = await import("./pages/about/About");
          return { Component: module.default };
        },
      },
      {
        path: "contact",
        lazy: async () => {
          const module = await import("./pages/contact/Contact");
          return { Component: module.default };
        },
      },
    ],
  },
  {
    hydrateFallbackElement: <div className="">Loading...</div>,
  },
]);
