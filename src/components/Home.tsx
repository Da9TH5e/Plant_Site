import { BackGround } from "./BackGround";
import Navbar from "./Navbar";
import HeroText from "./SubSections/HeroText";
import Plants from "./SubSections/Plants";
import TrendingPlants from "./TrendingPlants";

function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-row justify-between">
        <HeroText />
        <Plants className="mt-49 left-20"/>
      </div>
      <div className="flex pl-10 pr-10 mt-45 relative">
        <TrendingPlants />
      </div>
      <BackGround className="absolute inset-0 -z-10"/>
    </div>
  )
}

export default Home
