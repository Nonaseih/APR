/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:57:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function MyBookingsUI() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <input
        type="text"
        placeholder="Enter your surname"
        className="bg-gray-100 rounded-lg px-4 py-3 text-lg outline-none"
      />

      <input
        type="text"
        placeholder="Enter your booking reference"
        className="bg-gray-100 rounded-lg px-4 py-3 text-lg outline-none"
      />

      <button className="bg-[#0047ba] text-white px-10 py-3 rounded-lg text-lg font-semibold">
        Manage Booking
      </button>

    </div>
  );
}
