import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import ContactForm from "./components/ContactForm";
import { Suspense } from "react";

function Layout() {
  return (
    <main className="prose dark:prose-dark">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen">
          <Outlet />
        </div>
      </Suspense>
      <ContactForm />
      <div className="mb-10 flex justify-center">
        <a href="#header">
          <button className="border w-50 px-6 self-center">
            Scroll to Top ⇑
          </button>
        </a>
      </div>
    </main>
  );
}

export default Layout;
