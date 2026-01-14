import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import router from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TopHeader />
    <RouterProvider router={router} />
  </StrictMode>
);
