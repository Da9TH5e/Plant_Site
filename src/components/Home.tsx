import { BackGround } from "./BackGround";
import Navbar from "./Navbar";
import HeroText from "./SubSections/HeroText";
import Plants from "./SubSections/Plants";
import TrendingPlants from "./TrendingPlants";

function Home() {
  return (
    <div className="relative flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex flex-row justify-between">
        <HeroText />
        <Plants className="pr-[8.333vw] left-[12.278vw]"/>
      </div>
      <div className="flex xs:mt-1 xl:mt-45 relative">
        <TrendingPlants />
      </div>
      <div>
        
      </div>
      <BackGround className="absolute inset-0 -z-10"/>
    </div>
  )
}

export default Home
