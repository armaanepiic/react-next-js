import {useState} from 'react';

export default function Clock({ time }) {
    const [text, setText] = useState("");
  return (
    <>
      <h1>{time}</h1>
      <input 
      value={text}
      onChange={(e) => setText(e.target.value)}/>
    </>
  );
}