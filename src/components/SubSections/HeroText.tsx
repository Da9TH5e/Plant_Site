import '../../styles/Subsection styles/HeroText.css';
import BuyButton from '../Button';
import Review from './Review';

export default function HeroText() {
  return (
    <div className="flex flex-col gap-[1.389vw]">
        <div className="flex flex-col text-[rgba(255,255,255,0.75)] pl-[2.667vw] pt-[3.667vw]">
            <h1 className="mainText text-[7.569vw] whitespace-nowrap">Earth's Exhale</h1>
            <p className="subtext text-[1.389vw] line-clamp-2">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural 
            environment and its essential role in sustaining life.</p>
            <div className="flex mt-[0.833vw] items-center gap-[0.933vw]">
                <div className="flex flex-row gap-[2.222vw]">
                    <BuyButton className="pt-[0.256vw] w-[11.111vw] h-full text-[1.389vw] 
                    rounded-[0.486vw] border">
                        Buy Now
                    </BuyButton>
                    <div className="group flex items-center justify-center border border-solid border-[#FFFFFF] rounded-full
                        h-[2.833vw] w-[2.833vw]
                        hover:cursor-pointer 
                        hover:border-[rgba(255,255,255,0.7)]
                        hover:scale-90
                        transition-transform duration-300
                    ">
                    <img src="/Polygon 2.svg" className="pt-[0.139vw] pl-[0.25vw] h-[1.528vw] w-[1.389vw] group-hover:opacity-70"/>
                    </div>
                </div>
                <p className="demoText text-[1.736vw]">Live Demo...</p>
            </div>
        </div>
        <div className="relative pl-[2.667vw] pt-[7.667vw]">
            <Review />
        </div>
    </div>
  )
}