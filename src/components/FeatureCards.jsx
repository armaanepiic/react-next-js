import planImg from "../assets/images/services/plan-your-schedules.jpeg";
import analyticsImg from "../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg";
import dataVizImg from "../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg";
import Cards from "./Cards";

const listOfCards = [
  {
    id: 1,
    heading: "Plan your schedules",
    subHeading: "Streamline customer subscriptions and billing with automated scheduling tools.",
    image: planImg,
  },
  {
    id: 2,
    heading: "Analytics & insights",
    subHeading: "Transform your business data into actionable insights with real-time analytics.",
    image: analyticsImg,
  },
  {
    id: 3,
    heading: "Collaborate seamlessly",
    subHeading: "Keep your team aligned with shared dashboards and collaborative workflows.",
    image: dataVizImg,
  },
];

export default function FeatureCards() {
  return (
    <Cards listOfCards={listOfCards} />
  );
}
