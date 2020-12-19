import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ErrorScreen from "../tempscreens/ErrorScreen";

function SingleStudyMaterial() {
  const { state } = useLocation();
  const passedMaterial = state === undefined ? null : state.material;
  const [material, setMaterial] = useState(passedMaterial.material);

  const url = material.fileUrl;

  try {
    return (
      <div className="single-study-material">
        <p>
          <button
            class="btn single-study-material-tab"
            type="button"
            aria-controls="multiCollapseExample1 multiCollapseExample2"
          >
            <span className="review-page-user-details">
              {material.user.name}
            </span>
          </button>
        </p>
        <div class="row">
          <div class="col-md-8">
            <div className="card-body">
              <h4 style={{ color: "#1c7293" }}>{material.title}</h4>
              <span className="study-page-span">Subject :</span> &nbsp;{" "}
              {material.subject}
              <hr />
              <span className="study-page-span">Description:</span> &nbsp;{" "}
              {material.description}
              <hr />
            </div>

            <div class="widget-body">
              <a href={material.fileUrl} target="_blank" rel="noreferrer" >
                {material.fileUrl &&
                  (url.match(".jpg") ||
                  url.match(".png") ||
                  url.match(".jpeg") ||
                  url.match(".gif") ? (
                    <img
                      src={material.fileUrl}
                      class="img-fluid"
                      alt="Responsive image"
                    />
                  ) : (
                    <div class="embed-responsive embed-responsive-16by9 iframe-border">
                      <iframe
                        class="embed-responsive-item"
                        title="Attachment1"
                        src={material.fileUrl}
                        allowfullscreen
                      ></iframe>
                    </div>
                  ))}
              </a>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>

      
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}
export default SingleStudyMaterial;
