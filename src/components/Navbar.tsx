import './../styles/Navbar.css';

function Navbar() {
  return (
    <div className="items-center">
    <div className="w-screen h-50px flex flex-row items-center justify-between px-10 py-4 text-[24px]">
      <div className="flex flex-row items-center text-center gap-2 text-[28px] font-inter">
        <img src="/plant 1.svg" className="h-[48px] w-[48px]"/>
        <a className="logoname text-[rgba(255,255,255,0.75)] font-bold text-normal">FloraVision.</a>
      </div>
      <ul className="navlist flex h-auto text-white text-[24px] font-normal text-center gap-10 pt-1.5 list-none">
        <li><a href="#">Home</a></li>

        <ul className="relative group">
          <div className="flex flex-row items-center gap-2">
            <a href="#" className="cursor-pointer justify-center">Plants Type</a>
            <img src="/Polygon 1.svg" className="w-4.2 h-2.4 pt-1 group"/>
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
                absolute left-0 top-full mt-2
                backdrop-blur-xs
                rounded-md
                bg-[rgba(255,255,255,0.05)]
                text-white text-lg
                flex flex-col gap-2 p-3 w-auto
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
      <div className="flex gap-25">
        <div className="flex flex-row items-center gap-25">
          <img src="/search-interface-symbol 1.svg" className="w-6.5 h-6.5"/>
          <img src="/bag 1.svg" />
        </div>
        <div className="flex flex-col gap-2">
          <img src="Line 1.svg" className="flex flex-end w-7.75 pt-2"/>
          <img src="Line 2.svg" className="pl-2.5 w-7.5"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar