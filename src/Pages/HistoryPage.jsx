export default function HistoryPage() {
  const history = JSON.parse(localStorage.getItem("conversations")) || [];

  return (
    <div className="history-page">
      <h2>Past Conversations</h2>

      {history.map(conv => (
        <div key={conv.id} className="history-card">
          <p>Rating: {conv.rating} ⭐</p>
          <p>{conv.comment}</p>

          {conv.messages.map((m, i) => (
            <p key={i}>
              <strong>{m.role}:</strong> {m.text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
