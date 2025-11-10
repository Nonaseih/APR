/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:54:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function AdditionalBenefits() {
  const services = [
    {
      img: "./images/People.png",
      title: "Ride services",
      desc: "Travel with ease with Air Peace by taking advantage of discounted rides for your airport pick up and drop-off",
    },
    {
      img: "./images/Hotel.png",
      title: "Booking a hotel",
      desc: "Take advantage of discounted room offers as you book your hotel accommodation at our partner hotels across all our destinations.",
    },
    {
      img: "./images/TI.png",
      title: "Travel insurance",
      desc: "Enhance your travel experience with our Travel Insurance, and ensure peace of mind throughout your trip.",
    },
    {
      img: "./images/SS.png",
      title: "Pay small small",
      desc: "Save as much as 150% by taking advantage of the ‘early bird’ fares, and spread your payment over a convenient period of time.",
    },
    {
      img: "./images/Car.png",
      title: "Buggy Services",
      desc: "Skip the long walks! Our airport buggy service is here to give you a smooth, quick, and stress-free ride to your gate.",
      btn: true,
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-6">
        Get additional benefits with our other services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {services.map((s) => (
          <div key={s.title} className="bg-white border rounded-lg shadow p-4">
            <img src={s.img} className="w-full h-40 object-cover rounded" />

            <h3 className="text-lg font-semibold mt-3">{s.title}</h3>

            <p className="text-gray-600 mt-2">{s.desc}</p>

            {s.btn && (
              <button className="mt-4 bg-[#0047ba] text-white w-full py-2 rounded-lg">
                Book now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
