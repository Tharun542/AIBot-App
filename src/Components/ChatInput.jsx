import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend(input);
        setInput("");
      }}
    >
      <input
        placeholder="Message Bot AI..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Ask</button>
    </form>
  );
}
