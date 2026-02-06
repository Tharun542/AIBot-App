import React, { useState } from "react";
import { sampleQA } from "../Data/SampleData";
import EndConversationFeedback from "../Components/EndConvFeedback";
import MessageBubble from "../Components/MessageBubble";
import ChatInput from "../Components/ChatInput";

export default function Home(){
      const [message, setMessage] = useState([]);
      const [feedbackMsg, setFeedbackMsg] = useState(false);

      const AIResponse =(question)=>{
          const found = sampleQA.find(q => 
            q.question.toLowerCase() === question.toLowerCase()
          )
          if(found){
            return found.answer;
          }else{
            return "Sorry, Did not understand your query!";
          }
      }
    // user and ai message handle 
      const handleSendMessage=(text)=>{
        const userMsg = {
            id: Date.now(),
            role: "user",
            text
        };

        const aiMsg = {
            id: Date.now() + 1,
            role: "ai",
            text: AIResponse(text),
            feedback: null
        };
        // setmessage assign or store the prev value of message obj, current usermsg and aimsg in message state object.
        setMessage(prev => [...prev, userMsg, aiMsg]); 

      }

      const saveConversation=(rating, comment)=>{
        const save = {
            id: Date.now(),
            message,
            rating,
            comment
        };

        const history = JSON.parse(localStorage.getItem("prevConv")) || [];

        localStorage.setItem(
            "prevConv",
            JSON.stringify([save, ...history])
        );

        setMessage([]);
        setFeedbackMsg(false);
      }

    return(
        <div className="chat-page">
          <div className="chat-window">
                {message.map(msg => (
              <MessageBubble
                key={msg.id}
                message={msg}
                onFeedback={(value) => {
                  setMessage(prev =>
                    prev.map(m =>
                      m.id === msg.id ? { ...m, feedback: value } : m
                    )
                  );
                }}
              />
            ))}
          </div>

          <ChatInput onSend={handleSendMessage} />

          {message.length > 0 && (
            <button
              type="button"
              className="end-btn"
              onClick={() => setFeedbackMsg(true)}
            >
              Save Conversation
            </button>
          )}

          {feedbackMsg && (
            <EndConversationFeedback onSubmit={saveConversation} />
          )}        
        </div>
    )
}