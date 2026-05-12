import PartialBorder from "../PartialBorder";
import '../../styles/Subsection styles/CustomerReview.css';

function CustomerReview() {
  return (
    <div className="mb-[2.356vw]">
        <div className="flex flex-col mb-[6vw] items-center mt-[23.549vw]">
            <PartialBorder className="z-10 text-[2.083vw] text-white">
                <h3>Customer Review</h3>
            </PartialBorder>
        </div>
        <div className="flex justify-center gap-[0.96vw]">
            <div className="relative w-[29.334vw]">
                <img src="/Rectangle 7.svg" className="w-full"/>
                <div className="absolute inset-0 flex gap-[1.96vw] left-0 right-0 mt-[4.45vw] pr-[3.02vw] pl-[3.52vw]">
                    <img src="/unsplash__7LbC5J-jw4.png" className="w-[4.706vw] h-[4.806vw] rounded-full object-cover shrink-0"/>
                    <div>
                        <h2 className="customerName text-white text-[2.439vw]">Shelly Russel</h2>
                        <div className="flex gap-[0.486vw]">
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 5.svg" className="w-[1vw] h-[1vw]"/>
                        </div>
                    </div>
                </div>
                <div className="flex absolute inset-0 text-[rgba(255,255,255,0.75)] mt-[11.965vw] pr-[3.92vw] pl-[3.72vw]">
                    <p className="customerText w-full text-[1.267vw]">Just got my hands on some absolutely awesome plants, and I couldn't be happier!</p>
                </div>
            </div>
            <div className="relative w-[29.334vw]">
                <img src="/Rectangle 7.svg" className="w-full"/>
                <div className="absolute inset-0 flex gap-[1.96vw] left-0 right-0 mt-[4.45vw] pr-[3.02vw] pl-[3.52vw]">
                    <img src="/unsplash__7LbC5J-jw4 (1).png" className="w-[4.706vw] h-[4.806vw] rounded-full object-cover shrink-0"/>
                    <div>
                        <h2 className="customerName text-white text-[2.439vw]">Lula Rolfson</h2>
                        <div className="flex gap-[0.486vw]">
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 5.svg" className="w-[1vw] h-[1vw]"/>
                        </div>
                    </div>
                </div>
                <div className="flex absolute inset-0 text-[rgba(255,255,255,0.75)] mt-[11.965vw] pr-[3.92vw] pl-[3.72vw]">
                    <p className="customerText w-full text-[1.267vw]">Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.</p>
                </div>
            </div>
            <div className="relative w-[29.334vw]">
                <img src="/Rectangle 7.svg" className="w-full"/>
                <div className="absolute inset-0 flex gap-[1.96vw] left-0 right-0 mt-[4.45vw] pr-[3.02vw] pl-[3.52vw]">
                    <img src="/unsplash__7LbC5J-jw4 (2).png" className="w-[4.706vw] h-[4.806vw] rounded-full object-cover shrink-0"/>
                    <div>
                        <h2 className="customerName text-white text-[2.439vw]">Carol Huels</h2>
                        <div className="flex gap-[0.486vw]">
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 2.svg" className="w-[1vw] h-[1vw]"/>
                            <img src="/Star 5.svg" className="w-[1vw] h-[1vw]"/>
                        </div>
                    </div>
                </div>
                <div className="flex absolute inset-0 text-[rgba(255,255,255,0.75)] mt-[11.965vw] pr-[3.92vw] pl-[3.72vw]">
                    <p className="customerText w-full text-[1.267vw]">It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerReview
