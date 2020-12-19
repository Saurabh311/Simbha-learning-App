import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import startAudio from "../../audio/MorningBeats.mp3";

function QuizDisplayPage({onLogout}) {
  const { state } = useLocation();
  const topic = state === undefined ? null : state.topic;
  const quizFile = require("./quiz.json");
  const questions = quizFile.filter((ques) => ques.subject.includes(topic));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      <audio className="audio-display" autoplay="autoplay" loop controls>
          <source src={startAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      {showScore ? (
        <div className="score-page">
          <div className="score-section">
            You Scored {score} Out Of {questions.length}
            <br/><br/><br/><br/>
            <a style={{marginLeft:'40%'}} className="btn-close" href="https://simbalearningapp-edb1a.web.app">
              close
            </a>
          </div> 
            
        </div>
      ) : (
        <div className={"app " + topic}>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="center-data ques-div">
                <div className="question-section">
                  <div className="question-count">
                    <span>Question &nbsp;&nbsp; {currentQuestion + 1}</span> /
                    {questions.length}
                  </div>{" "}
                  <hr />
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <br />
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        className="btn-option"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
    </div>
  );
}

export default QuizDisplayPage;
