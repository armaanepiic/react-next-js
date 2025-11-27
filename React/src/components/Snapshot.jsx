import { useState } from "react";
export default function Snapshot() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi");
  if (isSent) {
    return <h1>Message is on the way!</h1>;
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          setMessage(message);
        }}
      >
        <textarea
          name="message"
          id="message"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
