import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaPinterestP, FaXTwitter } from "react-icons/fa6";
export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="md:hidden sm:block h-[5vh] border-y"></div>

      <div className="hidden md:block h-[6vh] border-y">
        <div className="flex body1 font-light justify-center h-full">
          <div className="border-x px-10 h-full flex items-center justify-center">
            <NavLink prefetch="intent" to="/">
              Home
            </NavLink>
          </div>
          <div className="border-r px-10 h-full flex items-center justify-center">
            <NavLink to="/about" prefetch="intent">
              About
            </NavLink>
          </div>
          <div className="border-r px-10 h-full flex items-center justify-center">
            <NavLink to="/contact" prefetch="intent">
              Contact
            </NavLink>
          </div>
          <div className="border-r px-10 gap-x-4 h-full flex items-center justify-center">
            <button>
              <FaFacebookF className="text-xl" />
            </button>
            <button>
              <FaInstagram className="text-xl" />
            </button>
            <button>
              <FaPinterestP className="text-xl" />
            </button>
            <button>
              <FaXTwitter className="text-xl" />
            </button>
          </div>
          <div className="border-r h-full flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
