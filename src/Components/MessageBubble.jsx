export default function MessageBubble({ message, onFeedback }) {
  return (
    <div className={`message ${message.role}`}>
      {message.role === "ai" && <span>Soul AI</span>}
      <p>{message.text}</p>

      {message.role === "ai" && (
        <div className="hover-icons">
          <button onClick={() => onFeedback("like")}>👍</button>
          <button onClick={() => onFeedback("dislike")}>👎</button>
        </div>
      )}
    </div>
  );
}
