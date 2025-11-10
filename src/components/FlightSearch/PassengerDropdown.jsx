/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 15:15:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState } from "react";
import { Users, ChevronDown } from "lucide-react";

export default function PassengerDropdown() {
  const [open, setOpen] = useState(false);

  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center bg-gray-100 rounded-lg px-4 py-3 cursor-pointer"
      >
        <Users size={20} className="mr-3 text-gray-700" />
        <span className="flex-1 text-gray-700">
          {adult} Adult, {child} Child, {infant} Infant
        </span>
        <ChevronDown size={18} className="text-gray-600" />
      </div>

      {open && (
        <div className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 z-50 space-y-4">

          {[
            ["Adults", adult, setAdult],
            ["Children", child, setChild],
            ["Infants", infant, setInfant],
          ].map(([label, value, setter]) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-gray-700">{label}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setter(Math.max(0, value - 1))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{value}</span>
                <button
                  onClick={() => setter(value + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
