import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { questions } from "../data/questions";
import "./Quiz.css";


const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (selectedOptionId) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOptionId === currentQuestion.answerId;

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      navigate("/score", {
        state: {
          score: score + (isCorrect ? 1 : 0),
          total: questions.length
        }
      });
    }
  };

  return (
    <div className="quiz-container">
      <QuestionCard
        question={questions[currentIndex].question}
        options={questions[currentIndex].options}
        onSelectOption={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
