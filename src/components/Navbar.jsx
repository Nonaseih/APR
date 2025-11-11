/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 11/11/2025 - 10:20:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Air Peace Navbar — Full Blue Hover + Blue Top Border For All Items
 */

import { useState } from "react";
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

  const baseClass =
    "cursor-pointer pt-1 pb-[6px] transition border-t-4 border-transparent";

  const hoverClass =
    "hover:text-[#003594] hover:border-[#003594]";

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-4">

        <img src="./images/Api1.png" className="h-10" />

        <ul className="flex items-center gap-10 text-[15px] font-medium">

          {/* HOME */}
          <li className={`${baseClass} ${hoverClass}`}>HOME</li>

          {/* DISCOVER */}
          <li
            onMouseEnter={() => setOpenNav("discover")}
            onMouseLeave={() => setOpenNav(null)}
            className={`${baseClass} ${hoverClass} relative ${
              openNav === "discover" ? "text-[#003594] border-[#003594]" : ""
            }`}
          >
            DISCOVER ▼
            {openNav === "discover" && (
              <DropdownDiscover items={navItems.discover} />
            )}
          </li>

          {/* BOOK */}
          <li className={`${baseClass} ${hoverClass}`}>BOOK</li>

          {/* TRAVEL */}
          <li
            onMouseEnter={() => setOpenNav("travel")}
            onMouseLeave={() => setOpenNav(null)}
            className={`${baseClass} ${hoverClass} relative ${
              openNav === "travel" ? "text-[#003594] border-[#003594]" : ""
            }`}
          >
            TRAVEL ▼
            {openNav === "travel" && (
              <Dropdown items={navItems.travel} />
            )}
          </li>

          {/* ROUTES */}
          <li className={`${baseClass} ${hoverClass}`}>ROUTES</li>

          {/* MEDIA */}
          <li
            onMouseEnter={() => setOpenNav("media")}
            onMouseLeave={() => setOpenNav(null)}
            className={`${baseClass} ${hoverClass} relative ${
              openNav === "media" ? "text-[#003594] border-[#003594]" : ""
            }`}
          >
            MEDIA ▼
            {openNav === "media" && (
              <Dropdown items={navItems.media} />
            )}
          </li>

          {/* CAREERS */}
          <li className={`${baseClass} ${hoverClass}`}>CAREERS</li>

        </ul>

      </div>
    </nav>
  );
}
