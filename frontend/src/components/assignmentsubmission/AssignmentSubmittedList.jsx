import React, { useEffect, useState } from "react";
import AssignmentSubmissionApi from "../../api/AssignmentSubmissionApi";
import AssignmentSubmittedCard from "../assignmentsubmission/AssignmentSubmittedCard";

//Table title for submitted assignemnts
export default function AssignmentSubmittedList({ assignment, user }) {
  const [assignmentsSubmitted, setAssignmentsSubmitted] = useState([]);
  const studentView = user.userType === "student";
  const teacherView = user.userType === "teacher";

  function getAllSubmittedForThisAssignment() {
    AssignmentSubmissionApi.getAllSubmittedByAssignmentId(assignment.id).then(
      (res) => {
        setAssignmentsSubmitted(res.data);
      }
    );
  }

  useEffect(() => {
    getAllSubmittedForThisAssignment(assignment.id);
  }, []);

  console.log("assignmentsSubmitted", assignmentsSubmitted);
  const assignmentSubmittedList = assignmentsSubmitted.map((assignsubmit) => (
    <AssignmentSubmittedCard
      key={assignsubmit.id}
      assignmentSubmitted={assignsubmit}
    />
  ));

  const assignmentsSubmittedByUser = assignmentsSubmitted.filter(
    (p) => p.user.id === user.id
  );
  console.log("assignmentsSubmittedByUser", assignmentsSubmittedByUser);
  const assignementSubmittedByUser = assignmentsSubmittedByUser.map(
    (assignsubmit) => (
      <AssignmentSubmittedCard
        key={assignsubmit.id}
        assignmentSubmitted={assignsubmit}
      />
    )
  );

  return (
    <>
      {teacherView && (
        <div>
          {assignmentsSubmitted.length === 0 ? (
            "No submissions yet"
          ) : (
            <table class="table" cellspacing="0">
              <thead>
                <tr>
                  <th>Submitted By</th>
                  <th>Submitted on</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Comment by Teacher</th>
                  <th>Action</th>
                </tr>
              </thead>
              {assignmentSubmittedList}
            </table>
          )}
        </div>
      )}

      {studentView && (
        <div>
          {assignmentsSubmittedByUser === 0 ? (
            <div className="center-data">
              <p>No Submission Yet..</p>
            </div>
          ) : (
            <table class="table" cellspacing="0">
              <thead style={{backgroundColor: '#9fd8cb'}}>
                <tr>
                  <th>Submitted By</th>
                  <th>Submitted on</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Comment by Teacher</th>
                  <th>Action</th>
                </tr>
              </thead>
              {assignementSubmittedByUser}
            </table>
          )}
        </div>
      )}
    </>
  );
}
