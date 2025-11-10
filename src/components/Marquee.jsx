/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:49:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function Marquee() {
  return (
    <div className="w-full bg-[#003594] text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex gap-10 text-sm">
        <span>Fly from Abuja to London Heathrow every Friday, Saturday, and Sunday starting 26 Oct 2025.</span>
        <span>London Heathrow to Abuja same days. Starting 28 Oct 2025 fly Abuja-London Gatwick.</span>
      </div>
    </div>
  );
}
