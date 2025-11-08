import { GithubIcon, LinkedInIcon, TwitterIcon } from "./SocialIcons";

const listOfProductsFeatures = [
  "Features",
  "Pricing",
  "Integrations",
  "Real-time Previews",
  "Multi-Agent Coding",
];
const listOfCompanyFeatures = [
  "About us",
  "Our team",
  "Careers",
  "Brand",
  "Contact",
];
const listOfResourcesFeatures = [
  "Terms of use",
  "API Reference",
  "Documentation",
  "Community",
  "Support",
];
const productFeatures = listOfProductsFeatures.map((item) => (
  <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
    {item}
  </div>
));
const companyFeatures = listOfCompanyFeatures.map((item) => (
  <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
    {item}
  </div>
));
const resourcesFeatures = listOfResourcesFeatures.map((item) => (
  <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
    {item}
  </div>
));

export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        {/* Brand Section */}
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex justify-start items-center gap-3">
            <div className="text-center text-[#49423D] text-xl font-semibold leading-4">
              Brillance
            </div>
          </div>
          <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">
            Coding made effortless
          </div>

          {/* Social Icons */}
          <div className="flex justify-start items-start gap-4">
            <TwitterIcon />
            <LinkedInIcon />
            <GithubIcon />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
              Product
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              {productFeatures}
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
              Company
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              {companyFeatures}
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
              Resources
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              {resourcesFeatures}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pattern */}
      <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {/* Decorative pattern lines placeholder */}
          </div>
        </div>
      </div>
    </div>
  );
}
