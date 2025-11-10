/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:49:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function TopContactRow() {
  return (
    <div className="w-full bg-[#f2f4f7] text-[#003594] py-2 text-[13px] border-b">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6">

        <div className="flex gap-3">
          <span>+2342013438133</span>
          <span>|</span>
          <span>(0700FLYAIRPEACE)</span>
          <span>|</span>
          <span>UK line: +442037693665</span>
        </div>

        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-[#00286d]">PEACE ADVANTAGE</span>
          <span className="cursor-pointer hover:text-[#00286d]">TERMS AND CONDITIONS</span>
        </div>

        <span className="cursor-pointer font-semibold hover:text-[#00286d]">LOGIN</span>
      </div>
    </div>
  );
}
