import Hero from "./Hero";
import Navigation from "./Navigation";

export default function MainContent() {
  return (
    //   Main container with proper margins

    <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
      {/* <!-- Left vertical line --> */}
      <div class="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

      {/* <!-- Right vertical line --> */}
      <div class="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

      <div
        className="self-stretch pt-[9px]  border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10"
      >
        {/* navigation section */}
        <Navigation />
        {/* Hero section */}
        <Hero/>
      </div>
    </div>
  );
}
