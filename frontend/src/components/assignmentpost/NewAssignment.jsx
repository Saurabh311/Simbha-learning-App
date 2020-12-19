import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AssignmentPostApi from "../../api/AssignmentPostApi";
import AssignmentPostForm from "../assignmentpost/AssignmentPostForm";

//Component to render assignment post form and creates an assignment in the database

function NewAssignment() {
  const [assignment, setAssignment] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const createAssignment = async () => {
      try {
        if (assignment !== null) {
          AssignmentPostApi.createAssignment(assignment); // We need to check response success before redirecting.
          history.push("/assignmentPost/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    createAssignment();
  }, [history, assignment]);

  return (
    <div>
      <AssignmentPostForm setAssignment={setAssignment} />
    </div>
  );
}

export default NewAssignment;
