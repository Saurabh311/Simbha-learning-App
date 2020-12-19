import React, { useEffect, useState } from "react";
import AssignmentPostApi from "../../api/AssignmentPostApi";
import AssignmentByTeacher from "../assignmentpost/AssignmentByTeacher";

// Main Assignment List view from teacher login
// Renders Table Header and calls AssignmentByTeacher component to display to data

function AssignmentPostPage() {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await AssignmentPostApi.getAllAssignmentsPosts();
      setAssignments(response.data);
    };
    fetchPosts();
  }, []);
  console.log(assignments);

  const assignmentList = assignments.map((assignment) => (
    <AssignmentByTeacher key={assignment.id} assignment={assignment} />
  ));

  return assignments.length === 0 ? (
    <div className='center-data'>
      <p>No Assignments to show</p>
    </div>
  ) : (
    <div className="col-lg-10 assignement-list-table">
      <table class="table">
        <thead class="teacher-assignement-tbl-row">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Psted By</th>
            <th scope="col">Assignment</th>
            <th scope="col">Grade</th>
            <th scope="col">Subject</th>
            <th scope="col">Submission Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {assignmentList}
      </table>
    </div>
  );
}

export default AssignmentPostPage;
