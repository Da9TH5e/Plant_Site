import '../../styles/Subsection styles/HeroText.css';
import BuyButton from '../BuyButton';
import BorderGradient from '../BorderGradient';

export default function HeroText() {
  return (
    <div className="flex flex-row space-x-96">
        <div className="flex flex-col text-[rgba(255,255,255,0.75)] pl-10.75 pt-24">
            <h1 className="mainText text-[109px] whitespace-nowrap">Earth's Exhale</h1>
            <p className="subtext text-[20px]">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural <br /> 
            environment and its essential role in sustaining life.</p>
            <div className="flex mt-3 items-center gap-3">
                <div className="flex flex-row gap-8">
                    <BuyButton className="pt-2 w-40 text-[20px] rounded-[7px]"/>
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
        <div className="relative flex items-end mt-49 px-2.5 py-0.5">
            <img src="/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png" className="absolute h-114.75 -top-72 -left-43 z-10"/>
            <div className="-translate-x-41 w-lg">
                <BorderGradient className="
                    pt-40
                    p-4
                    bg-[rgba(255,255,255,0.05)]
                ">
                    <div className="text-[rgba(255,255,255,0.75)]">
                        <p className="text-[13px]">Indoor Plant</p>
                        <div className="flex flex-row items-center justify-between">
                            <h2 className="whitespace-nowrap text-[29px]">Aglaonema  plant</h2>
                            <img src="/right-arrow 1.svg" />
                        </div>
                        <div className="pt-2">
                            <BuyButton className="w-40 h-10 pt-1 rounded-[7px] text-[20px]"/>
                        </div>
                    </div>
                </BorderGradient>
            </div>
                
        </div>
    </div>
  )
}