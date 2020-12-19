import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";

//Individual assignments from both the logins
function AssignmentCard(assignment) {
  const userMail = Auth.getUserMail();
  const [user, setUser] = useState({});
  const studentView = user.userType === "student";
  const teacherView = user.userType === "teacher";
  const url = assignment.assignment.fileUrl;

  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  return (
    <>
      <p>
        <button
          class="btn question-tab"
          type="button"
          data-toggle="collapse"
          data-target={".multi-collapse" + assignment.assignment.id}
          aria-expanded="false"
          aria-controls={"#multiCollapseExample" + assignment.assignment.id}
        >
          {assignment.assignment.assignmentTitle}
        </button>
      </p>
      <div class="row">
        <div class="col">
          <div
            class="collapse multi-collapse"
            className={"collapse multi-collapse" + assignment.assignment.id}
            id={"#multiCollapseExample" + assignment.assignment.id}
          >
            <p>{assignment.assignment.assignmentDescription}</p>
            <h4>Submission Date: {assignment.assignment.submissionDate}</h4>
            {url && (
              <h4>
                <a href={url} target="_blank" rel="noreferrer">
                  Click here to open the attachment{" "}
                </a>{" "}
              </h4>
            )}

            <div class="card card-body">
              {url &&
                (url.match(".gif") ||
                url.match(".jpg") ||
                url.match(".png") ||
                url.match(".jpeg") ? (
                  <img
                    src={url}
                    class="img-fluid assignment-view-img"
                    alt="Responsive image"
                  />
                ) : (
                  <div class="embed-responsive embed-responsive-16by9 assignment-view-frm">
                    <iframe
                      class="embed-responsive-item"
                      src={url}
                      title="assignment1"
                      allowfullscreen
                    ></iframe>
                  </div>
                ))}
              <br />

              <div className="row">
                <div className="col-md-5">
                  {teacherView && (
                    <Link
                      className="btn-student-assignment-list"
                      to={{
                        pathname: `/assignmentPost/${assignment.assignment.id}`,
                        state: { assignment },
                      }}
                    >
                      <i class="fas fa-share-square"></i> Submitted by Students
                    </Link>
                  )}
                  {studentView && (
                    <Link
                      className="btn-submit-assignment"
                      to={{
                        pathname: "/assignmentSubmission/new",
                        state: { assignment, user },
                      }}
                    >
                      <i class="fas fa-share-square"></i> Submit Your Answer
                    </Link>
                  )}
                </div>
                <div className="col-md-5">
                  {studentView && (
                    <Link
                      className="btn-student-assignment-list"
                      to={{
                        pathname: `/assignmentPost/${assignment.assignment.id}`,
                        state: { assignment },
                      }}
                    >
                      <i class="fas fa-share-square"></i> Submitted by you
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2"></div>
        </div>
      </div>
    </>
  );
}

export default AssignmentCard;
