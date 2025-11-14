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
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

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
          <img src="data:image/jpeg;base64,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2nco+z6jurpaN12jh6usaDG6Iuyxxj6wNcHc8tB4g8wr5MFPf5N7r6/grXJbpvzbkd4udZbaiejbCHwzys7e7aWR9/A53fJVnFWtqxO+sR+aYvMxMx5NvSldcLpZo7hcREOtYx7BHu4Nc0Htbjz49ypmrWl5rXy9VsczMblOLGuICAgICAgICAgICAg8PGWnacHxQcLpfo3prDfG3U1D5XNDsBzQ3i4EE5B8Cfit3Nx1suPw9ahr04eKW5ny59G8F21Cbvcqh78vDjHtAbtbjDM5yBgY+Piox8dbHj5Kx9UW4eLW5plmvnRpYbhSiOhYKdwcDvYMkjBBbgnGOIPuTHx+alt2nfzTfhqWjXZO6YsgsFibaopC8N37XEYPacTy9RJWvmzeLkm8x3ZKU5K8rntKdHFNpy8NuTah8ha1wAc0Di4YJyD4Z+K2c/HWzU5Nahjx8PFLc225rPRY1XPG6eodG2MHaxrQ4ZPMnJ54wP8A6qcNxc4N6je05cPid5eD0cac81GkbCN+zb13Eu3bcb+eM54+Cfbs3Nzb+h9nx8utM2idGRaTkldBO6QShmQ5oGC3dgjB/wARUcTxU59bjWk4cMY96datZmEEfXUDayrgnc4jqZC8DHpZikjwfc8n3BTWdRMeqsxuYlvhQsiLxbK2ukbJQ1T4S0EEBrZGuDsek1w4kY4HPeVel613uu1LVme0opuiaM2mK2zSyOYyZ0z/ALJkcdx47MbAHOyA3HohZftVuebxHWY0p4McvLLJ+B1My1VNsgke2Kd4fg9ssI2bsFxJdktB4+JUfabTaLT3hPhRqYjzSl+tTbxZ329ziwP29poBIw4HODw7ljx5OS8WWtTmrp8tVFcKSRzq6qdOCBgOjYzb9wDPvS+Stvhrr8f3K1mO8vVgtbLPbvJInFw3yPyRg9uRzyPcXY9yZLze25TWvLGn2y2tlqgfExxdvlkk4jGDI8ux7BnCjJkm8xM+kR+BWvLGmrfNPU97rIZa1z9kW4iNrizLnAAOLmkOBAyBg/aKtjzTjiYr56RfHFpjbSGkIGWI2iKaRrRN1sLhgmIiTe0DOdwDs8/H3q/2mZvzzHlr5+SvhRy8u2ah046JtTJW1D5ZahgY+QtazDWtcGhrW8Bjc4+0qLZd8sVjUR5Jis9dyw2nSnkc8ElZUyTCmbtgY5rGtZ2NmeyMudtyASe8qb8RzRaKxrfdFMWtdeyToLMyjpZ4GvJ66SWQkj0TJzA8cLHbJNpifTX5LRTUTHq2LNQNtdpit7XFwijawOPMhrQMn4KuS83vNp852tEajTfUJEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBB/9k=" className="h-16" />
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSf7-lvR-B6f7YqPKVfersTThAXuO8NtzyTyj-CDPCO9x5FGlbc" className="h-40 border-radius-[40px]" />
          <img src="data:image/png;base64,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" className="h-16" />
        </div>

        {/* App Buttons */}
        <div className="flex justify-end gap-4">
          <a href="#">
            <img src="https://i.imgur.com/kzVbLrF.png" className="h-12" />
          </a>
          <a hrAef="#">
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
