import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Sub_Maths from '../../images/Sub_Maths.png';
import Sub_History from '../../images/Sub_History.png';
import Sub_Science from '../../images/Sub_Science.png';
import Sub_Geo from '../../images/Sub_Geo.png';
import Sub_Language from '../../images/Sub_Language.png';
import Sub_Art from '../../images/Sub_Art.png';


//Subject page
export default function GradeAssignmentPage() {
  const { state } = useLocation();
  const grade = state === undefined ? null : state.grade;

  const [subject, setSubject] = useState("Math");

  return (
    <div class="row clearfix">
      <div class="col-lg-3">
        <div class="subject_item">
          <div class="body">
            <div class="cp_img">
              <h2 class="top-left">Math</h2>
              <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'Math'} }} >
                <img src={Sub_Maths} alt="subject" className="img-fluid subject-img"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="subject_item">
          <div class="body">
            <div class="cp_img">
              <h2 class="top-left">Social Study </h2>
              <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'Social Study'} }} >
              <img src={Sub_History} alt="subject" className="img-fluid subject-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="subject_item">
          <div class="body">
            <div class="cp_img">
              <h2 class="top-left">Science </h2>
              <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'Science'} }} >
              <img src={Sub_Science} alt="subject" className="img-fluid subject-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3"></div>

      <div class="col-lg-3">
        <div class="subject_item">
          <div class="body">
            <div class="cp_img">
              <h2 class="top-left">General Knowledge</h2>
              <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'General Knowledge'} }} >
              <img src={Sub_Geo} alt="subject" class="img-fluid subject-img"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="subject_item">
          <div class="body">
            <div class="cp_img">
              <h2 class="top-left">Language</h2>
              <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'Language'} }} >
              <img src={Sub_Language} alt="subject" class="img-fluid subject-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="subject_item">
          <div class="body">
            <div class="cp_img">
              <h2 class="top-left">Art</h2>
              <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'Art'} }} >
              <img src={Sub_Art} alt="subject" class="img-fluid subject-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
