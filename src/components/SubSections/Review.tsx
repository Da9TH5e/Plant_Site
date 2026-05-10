import BorderGradient from "../BorderGradient";

function Review() {
  return (
        <BorderGradient className="p-[1.389vw] w-[24.444vw] rounded-[1.667vw] bg-[rgba(255,255,255,0.05)]">
            <div className="flex flex-row ">
              <img src="/unsplash_3TLl_97HNJo.png" className="w-[4.306vw] h-[4.306vw] rounded-full object-cover"/>
              <div className="flex flex-col ml-[1.389vw] gap-[0.556vw]">
                <h3 className="text-white text-[1.528vw]">Ronnie Hamill</h3>
                <div className="flex gap-[0.486vw] w-[1vw] h-[1vw]">
                  <img src="/Star 2.svg" />
                  <img src="/Star 2.svg" />
                  <img src="/Star 2.svg" />
                  <img src="/Star 2.svg" />
                  <img src="/Star 5.svg" />
                </div>
              </div>
            </div>
          <div className="text-[rgba(255,255,255,0.75)] text-[1.181vw]">
            <p className="pt-[1.389vw] pl-[0.417vw] line-clamp-3">
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </div>
        </BorderGradient>
  )
}

export default Review
