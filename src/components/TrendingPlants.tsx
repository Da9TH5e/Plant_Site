import '../styles/TrendingPlants.css';
import BorderGradient3Stops from './BorderGradient3Stops';
import Button from './Button';
import PartialBorder from './PartialBorder';

function TrendingPlants() {
  return (
    <div className="flex flex-col w-full">
        <div className="flex justify-center mb-20 pb-10">
            <PartialBorder className="text-[30px] text-white">
                <h3 className="trendHeader">Our Trending Plants</h3>
            </PartialBorder>
        </div>
        <div className="flex mb-25 gap-20 mt-25">
            <div className="relative w-full">
                <img src="/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png" 
                className="absolute fill max-w-145 max-h-175 -top-60 z-10"/>
                <BorderGradient3Stops className1="max-h-100 w-full bg-[rgba(255,255,255,0.05)] rounded-[90px]" 
                className="p-0.5 from-[rgba(255,255,255,0.27)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.33)] rounded-[90px]">
                    <div className="flex flex-row pl-25 gap-8 items-center">
                        <div className="w-100"/>
                        <div className="flex flex-col gap-5 p-18">
                            <h2 className="plantHeader text-white text-[30px]">For Your Desks Decorations</h2>
                            <p className="plantDesc text-white text-[15px]">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                            <h3 className="plantPrice text-white text-[30px]">Rs. 599/-</h3>
                            <div className="flex gap-3.5">
                                <Button className="border-2 text-white rounded-[7px] p-3 w-40 text-[20px]">
                                    Explore
                                </Button>
                                <Button className="rounded-[7px] p-3 justify-center border-2">
                                    <img src="/bag 3.svg" className="w-7 h-7"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </BorderGradient3Stops>
            </div>
        </div>
        <div className="flex mb-25 mt-25">
            <div className="relative w-full">
                <img src="/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png" 
                className="absolute fill max-w-145 max-h-175 right-0 -top-50 z-10 flex-end"/>
                <BorderGradient3Stops className1="max-h-100 w-full bg-[rgba(255,255,255,0.05)] rounded-[90px]" 
                className="p-0.5 from-[rgba(255,255,255,0.27)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.33)] rounded-[90px]">
                    <div className="flex flex-row gap-8 items-center">
                        
                        <div className="flex flex-col gap-5 p-18">
                            <h2 className="plantHeader text-white text-[30px]">For Your Desks Decorations</h2>
                            <p className="plantDesc text-white text-[15px]">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
                            <h3 className="plantPrice text-white text-[30px]">Rs. 399/-</h3>
                            <div className="flex gap-3.5">
                                <Button className="border-2 text-white rounded-[7px] p-3 w-40 text-[20px]">
                                    Explore
                                </Button>
                                <Button className="rounded-[7px] p-3 justify-center border-2">
                                    <img src="/bag 3.svg" className="w-7 h-7"/>
                                </Button>
                            </div>
                        </div>
                        <div className="w-135"/>
                    </div>
                </BorderGradient3Stops>
            </div>
        </div>
    </div>
  )
}

export default TrendingPlants
