import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Score.css";

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="score-container">
      <h1 className="score-title">Your Score</h1>
      <p className="score-value">
        {score} out of {total}
      </p>
      <button
        className="retry-button"
        onClick={() => navigate("/")}
      >
        Try Again
      </button>
    </div>
  );
};

export default Score;