/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 11/11/2025 - 10:19:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Standard Dropdown — Air Peace Accurate
 */

import { motion } from "framer-motion";

export default function Dropdown({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="
        absolute left-0 mt-2 bg-white rounded shadow-lg w-56 py-3 z-50
        border-t-4 border-[#be3a34]   /* red top line */
      "
    >
      {items.map((it) => (
        <div
          key={it}
          className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
        >
          {it}
        </div>
      ))}
    </motion.div>
  );
}
