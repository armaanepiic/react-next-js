import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  console.log("Rendering...", count);

  function handleClick () {
    setCount(count + 5);
    setTimeout(()=>{
      alert(count);
    },3000)
  }

  return (
    <div>
      <button onClick={handleClick}>Clicked: {count}</button>
      <div>
        <p>{text}</p>
        <button onClick={() => setText("Hi there!")}>Change</button>
      </div>
    </div>
  );
}
