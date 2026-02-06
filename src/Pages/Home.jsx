import { useEffect, useState } from "react";
import {sampleQA} from "../Data/SampleData"
import ChatInput from "../Components/ChatInput";
import MessageBubble from "../Components/MessageBubble";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  // Load persisted conversations (latest only)
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("pastConversations")
    );
    if (saved && saved.length > 0) {
      setMessages([]);
    }
  }, []);

  const getBotResponse = (question) => {
    const match = sampleQA.find(
      q => q.question.toLowerCase() === question.toLowerCase()
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
      text: getBotResponse(text),
      feedback: null
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
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
      {messages.map(msg => (
        <MessageBubble
          key={msg.id}
          message={msg}
          onFeedback={(value) => {
            setMessages(prev =>
              prev.map(m =>
                m.id === msg.id ? { ...m, feedback: value } : m
              )
            );
          }}
        />
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
