import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Loader from "./components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    hydrateFallbackElement: <Loader />,
    errorElement: <p>Something went wrong</p>,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Home } = await import("./pages/home/Home");
          const { blogsLoader } = await import("./pages/loader");
          return { Component: Home, loader: blogsLoader };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const { default: About } = await import("./pages/about/About");
          return { Component: About };
        },
      },
      {
        path: "collection",
        children: [
          {
            index: true,
            lazy: async () => {
              const { default: Collection } = await import(
                "./pages/collection/Collection"
              );

              const { blogsLoader } = await import("./pages/loader");
              return { Component: Collection, loader: blogsLoader };
            },
          },
          {
            path: ":id",
            lazy: async () => {
              const { default: BlogPage } = await import(
                "./pages/collection/Post/Post"
              );
              const { blogLoader } = await import(
                "./pages/collection/Post/loader"
              );

              return { Component: BlogPage, loader: blogLoader };
            },
          },
        ],
      },
    ],
  },
]);

export default router;
