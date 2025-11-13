/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 13/11/2025 - 11:47:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { Link } from "react-router-dom";

export default function Destinations() {
  return (
    <section className="max-w-[1100px] mx-auto px-6 mb-16">
      <h2 className="text-[26px] font-semibold text-[#002b5c] mb-6">
        Our Destinations
      </h2>

      {/* GRID — Left big, right tall, bottom 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* LEFT — LARGE TILE */}
        <Link
          to="/international-routes"
          className="relative md:col-span-1 md:row-span-2 h-[450px] rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/571251457_122102790561086117_8414754519719525663_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=gPISSBlUae0Q7kNvwHJfvm_&_nc_oc=Adlyz_dLOxChfMtZ0tsH6ryxzel7sXhNirQWMkiZSGFRfSUMv6WIK-7lbxgzF3Jfq_W_zvGC3OEZJXpritcdEA44&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=xwf-506SpzKdoYXe8hh6PA&oh=00_AfgXLDQ0b7LMrBKcwQ2LfZ_Zu5WjVO95awypNJu5j-MEIw&oe=691B9350"
            alt="International Routes"
            className="
              w-full h-full object-cover
              transition duration-300
              group-hover:brightness-75
            "
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 transition duration-300 group-hover:bg-black/10"></div> 

          <div className="absolute bottom-4 left-4 text-white z-10"> {/* FIX: Added z-10 */}
            <p className="text-xs font-semibold tracking-wide">Top Selling</p>
            <h3 className="text-xl font-bold">International Routes</h3>
          </div>
        </Link>

        {/* RIGHT — TALL DOMESTIC ROUTES */}
        <Link
          to="/domestic-routes"
          className="relative md:col-span-2 h-[220px] rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src="https://archive.ids.ac.uk/eldis/sites/default/files/Collections_credit2.jpg"
            alt="Domestic Routes"
            className="
              w-full h-full object-cover
              transition duration-300
              group-hover:brightness-75
            "
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 transition duration-300 group-hover:bg-black/10"></div>

          <div className="absolute bottom-4 left-4 text-white z-10"> {/* FIX: Added z-10 */}
            <p className="text-xs font-semibold">Top Locations</p>
            <h3 className="text-xl font-bold">Domestic Routes</h3>
          </div>
        </Link>

        {/* BOTTOM — REGIONAL ROUTES */}
        <Link
          to="/regional-routes"
          className="relative h-[200px] rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src="https://www.globalsairlinesoffices.com/wp-content/uploads/2024/10/Ghana-.jpg"
            alt="Regional Routes"
            className="
              w-full h-full object-cover
              transition duration-300
              group-hover:brightness-75
            "
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 transition duration-300 group-hover:bg-black/10"></div>

          <div className="absolute bottom-4 left-4 text-white z-10"> {/* FIX: Added z-10 */}
            <h3 className="text-lg font-bold">Regional Routes</h3>
          </div>
        </Link>

        {/* BOTTOM — REGIONAL CONNECTIONS */}
        <Link
          to="/regional-connections"
          className="relative h-[200px] rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src="https://i0.wp.com/launchbaseafrica.com/wp-content/uploads/2025/02/image-26.png?fit=1000,667&ssl=1"
            alt="Regional Connections"
            className="
              w-full h-full object-cover
              transition duration-300
              group-hover:brightness-75
            "
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 transition duration-300 group-hover:bg-black/10"></div>

          <div className="absolute bottom-4 left-4 text-white z-10"> {/* FIX: Added z-10 */}
            <h3 className="text-lg font-bold">Regional Connections</h3>
          </div>
        </Link>

      </div>
    </section>
  );
}