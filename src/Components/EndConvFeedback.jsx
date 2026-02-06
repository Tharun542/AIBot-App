import { useState } from "react";

export default function EndConversationFeedback({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="modal">
      <h3>Rate Conversation</h3>

      <div className="stars">
        {[1,2,3,4,5].map(n => (
          <span
            key={n}
            onClick={() => setRating(n)}
            className={n <= rating ? "active" : ""}
          >
            ⭐
          </span>
        ))}
      </div>

      <textarea
        placeholder="Your feedback"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={() => onSubmit(rating, comment)}>
        Save
      </button>
    </div>
  );
}
