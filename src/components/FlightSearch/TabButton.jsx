/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:51:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function TabButton({ active, onClick, label, icon }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 rounded-t-xl font-semibold flex items-center gap-2 text-[15px]
        ${active
          ? "bg-white border-b-4 border-[#be3a34] text-[#be3a34]"
          : "bg-[#0047ba] text-white"
        }`}
    >
      {icon} {label}
    </button>
  );
}
