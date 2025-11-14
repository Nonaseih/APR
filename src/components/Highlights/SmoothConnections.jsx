/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 14/11/2025 - 11:22:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Smooth Connections Highlight — Final Clean Version
 */
export default function SmoothConnections() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[470px]">

      {/* Background Image */}
      <img
        src="/images/Building.png"
        className="w-full h-full object-cover object-center"
      />

      {/* BLUE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#003b75]/90 via-[#003b75]/40 to-transparent"></div>

      {/* TEXT */}
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h2 className="text-2xl font-semibold mb-2 drop-shadow-lg">
          Enjoy Smooth Connections!
        </h2>

        <p className="text-sm mb-4 max-w-[90%] drop-shadow-lg">
          From your City to London and Back — All in One Simple Booking.
        </p>

        {/* FIXED BUTTON */}
        <button className="
          bg-[#be3a34] 
          hover:bg-[#0047ba] 
          text-white 
          px-5 py-2 
          rounded 
          text-base font-semibold 
          transition
        ">
          Book Now
        </button>
      </div>
    </div>
  );
}
