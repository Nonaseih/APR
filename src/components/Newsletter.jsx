/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 13/11/2025 - 13:49:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 13/11/2025 - 13:47:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function Newsletter() {
  return (
    <div
      className="max-w-[1100px] mx-auto px-6 mt-20 mb-24 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/e9/d2/25/e9d225b5f7c997bda515f0f2077c1feb.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl py-14 px-10 text-center mx-auto my-24 max-w-[800px]">

        <h2 className="text-3xl font-bold text-[#0047ba]">
          Subscribe to our newsletter
        </h2>

        <p className="text-gray-700 mt-4 text-lg max-w-[650px] mx-auto leading-relaxed">
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
