import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AssignmentSubmissionApi from "../../api/AssignmentSubmissionApi";
import FileUploader from "../announcementNew/FileUploader";
import { format } from "date-fns";

//Form to submit back assignments for student login
export default function AssignmentSubmissionForm() {
  const { state } = useLocation();
  const history = useHistory();
  const currentUser = state === undefined ? null : state.user;
  const [user, setUser] = useState(currentUser);
  const passedAssignment = state === undefined ? null : state.assignment;
  const [assignment, setAssignment] = useState(passedAssignment);
  const [assignmentTitle, setAssignmentTitle] = useState(
    assignment.assignment.assignmentTitle
  );
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [grade, setGrade] = useState(assignment.assignment.grade);
  const [subject, setSubject] = useState(assignment.assignment.subject);


  function submitAssignment(e) {
    e.preventDefault();
    if (assignmentDescription === "" && fileUrl === "") {
        alert("Can't submit empty assignment")
        return;
    }
    const newAssignment = {
      assignmentTitle: assignmentTitle,
      assignmentDescription: assignmentDescription,
      fileURL: fileUrl,
      grade: grade,
      subject: subject,
      dateSubmitted: format(new Date(), "dd-MMM-yyyy"),
      status: "Waiting for Teacher's Review",
      comments: "No comments Yet",
      assignmentPost: assignment.assignment,
      user: user,
    };
    AssignmentSubmissionApi.createAssignment(newAssignment);
    history.goBack();
  }
  
  return (
    <div className="assignement-student-frm">
      <h2 style={{ color: "#B52B65" }}>Submit Your Answer</h2>
      <p style={{ color: "#B52B65", fontSize: '16px' }}>
        {assignment.assignment.assignmentTitle}
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <FileUploader setFileUrl={setFileUrl} />
          <br />

          <form id="assignment-form" style={{ width: "100%" }}>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                type="text"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                
                placeholder="Enter your Answer here...."
                onChange={(e) => setAssignmentDescription(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-submit-assignment"
              onClick={submitAssignment}
            >
              <i class="fas fa-share-square"></i> Submit Your Answer
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
}
