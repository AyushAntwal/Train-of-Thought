import TopHeader from "@/components/TopHeader";
import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./components/Loader";

function Layout() {
  const navigation = useNavigation();

  const isLoading =
    navigation.state === "loading" && navigation.location != null;

  if (isLoading) return <Loader />;

  return (
    <main className="prose dark:prose-dark">
      <TopHeader />
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Layout;
