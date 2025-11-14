/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 14:52:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Clean Carousel — Reduced Zoom, Smaller Buttons, Clickable Dots
 */

import { useEffect, useState } from "react";

const sliderData = [
  {
    titleTop: "Explore Our Destinations",
    title: "BOOK YOUR NEXT FLIGHT WITH US",
    btn: "Learn More",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBiG-TU2d8VM1t6NH0GFaMJRRmY6c_jt5hw&s",
  },
  {
    titleTop: "Explore Lagos",
    title: "EXPERIENCE FLIGHT CONNECTIONS FROM ALL OUR DESTINATIONS.",
    btn: "View destinations",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzK7r7vhTxwyybUlFJI9wjMK80jhwHZFFOw&s",
  },
  {
    titleTop: "Explore Our Destinations",
    title: "BOOK YOUR NEXT FLIGHT WITH US",
    btn: "Learn More",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMzxVzweE4JBLOWKGX_utMiJLkVlZnRldIQ&s",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderData.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-[470px] overflow-hidden ">

      {sliderData.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1200 ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.img}
            className="w-full h-full object-fill object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#002b5c]/80 to-transparent flex flex-col justify-center px-20">
            <p className="text-white text-xl mb-1">{s.titleTop}</p>

            <h1 className="text-white text-4xl font-bold max-w-xl leading-tight">
              {s.title}
            </h1>

            {/* FIX: Smaller button */}
            <button className="mt-5 border border-white px-4 py-2 text-sm rounded text-white hover:bg-white hover:text-[#9f1414] w-max">
              {s.btn}
            </button>
          </div>
        </div>
      ))}

      {/* FIX: Clickable dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {sliderData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === i
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
