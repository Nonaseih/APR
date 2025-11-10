/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 15:28:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * PassengerSelector — dropdown for adults/children/infants
 */
import { useEffect, useRef, useState } from "react";
import { Users, Minus, Plus, ChevronDown } from "lucide-react";

export default function PassengerSelector({
  value = { adults: 1, children: 0, infants: 0 },
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [pax, setPax] = useState(value);
  const rootRef = useRef(null);

  useEffect(() => setPax(value), [value]);

  useEffect(() => {
    const onDoc = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const set = (key, delta) => {
    setPax((prev) => {
      const next = { ...prev, [key]: Math.max(0, prev[key] + delta) };
      if (key === "adults") next.adults = Math.max(1, next.adults);
      onChange?.(next);
      return next;
    });
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center bg-gray-100 rounded-lg px-4 py-3 text-left"
      >
        <Users size={22} className="text-gray-700 mr-3" />
        <span className="flex-1 text-gray-700">
          {pax.adults} Adult{pax.adults > 1 ? "s" : ""},{" "}
          {pax.children} Child{pax.children !== 1 ? "ren" : ""},{" "}
          {pax.infants} Infant{pax.infants !== 1 ? "s" : ""}
        </span>
        <ChevronDown size={18} className="text-gray-600" />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-lg shadow-xl border z-[1000]">
          {[
            { k: "adults", label: "Adults (12+)" },
            { k: "children", label: "Children (2–11)" },
            { k: "infants", label: "Infants (<2)" },
          ].map((row) => (
            <div key={row.k} className="flex items-center justify-between px-4 py-3">
              <div className="text-sm">{row.label}</div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => set(row.k, -1)}
                  className="p-2 rounded bg-gray-100 hover:bg-gray-200"
                >
                  <Minus size={16} />
                </button>
                <span className="w-6 text-center">{pax[row.k]}</span>
                <button
                  type="button"
                  onClick={() => set(row.k, +1)}
                  className="p-2 rounded bg-gray-100 hover:bg-gray-200"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
