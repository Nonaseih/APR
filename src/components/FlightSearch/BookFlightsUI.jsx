/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 15:46:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Air Peace — Book Flights (Pixel Perfect)
 */

import { useState } from "react";
import AirportInput from "./AirportInput";
import PassengerSelector from "./PassengerSelector";
import { PlaneTakeoff, PlaneLanding, Calendar } from "lucide-react";

export default function BookFlightsUI() {
  const [from, setFrom]   = useState(null);
  const [to, setTo]       = useState(null);
  const [date, setDate]   = useState("");
  const [pax, setPax]     = useState({ adults: 1, children: 0, infants: 0 });

  /** ✅ Trip type state */
  const [trip, setTrip] = useState("oneway");

  return (
    <div className="space-y-8">

      {/* ✅ ONE WAY / ROUND TRIP (Air Peace Style) */}
      <div className="flex items-center gap-10 text-[18px]">

        {/* ONE WAY */}
        <label
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setTrip("oneway")}
        >
          <span
            className={`
              h-5 w-5 rounded-full border-2 flex items-center justify-center
              ${trip === "oneway" ? "border-[#0050d4]" : "border-gray-400"}
            `}
          >
            <span
              className={`
                h-3 w-3 rounded-full
                ${trip === "oneway" ? "bg-[#0050d4]" : "bg-transparent"}
              `}
            ></span>
          </span>
          One Way
        </label>

        {/* ROUND TRIP */}
        <label
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setTrip("round")}
        >
          <span
            className={`
              h-5 w-5 rounded-full border-2 flex items-center justify-center
              ${trip === "round" ? "border-[#0050d4]" : "border-gray-400"}
            `}
          >
            <span
              className={`
                h-3 w-3 rounded-full
                ${trip === "round" ? "bg-[#0050d4]" : "bg-transparent"}
              `}
            ></span>
          </span>
          Round Trip
        </label>

      </div>

      {/* ✅ INPUTS */}
      <div className="grid grid-cols-3 gap-6">

        {/* FROM */}
        <AirportInput
          label="Departure airport"
          placeholder="Departure airport"
          icon={PlaneTakeoff}
          value={from}
          onChange={setFrom}
          height="h-[55px]"
        />

        {/* TO */}
        <AirportInput
          label="To"
          placeholder="To"
          icon={PlaneLanding}
          value={to}
          onChange={setTo}
          height="h-[55px]"
        />

        {/* DATE */}
        <div className="flex items-center bg-[#f3f5f9] rounded-lg px-4 h-[55px]">
          <Calendar size={22} className="text-gray-700 mr-3" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent outline-none text-[16px]"
          />
        </div>
      </div>

      {/* ✅ PASSENGERS */}
      <PassengerSelector value={pax} onChange={setPax} height="h-[55px]" />

      {/* ✅ BUTTON */}
      <div className="flex justify-end">
        <button className="bg-[#0047ba] text-white text-[18px] font-semibold px-16 h-[55px] rounded-lg">
          Search Flights
        </button>
      </div>

    </div>
  );
}
