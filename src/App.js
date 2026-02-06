import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChatPage from "./Pages/Home";
import HistoryPage from "./Pages/HistoryPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <span>Soul AI</span>
        <nav>
          <Link to="/">Chat</Link>
          <Link to="/history">Past Conversations</Link>
          <Link to="/">New Chat</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
