import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;