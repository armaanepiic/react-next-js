import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  console.log("Rendering...", count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked: {count}
      </button>
      <div>
      <p>{text}</p>
      <button onClick={() => setText("Hi there!")}>
        Change
      </button>
    </div>
    </div>
  );
}
