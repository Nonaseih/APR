/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 11/11/2025 - 11:02:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Discover Mega Dropdown — Air Peace Accurate (Bigger Images)
 */

import { motion } from "framer-motion";

export default function DropdownDiscover({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="
        absolute left-1/2 -translate-x-1/2 mt-3 z-50
        bg-white rounded shadow-xl
        w-[1200px]                          /* was 880 */
        grid grid-cols-4 gap-8              /* wider spacing */
        px-8 py-8
        border-t-4 border-[#be3a34]
      "
    >
      {items.map((it) => (
        <div
          key={it.title}
          className="
            rounded-lg overflow-hidden
            shadow-sm hover:shadow-md
            cursor-pointer transition bg-white
          "
        >
          <img
            src={it.img}
            className="w-full h-40 object-cover"   /* was h-36 — doubled */
          />

          <div className="p-4 text-[15px] font-semibold text-center text-gray-700">
            {it.title}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
