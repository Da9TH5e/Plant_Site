import { BackGround } from "./BackGround";
import Navbar from "./SubSections/Navbar";
import BestSellingPlants from "./SubSections/BestSellingPlants";
import HeroText from "./SubSections/HeroText";
import Plants from "./SubSections/Plants";
import TrendingPlants from "./SubSections/TrendingPlants";
import CustomerReview from "./SubSections/CustomerReview";
import BestO2Plants from "./SubSections/BestO2Plants";
import Footer from "./SubSections/Footer";

function Home() {
  return (
    <div className="relative flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex flex-row justify-between">
        <HeroText />
        <Plants className="pr-[8.333vw] left-[12.278vw]"/>
      </div>
      <div className="flex mt-[12.5vw] relative">
        <TrendingPlants />
      </div>
      <BackGround className="absolute inset-0 -z-10"/>
      <div className="bg-[#1B2316]">
        <BestSellingPlants />
        <div>
          <CustomerReview/>
        </div>
        <BestO2Plants />
        <div>
          <Footer />
        </div>
      </div>

    </div>
    
  )
}

export default Home
