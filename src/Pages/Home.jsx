import { useState } from "react";
import { sampleQA } from "../Data/SampleData";
import ChatInput from "../Components/ChatInput";
import MessageBubble from "../Components/MessageBubble";

const normalize = (text) =>
  text.toLowerCase().replace(/[?.,!]/g, "").trim();

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  const getBotResponse = (question) => {
    const normalizedQuestion = normalize(question);

    const match = sampleQA.find((qa) =>
      normalizedQuestion.includes(normalize(qa.question))
    );

    return match
      ? match.answer
      : "Sorry, Did not understand your query!";
  };

  const handleSendMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      role: "user",
      text
    };

    const aiMessage = {
      id: Date.now() + 1,
      role: "ai",
      text: getBotResponse(text)
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
  };

  const saveConversation = () => {
    const previous =
      JSON.parse(localStorage.getItem("pastConversations")) || [];

    const conversation = {
      id: Date.now(),
      messages
    };

    localStorage.setItem(
      "pastConversations",
      JSON.stringify([conversation, ...previous])
    );

    setMessages([]);
  };

  return (
    <div>
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      <ChatInput onSend={handleSendMessage} />

      {messages.length > 0 && (
        <button type="button" onClick={saveConversation}>
          Save
        </button>
      )}
    </div>
  );
}
