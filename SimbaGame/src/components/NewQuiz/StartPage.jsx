import React from "react";
import { Link } from "react-router-dom";
//import ReactAudioPlayer from "react-audio-player";

import playBtn from "../../images/start-play.gif";
import startAudio from "../../audio/DreamLand.mp3";

function StartPage() {
  return (
    <div id="Start_quiz" htmlFor="Start_quiz" className="start-page">
      <div className="play-div">
        <Link to="/topic">
          <img className="play-img" src={playBtn} alt="" srcset="" />
        </Link>
        <audio className="audio-display" autoplay="autoplay" loop controls>
          <source src={startAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default StartPage;
