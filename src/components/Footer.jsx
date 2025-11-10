/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 14:21:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Footer Section — Air Peace Clone
 */

export default function Footer() {
  return (
    <footer className="w-full bg-[#002A6E] text-white pt-16 pb-6">

      {/* TOP GRID */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-1">
            Information
          </h3>
          <ul className="space-y-2 text-[15px]">
            <FooterLink label="FAQs" />
            <FooterLink label="Terms & Conditions" />
            <FooterLink label="Departure & Arrivals" />
            <FooterLink label="Baggage Allowance" />
            <FooterLink label="Routes" />
            <FooterLink label="ADM Policy" />
            <FooterLink label="Travel Advisory" />
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-1">
            Support
          </h3>
          <ul className="space-y-2 text-[15px]">
            <FooterLink label="Help and Contact" />
            <FooterLink label="Special Assistance" />
            <FooterLink label="Lost Property" />
            <FooterLink label="Peace Advantage" />
            <FooterLink label="Airport Charges" />
            <FooterLink label="Sales Outlets" />
            <FooterLink label="Safety Reporting" />
          </ul>
        </div>

        {/* Deals */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-1">
            Deals
          </h3>
          <ul className="space-y-2 text-[15px]">
            <FooterLink label="Student Discount" />
            <FooterLink label="Partnerships" />
            <FooterLink label="Graduate Trainee Program" />
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-1">
            Corporate
          </h3>
          <ul className="space-y-2 text-[15px]">
            <FooterLink label="Trade Partners" />
            <FooterLink label="Corporate Accounts" />
          </ul>
        </div>

        {/* Air Peace */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-1">
            Air Peace
          </h3>
          <ul className="space-y-2 text-[15px]">
            <FooterLink label="About" />
            <FooterLink label="Careers" />
            <FooterLink label="Media Centre" />
            <FooterLink label="Blog" />
            <FooterLink label="Newsletter" />
          </ul>
        </div>

      </div>

      {/* SOCIAL + BADGES */}
      <div className="max-w-[1300px] mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: "facebook-f", bg: "#fff", color: "#1877F2" },
            { icon: "x-twitter", bg: "#000" },
            { icon: "youtube", bg: "#FF0000" },
            { icon: "linkedin-in", bg: "#0077B5" },
            { icon: "instagram", bg: "#E4405F" },
          ].map((s, i) => (
            <a
              key={i}
              href="#"
              className="h-10 w-10 rounded-md flex items-center justify-center"
              style={{ backgroundColor: s.bg }}
            >
              <i
                className={`fab fa-${s.icon} text-[18px]`}
                style={{ color: s.color || "white" }}
              ></i>
            </a>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex justify-center gap-6">
          <img src="https://i.imgur.com/giMZ0xH.png" className="h-16" />
          <img src="https://i.imgur.com/KR8QzFD.png" className="h-20" />
          <img src="https://i.imgur.com/2T6lHfN.png" className="h-16" />
        </div>

        {/* App Buttons */}
        <div className="flex justify-end gap-4">
          <a href="#">
            <img src="https://i.imgur.com/kzVbLrF.png" className="h-12" />
          </a>
          <a href="#">
            <img src="https://i.imgur.com/skFt8Sg.png" className="h-12" />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full bg-[#A7372D] mt-10 py-4 text-center text-sm text-white">
        Copyright © 2025 Air Peace Limited. All Rights Reserved.
        <span className="mx-3">|</span>
        Site Map
        <span className="mx-3">|</span>
        Privacy & Cookie Policy
      </div>
    </footer>
  );
}

/* REUSABLE CLICKABLE LINK COMPONENT */
function FooterLink({ label }) {
  return (
    <li>
      <a
        href="#"
        className="hover:underline hover:text-gray-200 transition"
      >
        {label}
      </a>
    </li>
  );
}
