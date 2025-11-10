/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 10/11/2025 - 11:48:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2025
    * - Author          : fortu
    * - Modification    : 
**/

import Marquee from "../components/Marquee";
import TopContactRow from "../components/TopContactRow";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

import FlightSearchBox from "../components/FlightSearch/FlightSearchBox";

import StudentFare from "../components/Highlights/StudentFare";
import SmoothConnections from "../components/Highlights/SmoothConnections";

import QuickServicesStrip from "../components/QuickServicesStrip";

import Disclaimer from "../components/Disclaimer";
import AdditionalBenefits from "../components/AdditionalBenefits";

import Destinations from "../components/Destinations";

import StoryAndMobile from "../components/StoryAndMobile";

import Newsletter from "../components/Newsletter";

import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">

      <Marquee />
      <TopContactRow />
      <Navbar />
      <Carousel />

      <FlightSearchBox />

      {/* STUDENT FARE + SMOOTH CONNECTIONS */}
      <div className="max-w-[1300px] mx-auto px-6 mt-16 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <StudentFare />
        <SmoothConnections />
      </div>

      {/* QUICK SERVICES STRIP */}
      <QuickServicesStrip />

      {/* DISCLAIMER + ADDITIONAL BENEFITS */}
      <div className="max-w-[1300px] mx-auto px-6">
        <Disclaimer />
        <AdditionalBenefits />
      </div>

      <Destinations />

      <StoryAndMobile />

      <Newsletter />

        <Footer />

    </div>
  );
}
