/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 14/11/2025 - 14:16:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Standard Dropdown — Air Peace Accurate (Lowered)
 */

import { motion } from "framer-motion";

export default function Dropdown({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="
        absolute left-0 mt-12 bg-white rounded shadow-lg w-56 py-3 z-50
        border-t-4 border-[#be3a34]
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
