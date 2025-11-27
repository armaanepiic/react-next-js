import { useState } from "react";
import { sculptureList } from "../data/data.js";

export default function Sculpture() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const handleNextClick = () => {
    setIndex(index + 1);
  };
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <button onClick={handleShowMore}>{showMore ? "Hide" : "Show"}</button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
