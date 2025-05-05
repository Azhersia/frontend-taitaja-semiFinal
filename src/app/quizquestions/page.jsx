'use client'
import { useState } from "react";

const quizData = [
  {
    question: "quest1",
    options: ["opt1", "opt2", "opt3", "opt4"],
    answer: "opt1",
  },
  {
    question: "quest1",
    options: ["opt1", "opt2", "opt3", "opt4"],
    answer: "opt2",
  },
  {
    question: "quest1",
    options: ["opt1", "opt2", "opt3", "opt4"],
    answer: "opt3",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {quizData.length}</p>
        </div>
      ) : (
        <div className="question-section">
          <h2>{quizData[currentQuestion].question}</h2>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedAnswer === option ? "selected" : ""}`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="next-btn" onClick={handleNextQuestion} disabled={!selectedAnswer}>
            {currentQuestion === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
)};