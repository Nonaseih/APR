/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:49:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { motion } from "framer-motion";

export default function Dropdown({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute mt-2 bg-white shadow-lg rounded w-56 py-3 z-50"
    >
      {items.map((it) => (
        <div
          key={it}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
        >
          {it}
        </div>
      ))}
    </motion.div>
  );
}
