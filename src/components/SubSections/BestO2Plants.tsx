import BorderGradient3Stops from "../BorderGradient3Stops";
import '../../styles/Subsection styles/BestO2.css'
import Button from "../Button";

export default function BestO2Plants() {
  return (
    <div className="flex flex-col">
        <div className="flex justify-center w-screen gap-[3vw] pt-[3.23vw] mb-[8.367vw]">
            <img src="/Vector 4.svg" className="translate-y-[0.278vw]
            translate-x-[5.083vw] h-[2.917vw] w-[2.778vw]"/>
                <div className="flex">
                    <h2 className="textHead text-white text-[2.083vw]">Our Best O2</h2>
                </div>
            <img src="/Vector 3.svg" className="translate-x-[-5.083vw]
            h-[2.917vw] w-[2.778vw]"/>
        </div>
        <div className="flex mb-[7.68vw]">
            <img src="/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png" 
            className="w-[50.903vw] h-[50.903vw] absolute z-10 left-[-2.1%] translate-y-[-15.988vw]"/>
            <div className="flex w-screen h-[35.677vw] pl-[2.56vw] pr-[2.56vw]">
                <BorderGradient3Stops 
                className="p-px rounded-[4.689vw] from-[rgba(255,255,255,0.44)] via-[rgba(0,0,0,0)] to-[rgba(255,255,255,0.33)]"
                className1="bg-[rgba(255,255,255,0.05)] rounded-[4.689vw] h-[35.677vw]">
                <div className="flex flex-row">
                    <div className="textHead flex flex-col justify-center 
                    text-[rgba(255,255,255,0.75)] pl-[45.34vw] 
                    mt-[5.56vw] gap-[1.721vw] px-[3vw] pr-[6.29vw]">
                        <h2 className="text-white text-[2.5vw]">We Have Small And Best O2 Plants Collection's</h2>
                        <p className="textHead text-[1.2vw]">Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                        <p className="textHead text-[1.2vw]">Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                        <div className="flex justify-between">
                            <Button className="border-[0.139vw] text-white 
                            rounded-[0.486vw] p-[0.833vw] w-[11.111vw] 
                            text-[1.389vw]">
                                Explore
                            </Button>
                            <div className="flex items-center gap-[1.289vw]">
                                <img src="/right-arrow 3.svg" className="h-[1.027vw] w-[1.027vw]"/>
                                <h3 className="text-[rgba(255,255,255,0.75)] text-[1.029vw]">01/04</h3>
                                <img src="/right-arrow 2.svg" className="h-[1.027vw] w-[1.027vw]"/>
                            </div>
                        </div>
                    </div>
                </div>
                </BorderGradient3Stops>
            </div>
        </div>
        <div className="flex justify-center gap-[0.621vw] w-screen">
            <img src="/Rectangle 11.svg" className="w-[1.34vw]"/>
            <div className="flex gap-[0.63vw]">
                <img src="/Ellipse 6.svg" className="h-[0.67vw] w-[0.67vw]"/>
                <img src="/Ellipse 7.svg" className="h-[0.67vw] w-[0.67vw]"/>
            </div>
        </div>
    </div>
  )
}
