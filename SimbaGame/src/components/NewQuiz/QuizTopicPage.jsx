import React, {useState} from "react";
import { Link } from "react-router-dom";
import startAudio from "../../audio/MorningBeats.mp3";

function QuizTopicPage() {
    const [topic, setTopic] = useState("GeneralKnowledge");
  return (
    <div className="quiz-topic-page">
      <div className="row">
        <div className="col-md-3">
        <audio className="audio-display" autoplay="autoplay" loop controls>
          <source src={startAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        </div>
        <div className="col-md-6">
          <div className="row topic-frm">
            <div className="col-md-4">
              <Link
                className="btn-topic"
                to={{
                  pathname: `/quiz/${topic}`,
                  state: { topic: 'GeneralKnowledge' },
                }}
              >
                General Knowledge
              </Link>
            </div>
            <div className="col-md-4">
            <Link
                className="btn-topic"
                to={{
                  pathname: `/quiz/${topic}`,
                  state: { topic: 'logical' },
                }}
              >
                Logical
              </Link>
            </div>
            <div className="col-md-4">
            <Link
                className="btn-topic"
                to={{
                  pathname: `/quiz/${topic}`,
                  state: { topic: 'mathematics' },
                }}
              >
                Mathematics
              </Link>
            </div>
            <div className="col-md-4">
            <Link
                className="btn-topic"
                to={{
                  pathname: `/quiz/${topic}`,
                  state: { topic: 'science' },
                }}
              >
                Science
              </Link>
            </div>
            <div className="col-md-4">
            <Link
                className="btn-topic"
                to={{
                  pathname: `/quiz/${topic}`,
                  state: { topic: 'literature' },
                }}
              >
                Literature
              </Link>
            </div>
            <div className="col-md-4">
            <Link
                className="btn-topic"
                to={{
                  pathname: `/quiz/${topic}`,
                  state: { topic: 'sport' },
                }}
              >
                Sport
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default QuizTopicPage;
