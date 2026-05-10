import '../styles/TrendingPlants.css';
import BorderGradient3Stops from './BorderGradient3Stops';
import Button from './Button';
import PartialBorder from './PartialBorder';

function TrendingPlants() {
  return (
    <div className="flex flex-col w-screen">
        <div className="flex justify-center mb-[5.556vw] pb-[2.778vw]">
            <PartialBorder className="text-[2.083vw] text-white">
                <h3 className="trendHeader">Our Trending Plants</h3>
            </PartialBorder>
        </div>
        <div className="flex pl-[1.944vw] pr-[1.944vw] mb-[6.944vw] gap-[5.556vw] mt-[6.944vw]">
            <div className="relative w-full">
                <img src="/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png" 
                className="absolute w-[40.278vw] h-[48.611vw] top-[-16.667vw] z-10"/>
                <BorderGradient3Stops className1="bg-[rgba(255,255,255,0.05)] rounded-[6.25vw]" 
                className="p-[0.139vw] from-[rgba(255,255,255,0.27)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.33)] 
                rounded-[6.25vw]">
                    <div className="flex flex-row pl-[6.944vw] gap-[2.222vw] items-center">
                        <div className="w-[27.778vw]"/>
                        <div className="flex flex-col gap-[1.389vw] p-[5vw]">
                            <h2 className="plantHeader text-white text-[2.083vw]">For Your Desks Decorations</h2>
                            <p className="plantDesc text-white text-[1.042vw]">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                            <h3 className="plantPrice text-white text-[2.083vw]">Rs. 599/-</h3>
                            <div className="flex gap-[0.972vw]">
                                <Button className="border-[0.139vw] text-white 
                                rounded-[0.486vw] p-[0.833vw] w-[11.111vw] 
                                text-[1.389vw]
                                ">
                                    Explore
                                </Button>
                                <Button className="rounded-[0.486vw] p-[0.833vw] justify-center border-[0.139vw]">
                                    <img src="/bag 3.svg" className="w-[1.944vw] h-[1.944vw]"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </BorderGradient3Stops>
            </div>
        </div>
        <div className="flex pl-[1.944vw] pr-[1.944vw] mb-[6.944vw] gap-[5.556vw] mt-[6.944vw]">
            <div className="relative w-full">
                <img src="/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png" 
                className="absolute w-[40.278vw] h-[48.611vw] top-[-16.667vw] z-10 right-0 flex-end"/>
                <BorderGradient3Stops className1="bg-[rgba(255,255,255,0.05)] rounded-[6.25vw]" 
                className="p-[0.139vw] from-[rgba(255,255,255,0.27)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.33)] 
                rounded-[6.25vw]">
                    <div className="flex flex-row gap-[2.222vw] items-center">
                        
                        <div className="flex flex-col gap-[1.389vw] p-[5vw]">
                            <h2 className="plantHeader text-white text-[2.083vw]">For Your Desks Decorations</h2>
                            <p className="plantDesc text-white text-[1.042vw]">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
                            <h3 className="plantPrice text-white text-[2.083vw]">Rs. 399/-</h3>
                            <div className="flex gap-[0.972vw]">
                                <Button className="border-[0.139vw] text-white 
                                rounded-[0.486vw] p-[0.833vw] w-[8.333vw]
                                text-[1.389vw]">
                                    Explore
                                </Button>
                                <Button className="rounded-[0.486vw] p-[0.833vw] justify-center border-[0.139vw]">
                                    <img src="/bag 3.svg" className="w-[1.944vw] h-[1.944vw]"/>
                                </Button>
                            </div>
                        </div>
                        <div className="w-[27.778vw]"/>
                    </div>
                </BorderGradient3Stops>
            </div>
        </div>
    </div>
  )
}

export default TrendingPlants
