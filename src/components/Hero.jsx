import BgPattern from "./BgPattern";
import CtaBtn from "./CtaBtn";
import FeatureCards from "./FeatureCards";
import FeaturesSection from "./FeatureSection";
import FooterSection from "./Footer";
import Headings from "./Headings";
import LeftPattern from "./LeftPattern";
import PricingSection from "./PricingSection";
import RightPattern from "./RightPattern";
import TestimonialSection from "./TestimonialSection";


export default function Hero() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
      <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <Headings />
      </div>

      <CtaBtn />

      <BgPattern />

      <div className="self-stretch border-t border-[#E0DEDB] border-b flex justify-center items-start mt-60">
        <LeftPattern />
        <FeatureCards />
        <RightPattern />
      </div>

      <TestimonialSection />
      <FeaturesSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
