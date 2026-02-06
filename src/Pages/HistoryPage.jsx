export default function HistoryPage() {
  const conversations =
    JSON.parse(localStorage.getItem("pastConversations")) || [];

  return (
    <div>
      <h2>Past Conversations</h2>

      {conversations.map(conv => (
        <div key={conv.id}>
          {conv.messages.map((msg, index) => (
            <p key={index}>
              <strong>{msg.role}:</strong> {msg.text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
