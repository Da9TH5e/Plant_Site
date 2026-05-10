import BuyButton from "../BuyButton";

export default function Plants({className}: {className?: string}) {
  return (
    <div className={`relative flex items-end space-x-[-2vw] py-[0.556vw] ${className}`}>
      <img src="/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png" className="absolute h-[32.875vw]
        left-[-10vw] bottom-[38%] z-10"/>
        <div className="self-end translate-x-[-7vw] w-[30.556vw]">
          <img src="/Rectangle 14.svg" className="z-[-1] mt-[10vw]" />
          <div className="absolute bottom-[15%] text-[rgba(255,255,255,0.75)] p-[1.2vw]">
              <p className="text-[0.903vw]">Indoor Plant</p>
              <div className="flex flex-row items-center gap-x-[6.111vw] justify-between">
                  <h2 className="whitespace-nowrap text-[2.014vw]">Aglaonema  plant</h2>
                  <img src="/right-arrow 1.svg" className="flex pl-[5.377vw] h-[2.22vw]" />
              </div>
              <div className="pt-[1.556vw]">
                  <BuyButton className="w-[11.111vw] pt-[0.278vw] rounded-[0.286vw] text-[1.389vw] border"/>
              </div>
          </div>
          <div className="flex absolute bottom-[4vw] left-0 right-0 justify-center gap-[0.7vw]">
            <img src="/Rectangle 4.svg" className="h-[0.5vw] w-[1.5vw]"/>
            <div className="flex gap-[0.5vw]">
                <img src="/Ellipse 4.svg" className="w-[0.5vw]"/>
                <img src="/Ellipse 5.svg" className="w-[0.5vw]"/>
            </div>
          </div>
      </div>
      </div>
  )
}
