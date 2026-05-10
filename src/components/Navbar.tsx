import './../styles/Navbar.css';

function Navbar() {
  return (
    <div className="flex flex-row items-center">
      <div className="w-screen
      flex flex-row items-center justify-between py-[1.111vw] 
      text-[1.667vw] p-[0.978vw]
      ">
        <div className="flex flex-row items-center text-center gap-[0.556vw] text-[1.944vw]">
          <img src="/plant 1.svg" className="h-[3.333vw] w-[3.333vw]"/>
          <a className="logoname text-[rgba(255,255,255,0.75)] font-bold text-normal">FloraVision.</a>
        </div>
        <ul className="navlist flex h-auto text-white 
        text-[1.667vw] font-normal items-center 
        gap-[2.778vw] pt-[0.417vw] list-none">
          <li><a href="#">Home</a></li>

          <ul className="relative group">
            <div className="flex flex-row items-center gap-[0.556vw]">
              <a href="#" className="cursor-pointer justify-center">Plants Type</a>
              <img src="/Polygon 1.svg" className="w-[1.111vw] h-[0.667vw] pt-[0.278vw] group"/>
            </div>
            <div className="
              bg-linear-to-b
              from-white
              to-black
              relative
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              ">
              <div className="
                  absolute left-0 top-full mt-[0.556vw]
                  backdrop-blur-xs
                  rounded-md
                  bg-[rgba(255,255,255,0.05)]
                  text-white text-[1.25vw]
                  flex flex-col gap-[0.556vw] p-[0.833vw] w-screen
                ">
                <li><a href="#" className="hover:text-[#dfdfdfaf]">Trending</a></li>
                <li><a href="#" className="hover:text-[#dfdfdfaf]">Best Selling</a></li>
                <li><a href="#" className="hover:text-[#dfdfdfaf]">Best O2</a></li>
              </div>
            </div>
          </ul>

          <li><a href="#">More</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="flex gap-[2.778vw] items-center">
          <div className="flex flex-row items-center gap-[4.167vw]">
            <img src="/search-interface-symbol 1.svg" className="w-[1.806vw] h-[1.806vw]"/>
            <img src="/bag 1.svg" className="h-[1.806vw] w-[1.806vw]"/>
          </div>
          <div className="flex flex-col gap-[0.556vw]">
            <img src="/Line 1.svg" className="flex items-end w-[2.153vw] pt-[0.556vw]"/>
            <img src="/Line 2.svg" className="pl-[0.694vw] w-[2.083vw]"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar