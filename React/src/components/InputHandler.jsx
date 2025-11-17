import { useState } from "react";

export default function InputHandler() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
      />
    </div>
  );
}
