/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 15:36:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Air Peace — Pixel Perfect Flight Search
 */

import { useState } from "react";
import BookFlightsUI from "./BookFlightsUI";
import MyBookingsUI from "./MyBookingsUI";
import CheckInUI from "./CheckInUI";
import LoyaltyUI from "./LoyaltyUI";

export default function FlightSearchBox() {
  const [active, setActive] = useState("book");

  return (
    <div className="w-full flex justify-center mt-16 mb-24">
      <div className="w-full max-w-[1250px] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden">

        {/* Tabs */}
        <div className="flex h-[58px]">
          {tab("book", "✈", "Book Flights", active, setActive)}
          {tab("bookings", "📘", "My Bookings", active, setActive)}
          {tab("checkin", "✔", "Check-in", active, setActive)}
          {tab("loyalty", "👤", "Loyalty", active, setActive)}
        </div>

        {/* Thin border line (Air Peace uses sharp dividers) */}
        <div className="border-b border-[#e6e6e6]"></div>

        {/* Content */}
        <div className="px-10 py-10">
          {active === "book" && <BookFlightsUI />}
          {active === "bookings" && <MyBookingsUI />}
          {active === "checkin" && <CheckInUI />}
          {active === "loyalty" && <LoyaltyUI />}
        </div>

      </div>
    </div>
  );
}

function tab(id, icon, label, active, setActive) {
  const selected = active === id;

  return (
    <button
      onClick={() => setActive(id)}
      className={`
        flex items-center gap-2 px-6 text-[16px] font-semibold
        ${selected
          ? "bg-white text-[#be3a34] border-b-4 border-[#be3a34]"
          : "bg-[#0047ba] text-white"
        }
      `}
    >
      {icon} {label}
    </button>
  );
}
