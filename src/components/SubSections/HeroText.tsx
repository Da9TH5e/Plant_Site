import '../../styles/Subsection styles/HeroText.css';
import BuyButton from '../Button';
import Review from './Review';

export default function HeroText() {
  return (
    <div className="flex flex-col gap-y-19">
        <div className="flex flex-col text-[rgba(255,255,255,0.75)] pl-10.75 pt-24">
            <h1 className="mainText text-[109px] whitespace-nowrap">Earth's Exhale</h1>
            <p className="subtext text-[20px]">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural <br /> 
            environment and its essential role in sustaining life.</p>
            <div className="flex mt-3 items-center gap-3">
                <div className="flex flex-row gap-8">
                    <BuyButton className="pt-2 w-40 text-[20px] rounded-[7px] border">
                        Buy Now
                    </BuyButton>
                    <div className="group flex items-center justify-center border border-solid border-[#FFFFFF] rounded-full h-12 w-12 hover:cursor-pointer 
                        hover:border-[rgba(255,255,255,0.7)]
                        hover:scale-90
                        transition-transform duration-300
                    ">
                    <img src="/Polygon 2.svg" className="pt-0.5 pl-0.9 h-[22px] w-[20px] group-hover:opacity-70"/>
                    </div>
                </div>
                <p className="demoText text-[25px]">Live Demo...</p>
            </div>
        </div>
        <div className="relative left-10 mt-25">
            <Review />
        </div>
    </div>
  )
}