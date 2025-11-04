// import default import, { named import as alias, name import } from "./components/Gallery";
import Gallery, { Card as PriceCard, Profile } from "./components/Gallery";

function App() {
  return (
    <div>
      <Gallery />
      <Profile />
      <PriceCard />
    </div>
  );
}

export default App;
