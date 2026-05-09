import { BackGround } from "./BackGround";
import Navbar from "./Navbar";
import HeroText from "./SubSections/HeroText";
import Plants from "./SubSections/Plants";
import TrendingPlants from "./TrendingPlants";

function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <Navbar />
      <div className="flex flex-row justify-between">
        <HeroText />
        <Plants className="mt-49 left-20"/>
      </div>
      <div className="flex mt-45 relative">
        <TrendingPlants />
      </div>
      <BackGround className="absolute inset-0 -z-10"/>
    </div>
  )
}

export default Home
