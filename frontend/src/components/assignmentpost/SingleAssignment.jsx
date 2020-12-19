import React, { useState, useEffect } from "react";
import Auth from "../../services/Auth";
import { useLocation } from "react-router-dom";
import ErrorScreen from "../tempscreens/ErrorScreen";
import UserApi from "../../api/UserApi";
import AssignmentSubmittedList from "../assignmentsubmission/AssignmentSubmittedList";



//Display Single assigment post and Assignments submitted back by students
function SingleAssignment() {
  const userMail = Auth.getUserMail();
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const passedAssignment = state === undefined ? null : state.assignment;
  const [assignment, setAssignment] = useState(passedAssignment.assignment);

  const url = assignment.fileUrl;
  const studentView = user.userType === "student";
  const teacherView = user.userType === "teacher";

  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  try {
    return (
      <>
        {teacherView && (
          <div class="row assignment-tab">
            <div class="col-md-12">
              <nav>
                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Assignment View
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Assignments Submitted Back By Students
                  </a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <h3>{assignment.assignmentTitle}</h3>
                  <p>{assignment.assignmentDescription}</p>
                  <p>Submission date : {assignment.submissionDate}</p>
                  <div class="widget-top-overflow text-white">
                    {url.match(".gif") ||
                    url.match(".jpg") ||
                    url.match(".png") ||
                    url.match(".jpeg") ? (
                      <img
                        src={assignment.fileUrl}
                        className="img-fluid"
                        alt="Responsive image"
                        class="assignment-view-img"
                      />
                    ) : (
                      <div class="embed-responsive embed-responsive-16by9 single-assignment-submit-ifram">
                        <iframe
                          title="assignment1"
                          class="embed-responsive-item"
                          src={assignment.fileUrl}
                          allowfullscreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <AssignmentSubmittedList
                    assignment={assignment}
                    user={user}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {studentView && (
          <AssignmentSubmittedList assignment={assignment} user={user} />
        )}
      </>
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}
export default SingleAssignment;
