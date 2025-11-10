/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:53:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function StudentFare() {
  return (
    <div className="rounded-xl overflow-hidden shadow bg-white">

      <img
        src="./images/Students.png"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">
          Enjoy our 15% discounted student fare
        </h2>

        <p className="text-gray-700 mb-4">
          Air Peace Limited offers a 15% discount on economy class fares for full-time students aged 25 or under traveling on the London route.
        </p>

        <button className="bg-[#be3a34] text-white px-6 py-3 rounded text-lg">
          Book Now
        </button>
      </div>

    </div>
  );
}
