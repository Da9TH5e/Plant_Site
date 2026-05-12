import '../../styles/Subsection styles/Footer.css';

function Footer() {
  return (
    <div className=" flex gap-[17.45vw] justify-center mt-[13.23vw] mb-[5.45vw]">
        <div className="flex flex-col gap-[1.75vw] ">
            <div className="flex flex-col gap-[1.45vw] p-[2.45vw]">
                <div className="flex gap-[1vw] items-center">
                    <img src="/plant 1.svg" className="h-[4.928vw]"/>
                    <h2 className="LogoText text-[2.225vw] text-[rgba(255,255,255,0.75)]">FloraVision.</h2>
                </div>
                <div className="flex pl-[0.83vw] w-[23.45vw]">
                    <p className="footText text-white text-[1.1vw]">"From lush indoor greens to vibrant <br/> outdoor blooms, our plants are crafted to <br/> thrive and elevate your living environment."</p>
                </div>
            </div>
            <div className="flex pl-[3.63vw] gap-[3.94vw]">
                <a className="textLink text-white cursor-pointer text-[1.644vw]">FB</a>
                <a className="textLink text-white cursor-pointer text-[1.644vw]">TW</a>
                <a className="textLink text-white cursor-pointer text-[1.644vw]">LI</a>
            </div>
        </div>
        <div className="flex flex-col gap-[0.56vw]">
            <div className="flex flex-col mt-[2.788vw] gap-[0.45vw]">
                <div className="pb-[2.14vw]">
                    <h3 className="textLink text-white text-[1vw]">Quick Link’s</h3>
                </div>
                <a className="footText text-white text-[1.1vw] cursor-pointer underline" href="#">Home</a>
                <a className="footText text-white text-[1.1vw] cursor-pointer underline">Type’s Of plant’s</a>
                <a className="footText text-white text-[1.1vw] cursor-pointer underline">Contact</a>
                <a className="footText text-white text-[1.1vw] cursor-pointer underline">Privacy</a>
            </div>
        </div>
        <div>
            <div className="flex flex-col mt-[2.788vw] gap-[0.45vw]">
                <div className="pb-[2.14vw]">
                    <h3 className="textLink text-white text-[1.1vw]">For Every Update.</h3>
                </div>
                <div className="flex border-[0.139vw] rounded-[0.346vw] border-white cursor-text">
                    <div className="flex p-[0.24vw] items-center gap-[11.6vw]">
                        <p className="footText text-[0.967vw] pl-[1.21vw] text-[rgba(255,255,255,0.75)]">Enter Email</p>
                        <div className="border-[0.139vw] rounded-[0.316vw] h-[2vw] w-[7vw] cursor-pointer border-white bg-white">
                            <p className="subText text-[0.867vw] text-center items-center pt-[0.291vw] text-[rgba(0,0,0,1)]">SUBSCRIBE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[8.95vw]">
                <p className="footText text-[0.967vw] text-white">FloraVision © all right reserve</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
