import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import HistoryPage from "./Pages/HistoryPage";
import FeedbackDashboard from "./Pages/FeedbackPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="top-bar">
        <span className="logo">Soul AI</span>
        <div>
          <Link to="/">Chat</Link>
          <Link to="/history">Past Conversations</Link>
          <Link to="/feedback">Feedback</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/feedback" element={<FeedbackDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
