import { useState } from "react";
import "./quiz.css";
const questions = [
  {
    questionText: "Who is Prime Minister of India?",
    answerOptions: [
      { answerText: "Vijay Rupani", isCorrect: false },
      { answerText: "Manmohan singh", isCorrect: false },
      { answerText: "Narendra Modi", isCorrect: true },
      { answerText: "Deep Patel", isCorrect: false }
    ]
  },
  {
    questionText: "Who is CEO of Tata?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Ratan Tata", isCorrect: true },
      { answerText: "Mukesh Ambani", isCorrect: false },
      { answerText: "Gautam Adani", isCorrect: false }
    ]
  },
  {
    questionText: "who is richest person in the world?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Mukesh Ambani", isCorrect: false },
      { answerText: "Warren Buffett", isCorrect: false }
    ]
  },
  {
    questionText: "how many countries in the world?",
    answerOptions: [
      { answerText: "120", isCorrect: false },
      { answerText: "183", isCorrect: false },
      { answerText: "170", isCorrect: false },
      { answerText: "195", isCorrect: true }
    ]
  }
];
export default function Questionitem() {
  const [currentQ, setCurrentQ] = useState(0);
  const questionItem = questions[currentQ];
  const onPressNext = () => {
    setCurrentQ(
      currentQ < questions.length ? currentQ + 1 : questions.length - 1
    );
  };
  const onPressPrev = () => {
    setCurrentQ(currentQ === 0 ? 0 : currentQ - 1);
  };
  return (
    <div className="Quizroot">
      <div className="quizheader">
        <div> quiz</div>
        <div>Total Question: {questions.length}</div>
      </div>
      <h3>
        {currentQ + 1}.{questionItem.questionText}
      </h3>
      {questionItem.answerOptions.map((item, index) => (
        <div className="optionItem">
          <input type="radio" />
          <p>{item.answerText}</p>
        </div>
      ))}
      <div className="btnContainer">
        <button disabled={currentQ === 0} className="btn" onClick={onPressPrev}>
          Prev
        </button>
        <button
          disabled={currentQ === questions.length - 1}
          className="btn"
          onClick={onPressNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

