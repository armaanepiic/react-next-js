import integration from "../assets/images/services/integration.png";
import speak from "../assets/images/services/speak.png";
import workOrder from "../assets/images/services/work-order.png";
import workSync from "../assets/images/services/work-sync.png";

const gridContents = [
  {
    id: 1,
    heading: "Smart. Simple. Brilliant.",
    subHeading:
      "Your data is beautifully organized so you see everything clearly without the clutter.",
    image: workOrder,
    imageAlt: "Work Order",
    imageClassName: "h-1/2 object-cover",
    wrapperClass:
      "border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6",
  },
  {
    id: 2,
    heading: "Your work, in sync",
    subHeading:
      "Every update flows instantly across your team and keeps collaboration effortless and fast.",
    image: workSync,
    imageAlt: "Work Sync",
    imageClassName: "h-full object-cover",
    wrapperClass:
      "border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6",
  },
  {
    id: 3,
    heading: "Effortless integration",
    subHeading:
      "All your favorite tools connect in one place and work together seamlessly by design.",
    image: integration,
    imageAlt: "Integration",
    imageClassName: "h-full object-cover",
    wrapperClass:
      "border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent",
  },
  {
    id: 4,
    heading: "Numbers that speak",
    subHeading:
      "Track growth with precision and turn raw data into confident decisions you can trust.",
    image: speak,
    imageAlt: "Speak",
    imageClassName: "h-full object-cover",
    wrapperClass:
      "p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6",
  },
];

export default gridContents;
