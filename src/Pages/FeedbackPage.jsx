import { useState } from "react";

export default function FeedbackDashboard() {
  const [filter, setFilter] = useState(0);
  const data = JSON.parse(localStorage.getItem("conversations")) || [];

  const filtered = data.filter(c => c.rating >= filter);

  return (
    <div className="feedback-page">
      <h2>Feedback Dashboard</h2>

      <select onChange={(e) => setFilter(Number(e.target.value))}>
        <option value="0">All</option>
        <option value="3">3 ⭐ & above</option>
        <option value="4">4 ⭐ & above</option>
      </select>

      {filtered.map(c => (
        <div key={c.id} className="feedback-card">
          <p>⭐ {c.rating}</p>
          <p>{c.comment}</p>
        </div>
      ))}
    </div>
  );
}
