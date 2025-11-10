/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:49:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import DropdownDiscover from "./Dropdown/DropdownDiscover";


const navItems = {
  discover: [
    { title: "All Destinations", img: "https://i.imgur.com/BX7JZbh.jpeg" },
    { title: "Domestic Destinations", img: "https://i.imgur.com/Kb8O9yW.jpeg" },
    { title: "Regional Destinations", img: "https://i.imgur.com/B8o7Z0d.jpeg" },
    { title: "International Destinations", img: "https://i.imgur.com/TlHTt8E.jpeg" },
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

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-4">

        <img src="./images/Api1.png" className="h-10 size-50" />

        <ul className="flex items-center gap-10 text-[15px] font-medium">

          <li className="cursor-pointer hover:text-[#003594]">HOME</li>

          <li
            onMouseEnter={() => setOpenNav("discover")}
            onMouseLeave={() => setOpenNav(null)}
            className="relative cursor-pointer"
          >
            DISCOVER ▼
            {openNav === "discover" && <DropdownDiscover items={navItems.discover} />}
          </li>

          <li className="cursor-pointer hover:text-[#003594]">BOOK</li>

          <li
            onMouseEnter={() => setOpenNav("travel")}
            onMouseLeave={() => setOpenNav(null)}
            className="relative cursor-pointer"
          >
            TRAVEL ▼
            {openNav === "travel" && <Dropdown items={navItems.travel} />}
          </li>

          <li className="cursor-pointer hover:text-[#003594]">ROUTES</li>

          <li
            onMouseEnter={() => setOpenNav("media")}
            onMouseLeave={() => setOpenNav(null)}
            className="relative cursor-pointer"
          >
            MEDIA ▼
            {openNav === "media" && <Dropdown items={navItems.media} />}
          </li>

          <li className="cursor-pointer hover:text-[#003594]">CAREERS</li>

        </ul>

      </div>
    </nav>
  );
}
