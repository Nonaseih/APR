/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 15:12:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const airports = [
  "Lagos (LOS)",
  "Abuja (ABV)",
  "Port Harcourt (PHC)",
  "Enugu (ENU)",
  "Owerri (QOW)",
  "Benin (BNI)",
  "London Heathrow (LHR)",
  "London Gatwick (LGW)",
];

export default function AirportDropdown({ label, icon: Icon }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center bg-gray-100 rounded-lg px-4 py-3 cursor-pointer"
      >
        <Icon size={22} className="text-gray-700 mr-3" />
        <span className={`flex-1 text-gray-700 ${value ? "" : "text-gray-500"}`}>
          {value || label}
        </span>
        <ChevronDown size={18} className="text-gray-600" />
      </div>

      {open && (
        <div className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-2 max-h-52 overflow-y-auto z-50">
          {airports.map((apt) => (
            <div
              key={apt}
              onClick={() => {
                setValue(apt);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {apt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
