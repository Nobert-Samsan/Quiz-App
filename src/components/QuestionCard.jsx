import React from "react";
import "./QuestionCard.css";


const QuestionCard = ({ question, options, onSelectOption }) => {
  return (
    <div className="question-card">
      <h2 className="question">{question}</h2>
      <div className="options">
        {options.map((option) => (
          <button
            key={option.id}
            className="option-button"
            onClick={() => onSelectOption(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
