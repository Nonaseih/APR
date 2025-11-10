/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 12:48:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function Newsletter() {
  return (
    <div className="max-w-[1300px] mx-auto px-6 mt-20 mb-24">
      <div className="bg-white shadow-lg rounded-2xl py-14 px-10 text-center">

        <h2 className="text-3xl font-bold text-[#0047ba]">
          Subscribe to our newsletter
        </h2>

        <p className="text-gray-700 mt-4 text-lg max-w-[750px] mx-auto leading-relaxed">
          Sign up to receive exclusive deals, travel tips, and the latest updates
          straight to your inbox.
        </p>

        <button className="mt-8 bg-[#be3a34] hover:bg-[#a32f2b] text-white px-10 py-3 rounded-lg text-lg font-semibold transition">
          Subscribe
        </button>

      </div>
    </div>
  );
}
