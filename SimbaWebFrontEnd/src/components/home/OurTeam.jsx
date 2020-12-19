import React from "react";
import snehal from "../../images/snehal.jpg";
import kalpna from "../../images/kalpna.jpeg";
import samina from "../../images/samina.png";
import omer from "../../images/omer.png";
import saurabh from "../../images/saurabh.JPG";
import megha from "../../images/megha.JPG";

function OurTeam() {
  return (
    <div class="py-5 text-center text-info background-info">
      <div class="row">
        <div class="mx-auto col-md-12">
          <h2 class="mb-3 our-team-title" contenteditable="true">
            Meet our team
          </h2>
        </div>
      </div>
      <div class="row shadow-sm p-3 mb-5 rounded">
        <div class="col-lg-4 col-md-6 p-4">
          {" "}
          <img
            class="img-fluid profile-img d-block mb-3 mx-auto rounded-circle"
            alt="prof-img"
            width="200"
            src={kalpna}
          />
          <h5>
            {" "}
            <b style={{color: '#E56B6F'}}>Kalpana Sivalingam</b>{" "}
          </h5>
        </div>
        <div class="col-lg-4 col-md-6 p-4">
          {" "}
          <img
            class="img-fluid profile-img d-block mb-3 mx-auto rounded-circle"
            src={snehal}
            alt="prof-img"
            width="200"
          />
          <h5>
            {" "}
            <b style={{color: '#7cb518'}}>Snehal Kadam</b>{" "}
          </h5>
        </div>
        <div class="col-lg-4 p-4">
          {" "}
          <img
            class="img-fluid profile-img  d-block mb-3 mx-auto rounded-circle"
            src={saurabh}
            width="200"
            alt="prof-img"
          />
          <h5>
            {" "}
            <b style={{color: '#fbb02d'}}>Saurabh Chauhan</b>{" "}
          </h5>
        </div>

        <div class="col-lg-4 col-md-6 p-4">
          {" "}
          <img
            class="img-fluid profile-img  d-block mb-3 mx-auto rounded-circle"
            alt="prof-img"
            width="200"
            src={samina}
          />
          <h5>
            {" "}
            <b style={{color: '#826AED'}}>Haleemath Sameena</b>{" "}
          </h5>
        </div>
        <div class="col-lg-4 col-md-6 p-4">
          {" "}
          <img
            class="img-fluid profile-img d-block mb-3 mx-auto rounded-circle"
            src={omer}
            alt="prof-img"
            width="200"
          />
          <h5>
            {" "}
            <b style={{color: '#08bdbd'}}>Omer Sozcu</b>{" "}
          </h5>
        </div>
        <div class="col-lg-4 p-4">
          {" "}
          <img
            class="img-fluid profile-img  d-block mb-3 mx-auto rounded-circle"
            src={megha}
            width="200"
            alt="prof-img"
          />
          <h5>
            {" "}
            <b style={{color: '#ff6700'}}>Megha Visveshwara</b>{" "}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
