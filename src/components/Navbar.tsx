import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { useState } from "react";

/* ================= CONFIG ================= */

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Collection", to: "/collection" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "#contact", isAnchor: true },
];

const SOCIAL_ICONS = [FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter];

/* ================= COMPONENT ================= */

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-indigo-400 font-medium" : "";

  const renderLink = (item: (typeof NAV_LINKS)[number], onClick?: () => void) =>
    item.isAnchor ? (
      <a href={item.to} onClick={onClick}>
        {item.label}
      </a>
    ) : (
      <NavLink to={item.to} className={linkClass} onClick={onClick}>
        {item.label}
      </NavLink>
    );

  return (
    <nav className="relative w-full border-y">
      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden flex items-center justify-between px-4 h-[6vh] border-b">
        {/* Menu Button */}
        <div className="h-full flex items-center px-4 border-r border-r">
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            className="h-full px-4 flex items-center"
          >
            {open ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        <div className="h-full flex items-center px-4">
          <NavLink to={"/"} className={linkClass}>
            Home
          </NavLink>
        </div>
        {/* Theme Toggle with border (same style as desktop) */}
        <div className="h-full flex items-center px-4 border-l">
          <ThemeToggle />
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="lg:hidden absolute top-[6vh] left-0 w-full border-t bg-color z-50">
          <ul className="flex flex-col divide-y">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="p-4">
                {renderLink(item, () => setOpen(false))}
              </li>
            ))}

            <li className="p-4 flex justify-evenly border-b gap-1">
              {SOCIAL_ICONS.map((Icon, i) => (
                <Icon key={i} className="text-xl" />
                
              ))}
            </li>
          </ul>
        </div>
      )}

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block h-[6vh]">
        <div className="flex body1 font-light justify-center h-full">
          {NAV_LINKS.map((item, i) => (
            <div
              key={item.label}
              className={`px-10 h-full flex items-center justify-center ${
                i === 0 ? "border-x" : "border-r"
              }`}
            >
              {renderLink(item)}
            </div>
          ))}

          <div className="border-r px-10 gap-x-4 h-full flex items-center justify-center">
            {SOCIAL_ICONS.map((Icon, i) => (
              <Icon key={i} className="text-xl" />
            ))}
          </div>

          <div className="border-r h-full flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
