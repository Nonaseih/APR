/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 14/11/2025 - 12:17:07
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function TopContactRow() {
  return (
    <div className="w-full h-[50px] bg-[#3d7edf18] text-[#0e4cbd] text-[11px] border-b flex items-center">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-4 w-full">

        {/* LEFT — NUMBERS */}
        <div className="flex gap-3">
          <span>+2342013438133</span>
          <span>|</span>
          <span>(0700FLYAIRPEACE)</span>
          <span>|</span>
          <span>UK line: +442037693665</span>
        </div>

        {/* MIDDLE-RIGHT — TERMS */}
        <div className="flex gap-8">
          <span className="cursor-pointer hover:text-[#00286d]">PEACE ADVANTAGE</span>
          <span className="cursor-pointer hover:text-[#00286d]">TERMS AND CONDITIONS</span>
        <span className="cursor-pointer font-semibold hover:text-[#00286d]">LOGIN</span>
        </div>

      </div>
    </div>
  );
}
