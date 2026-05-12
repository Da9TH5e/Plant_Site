import BuyButton from "../BuyButton";
import '../../styles/Subsection styles/Plants.css';

export default function Plants({className}: {className?: string}) {
  return (
    <div className={`relative flex items-end space-x-[-2vw] py-[0.556vw] ${className}`}>
      <img src="/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png" className="absolute h-[32.875vw]
        left-[-10vw] bottom-[38%] z-10"/>
        <div className="self-end translate-x-[-7vw] w-[30.556vw]">
          <svg width="100%" height="100%" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="-15" y="-15" width="50%" height="50%">
              <div 
                style={{backdropFilter:"blur(7.5px)", clipPath:"url(#bgblur_0_11_240_clip_path)", height:"100%", width:"100%"}}>
              </div>
            </foreignObject>
            <path id="Rectangle 14" data-figma-bg-blur-radius="15" d="M0.5 62.2175C0.500045 21.6646 40.3416 -7.51049 79.6914 2.46948C133.868 16.21 205.805 30.9337 263.007 30.157C315.825 29.4398 381.619 15.6257 432.31 2.63159C471.644 -7.45145 511.5 21.694 511.5 62.2585V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2175Z" 
            fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_11_240)"/>
              <defs>
                <clipPath id="bgblur_0_11_240_clip_path" transform="translate(15 15)">
                  <path d="M0.5 62.2175C0.500045 21.6646 40.3416 -7.51049 79.6914 2.46948C133.868 16.21 205.805 30.9337 263.007 30.157C315.825 29.4398 381.619 15.6257 432.31 2.63159C471.644 -7.45145 511.5 21.694 511.5 62.2585V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2175Z"/>
                </clipPath>
                <linearGradient id="paint0_linear_11_240" x1="32.5" y1="25.157" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1"/>
                </linearGradient>
              </defs>
          </svg>
          <div className="absolute bottom-[15%] text-[rgba(255,255,255,0.75)] p-[1.2vw]">
              <p className="plantText text-[0.903vw]">Indoor Plant</p>
              <div className="flex flex-row items-center gap-x-[6.111vw] justify-between">
                  <h2 className="plantText whitespace-nowrap text-[2.014vw]">Aglaonema  plant</h2>
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
