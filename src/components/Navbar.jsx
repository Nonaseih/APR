/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 14/11/2025 - 13:52:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Air Peace Navbar — Fixed + Scroll Behavior + Lucide Arrow
 */

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Dropdown from "./Dropdown/Dropdown";
import DropdownDiscover from "./Dropdown/DropdownDiscover";

const navItems = {
  discover: [
    { title: "All Destinations", img: "./images/Build.png" },
    { title: "Domestic Destinations", img: "./images/Stad.png" },
    { title: "Regional Destinations", img: "./images/Dc.png" },
    { title: "International Destinations", img: "./images/FB.png" },
  ],
  travel: [
    "Book a Flight",
    "Select Seat",
    "Book a Car",
    "Book a Hotel",
    "Pay Small Small",
    "Leisure",
    "Prohibited Articles",
  ],
  media: ["Media Center", "Blog"],
};

export default function Navbar() {
  const [openNav, setOpenNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseClass =
    "cursor-pointer pt-1 pb-[6px] transition border-t-4 border-transparent flex items-center gap-1";
  const hoverClass = "hover:text-[#003594] hover:border-[#003594]";

  return (
    <nav
      className={`w-full bg-white shadow z-50 transition-all duration-300 ${
        scrolled ? "fixed top-0" : "fixed top-21"
      }`}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-8 py-4">

        {/* LOGO */}
        <img src="./images/Api1.png" className="h-6" />

        {/* NAV ITEMS */}
        <ul className="flex items-center gap-10 text-[15px] font-medium">

          <li className={`${baseClass} ${hoverClass}`}>HOME</li>

          {/* DISCOVER */}
          <li
            onMouseEnter={() => setOpenNav("discover")}
            onMouseLeave={() => setOpenNav(null)}
            className={`${baseClass} ${hoverClass} relative ${
              openNav === "discover" ? "text-[#003594] border-[#003594]" : ""
            }`}
          >
            DISCOVER <ChevronDown size={14} />
            {openNav === "discover" && <DropdownDiscover items={navItems.discover} />}
          </li>

          <li className={`${baseClass} ${hoverClass}`}>BOOK</li>

          {/* TRAVEL */}
          <li
            onMouseEnter={() => setOpenNav("travel")}
            onMouseLeave={() => setOpenNav(null)}
            className={`${baseClass} ${hoverClass} relative ${
              openNav === "travel" ? "text-[#003594] border-[#003594]" : ""
            }`}
          >
            TRAVEL <ChevronDown size={14} />
            {openNav === "travel" && <Dropdown items={navItems.travel} />}
          </li>

          <li className={`${baseClass} ${hoverClass}`}>ROUTES</li>

          {/* MEDIA */}
          <li
            onMouseEnter={() => setOpenNav("media")}
            onMouseLeave={() => setOpenNav(null)}
            className={`${baseClass} ${hoverClass} relative ${
              openNav === "media" ? "text-[#003594] border-[#003594]" : ""
            }`}
          >
            MEDIA <ChevronDown size={14} />
            {openNav === "media" && <Dropdown items={navItems.media} />}
          </li>

          <li className={`${baseClass} ${hoverClass}`}>CAREERS</li>

        </ul>
      </div>
    </nav>
  );
}
