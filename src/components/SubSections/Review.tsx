import BorderGradient from "../BorderGradient";

function Review() {
  return (
        <BorderGradient className="p-5 max-w-88 min-w-3 bg-[rgba(255,255,255,0.05)]">
            <div className="flex flex-row max-w-88">
              <img src="/unsplash_3TLl_97HNJo.png" className="w-[62px] h-[62px] rounded-full object-cover"/>
              <div className="flex flex-col ml-5 gap-2">
                <h3 className="text-white text-[22px]">Ronnie Hamill</h3>
                <div className="flex gap-1.75">
                  <img src="/Star 2.svg" />
                  <img src="/Star 2.svg" />
                  <img src="/Star 2.svg" />
                  <img src="/Star 2.svg" />
                  <img src="/Star 5.svg" />
                </div>
              </div>
            </div>
          <div className="text-[rgba(255,255,255,0.75)] text-[17px]">
            <p className="pt-5 pl-1.5">
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </div>
        </BorderGradient>
  )
}

export default Review
