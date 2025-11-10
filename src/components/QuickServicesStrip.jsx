/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:53:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function QuickServicesStrip() {
  const items = [
    { icon: "🪑", title: "Select seat" },
    { icon: "🚗", title: "Book a ride" },
    { icon: "🛏", title: "Book a hotel" },
    { icon: "🎭", title: "Leisure" },
    { icon: "🛡", title: "Travel Insurance" },
    { icon: "💸", title: "Pay small small" },
  ];

  return (
    <div className="bg-white mt-20 mb-14 shadow rounded-xl py-10 max-w-[1300px] mx-auto grid grid-cols-6 text-center">

      {items.map((it) => (
        <div key={it.title} className="flex flex-col items-center gap-3">
          <div className="h-16 w-16 rounded-xl bg-blue-50 flex items-center justify-center text-3xl">
            {it.icon}
          </div>
          <p className="text-lg">{it.title}</p>
        </div>
      ))}

    </div>
  );
}
