import React from "react";
import { Link } from "react-router-dom";

//List of assignments submitted back by students
export default function AssignmentSubmittedCard(assignmentSubmitted) {
  
  return (
    <tbody>
      <tr>
        <td>{assignmentSubmitted.assignmentSubmitted.user.name}</td>
        <td>{assignmentSubmitted.assignmentSubmitted.dateSubmitted}</td>
        <td>{assignmentSubmitted.assignmentSubmitted.assignmentDescription}</td>
        <td>{assignmentSubmitted.assignmentSubmitted.status}</td>
        <td>{assignmentSubmitted.assignmentSubmitted.comments}</td>
        <td>
          <Link className="btn-assignement-view"
            to={{
              pathname: `/assignmentSubmission/${assignmentSubmitted.assignmentSubmitted.id}`,
              state: { assignmentSubmitted },
            }}>
            View
          </Link>
        </td>
      </tr>
    </tbody>
  );
}
