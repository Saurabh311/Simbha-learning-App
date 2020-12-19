import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";

function StudyMaterialBySubject(material) {
  
  const url = material.material.fileUrl;

  return (
        
    <>
    <p>
      <button
        class="btn question-tab"
        type="button"
        data-toggle="collapse"
        data-target={".multi-collapse" + material.material.id}
        aria-expanded="false"
        aria-controls={"#multiCollapseExample" + material.material.id}
      >
        {material.material.title}
      </button>
    </p>
    <div class="row">
      <div class="col">
        <div
          class="collapse multi-collapse"
          className={"collapse multi-collapse" + material.material.id}
          id={"#multiCollapseExample" + material.material.id}
        >
          <p>{material.material.description}</p>
          <div class="card card-body">
            {url.match(".gif") ||
            url.match(".jpg") ||
            url.match(".png") ||
            url.match(".jpeg") ? (
              <img
                src={url}
                class="img-fluid assignment-view-img"
                alt="Responsive image"
              />
            ) : (
              <div class="embed-responsive embed-responsive-16by9 assignment-view-frm">
                <iframe
                  class="embed-responsive-item"
                  src={url}
                  allowfullscreen
                ></iframe>
              </div>
            )}
            <br />
            
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2"></div>
      </div>
    </div>
  </>
  );
}

export default StudyMaterialBySubject;
