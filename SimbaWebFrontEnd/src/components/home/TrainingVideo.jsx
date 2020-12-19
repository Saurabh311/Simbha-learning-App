import React from "react";
import SimbaVideo from "../../video/SimbaVideo.mp4";

function TrainingVideo() {
  return (
    <div class="training-video-page">
      <div className="row">
        <div className="col-md-8 video-fram">
          <h2 class="preview-title" contenteditable="true">
            Walk Through Video
          </h2>
          <br/>
          <video controls>
            <source src={SimbaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default TrainingVideo;
