import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import mathGif from "../../images/math.gif";
import socialGif from "../../images/history.gif";
import scienceGif from "../../images/science.gif";
import gkGif from "../../images/gk.gif";
import languageGif from "../../images/hello-talker.gif";
import artGif from "../../images/art.gif";

import AssignmentPostApi from "../../api/AssignmentPostApi";
import AssignmentBySubject from "../assignmentpost/AssignmentBySubject";

function AssignmentList() {
  const { state } = useLocation();
  const grade = state === undefined ? null : state.grade;
  const subject = state === undefined ? null : state.subject;
  console.log("grade from list:", grade);
  console.log("Subject from list:", subject);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await AssignmentPostApi.getAllAssignmentsByGradeAndSubject(
        grade,
        subject
      );
      setAssignments(response.data);
    };
    fetchPosts();
  }, []);

  const sortedAssignments = [].concat(assignments)
      .sort((a, b) => a.submissionDate > b.submissionDate ? 1 : -1);
    
  const assignmentList = sortedAssignments.map((assignment) => (
    <AssignmentBySubject key={assignment.id} assignment={assignment} />
  ));

  const subjectName = assignments.map((assignment) => assignment.subject);

  console.log("subjectName");

  return (
    <div>
      <h1>{subjectName[0]}</h1>
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

      {assignments.length === 0 ? (
        <div className="center-data">
          <p>No Assignments to show</p>
        </div>
      ) : (
        <>{assignmentList}</>
      )}
    </div>
  );
}

export default AssignmentList;
