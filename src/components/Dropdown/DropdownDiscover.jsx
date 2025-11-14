/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 14/11/2025 - 14:16:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Discover Mega Dropdown — Air Peace Accurate (Lowered)
 */

import { motion } from "framer-motion";

export default function DropdownDiscover({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="
        absolute left-1/2 -translate-x-1/2 mt-60vh z-50
        bg-white rounded shadow-xl
        w-[1200px]
        grid grid-cols-4 gap-10
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
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-[15px] font-semibold text-center text-gray-700">
            {it.title}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
