import React from 'react';
import { Link } from 'react-router-dom';


//rednders all the assignments posted by teacher 

function AssignmentByTeacher(assignment) {
  
  return (
            <tbody className="assignement-tbl-tbody">
              <tr>
                <th scope="row">{assignment.assignment.id}</th>
                <td>{assignment.assignment.user.name}</td>
                <td><a href={assignment.assignment.fileUrl} target="_blank">{assignment.assignment.assignmentTitle} </a></td>
                <td>{assignment.assignment.grade}</td>
                <td>{assignment.assignment.subject}</td>
                <td>{assignment.assignment.submissionDate}</td>
                <td>
                    <Link className="btn-assignement-view" to={{ pathname: `/assignmentPost/${assignment.assignment.id}`, state: { assignment } }}>
                        View 
                    </Link>
                </td>
              </tr>
            </tbody>
  );
}

export default AssignmentByTeacher;
