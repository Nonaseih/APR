/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 15:28:24
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * AirportInput — searchable dropdown with airport list
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

/** Minimal demo dataset. Replace/extend freely. */
const AIRPORTS = [
  { code: "LOS", city: "Lagos",      name: "Murtala Muhammed Intl"  },
  { code: "ABV", city: "Abuja",      name: "Nnamdi Azikiwe Intl"    },
  { code: "ACC", city: "Accra",      name: "Kotoka Intl"            },
  { code: "LHR", city: "London",     name: "Heathrow"               },
  { code: "LGW", city: "London",     name: "Gatwick"                },
  { code: "DXB", city: "Dubai",      name: "Dubai Intl"             },
  { code: "JFK", city: "New York",   name: "John F. Kennedy Intl"   },
];

export default function AirportInput({
  label = "Airport",
  icon: Icon,
  value,
  onChange,
  placeholder = label,
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open && value) setQ(value.code ? `${value.city} (${value.code})` : value);
  }, [open, value]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return AIRPORTS;
    return AIRPORTS.filter(
      a =>
        a.code.toLowerCase().includes(query) ||
        a.city.toLowerCase().includes(query) ||
        a.name.toLowerCase().includes(query)
    );
  }, [q]);

  useEffect(() => {
    const onDoc = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <div
        className="flex items-center bg-gray-100 rounded-lg px-4 py-3 focus-within:ring-2 ring-[#0047ba]"
        onClick={() => setOpen(true)}
      >
        {Icon && <Icon size={22} className="text-gray-700 mr-3" />}
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="bg-transparent outline-none w-full text-gray-700"
        />
        <button
          type="button"
          className="ml-2 p-1 rounded text-gray-600 hover:bg-gray-200"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
        >
          <ChevronDown size={18} />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-lg shadow-xl border max-h-72 overflow-auto z-[1000]">
          <div className="sticky top-0 bg-white px-3 py-2 border-b flex items-center gap-2">
            <Search size={16} className="text-gray-500" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search city, code, or airport..."
              className="w-full outline-none"
            />
          </div>

          {results.length === 0 && (
            <div className="px-4 py-3 text-sm text-gray-500">No matches</div>
          )}

          {results.map((a) => (
            <button
              key={a.code}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                onChange?.(a);
                setQ(`${a.city} (${a.code})`);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-50"
            >
              <div className="font-medium">
                {a.city} <span className="text-gray-500">({a.code})</span>
              </div>
              <div className="text-xs text-gray-500">{a.name}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
