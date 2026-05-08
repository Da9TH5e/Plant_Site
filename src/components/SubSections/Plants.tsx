import BuyButton from "../Button";

export default function Plants({className}: {className?: string}) {
  return (
    <div className={`relative flex items-end py-4 ${className}`}>
      <img src="/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png" className="absolute h-114.75 -top-58 -left-43 z-10"/>
      <div className="-translate-x-41 w-110 -translate-y-45">
          <div className="
              gradientBorder
              absolute
              rounded-3xl
              bg-linear-to-br
              from-white
              to-black
              z-1 inset-0 p-px
          ">
          </div>
          <div className="
          relative
              pt-64
              p-4
              bg-[rgba(255,255,255,0.05)]
              rounded-3xl
              backdrop-blur-[6px]
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
          </div>
      </div>
  </div>
  )
}
