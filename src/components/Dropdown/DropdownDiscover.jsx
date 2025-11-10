/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:49:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { motion } from "framer-motion";

export default function DropdownDiscover({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="absolute mt-3 bg-white shadow-lg rounded w-[700px] py-4 px-4 z-50 grid grid-cols-4 gap-4 left-1/2 -translate-x-1/2"
    >
      {items.map((it) => (
        <div key={it.title} className="rounded shadow-sm hover:shadow-md transition cursor-pointer bg-white">
          <img src={it.img} className="w-full h-28 object-cover rounded-t" />
          <div className="p-3 text-sm font-medium text-center">{it.title}</div>
        </div>
      ))}
    </motion.div>
  );
}
