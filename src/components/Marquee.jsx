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
      <div className="animate-marquee flex gap-10 text-sm italic">
        <span>Fly from Abuja to London Heathrow Airport every Friday, Saturday, and Sunday starting 26 October 2025, and from London Heathrow to Abuja on the 28th October 2025, Fly Abuja-London Gatwick and London Gatwick-Abuja every Tuesday, Wednesday, and Thursday. Book now and enjoy our best fares! </span>
        <span>Fly from Abuja to London Heathrow Airport every Friday, Saturday, and Sunday starting 26 October 2025, and from London Heathrow to Abuja on the 28th October 2025, Fly Abuja-London Gatwick and London Gatwick-Abuja every Tuesday, Wednesday, and Thursday. Book now and enjoy our best fares! </span>
      </div>
    </div>
  );
}
