import "tailwindcss"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BackGround } from "./components/BackGround";

function Section1() {
  return (
    <div className="
      relative
      flex
      flex-col
      ">
      <Navbar />
      <BackGround className="absolute inset-0 -z-10"/>
      <Home />
    </div>
  )
}

export default Section1
