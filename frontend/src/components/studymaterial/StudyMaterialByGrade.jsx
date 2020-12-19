import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import mathGif from "../../images/math.gif";
import socialGif from "../../images/history.gif";
import scienceGif from "../../images/science.gif";
import gkGif from "../../images/gk.gif";
import languageGif from "../../images/hello-talker.gif";
import artGif from "../../images/art.gif";

import StudyMaterialApi from "../../api/StudyMaterialApi";
import StudyMaterialCard from "../studymaterial/StudyMaterialCard";


function StudyMaterialByGrade() {
  const { state } = useLocation();
  const grade = state === undefined ? null : state.grade;
  const subject = state === undefined ? null : state.subject;
  console.log("grade from list:", grade);
  console.log("Subject from list:", subject);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await StudyMaterialApi.getAllStudyMaterialByGradeAndSubject(
        grade,
        subject
      );
      setMaterials(response.data);
    };
    fetchPosts();
  }, []);

  const materialsList = materials.map((material) => (
    
    <StudyMaterialCard key={material.id} material={material} />
  ));

  const subjectName = materials.map((material) => material.subject);

  console.log("subjectName");

  return (
    <div>
      <span className="center-subject-name ">{subjectName[0]}</span> <br/> <br/>
      {subjectName[0] === "Math" ? (
        <img className="subject-view-img" src={mathGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "Social Study" ? (
        <img className="subject-view-img" src={socialGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "Science" ? (
        <img className="subject-view-img" src={scienceGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "General Knowledge" ? (
        <img className="subject-view-img" src={gkGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "Language" ? (
        <img className="subject-view-img" src={languageGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "Art" ? (
        <img className="subject-view-img" src={artGif} alt="" srcset="" />
      ) : null}

      {materials.length === 0 ? (
        <div className="center-data">
          <p>No Study Material To Show..</p>
        </div>
      ) : (
        <div className="col-lg-10 student-assignement-list-table">
          <table class="table">
            <thead class="student-assignement-tbl-row">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Posted By</th>
                <th scope="col">Study Material Title</th>
                <th scope="col">Grade</th>
                <th scope="col">Subject</th>
                <th scope="col">Posted Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {materialsList}
          </table>
        </div>
      )}
      
    </div>
  );
}

export default StudyMaterialByGrade;
