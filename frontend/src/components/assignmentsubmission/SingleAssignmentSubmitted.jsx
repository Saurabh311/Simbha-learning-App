import React, { useState, useEffect } from "react";
import {useHistory, useLocation, Link } from "react-router-dom";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AssignmentSubmissionApi from "../../api/AssignmentSubmissionApi";

//Individual card for assignments submitted back by students
export default function SingleAssignmentSubmitted() {
  const userMail = Auth.getUserMail();
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const history=useHistory();
  const passedAssignment =
    state === undefined ? null : state.assignmentSubmitted;
  const [assignment, setAssignment] = useState(
    passedAssignment.assignmentSubmitted
  );

  const studentView = user.userType === "student";
  const teacherView = user.userType === "teacher";
  const url = assignment.fileURL;

  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  const [status, setStatus] = useState(assignment.status);
  const [newStatus, setNewStatus] = useState(status);
  const [comments, setComments] = useState(assignment.comments);

  const handleChange = (e) => {
    setComments(e.target.value);
  };

  const submitReview = (e) => {
    e.preventDefault();
    if (comments === "") {
      alert('Enter some comments');
      return;
    }
    const updateAssignmentSubmission = {
      id: assignment.id,
      assignmentTitle: assignment.assignmentTitle,
      assignmentDescription: assignment.assignmentDescription,
      fileURL: assignment.fileURL,
      grade: assignment.grade,
      subject: assignment.subject,
      dateSubmitted: assignment.dateSubmitted,
      status: newStatus,
      comments: comments,
      reviewedBy: user.name,
      assignmentPost: assignment.assignmentPost,
      user: assignment.user,
    };
    
    AssignmentSubmissionApi.updateAssignment(updateAssignmentSubmission).then(
      () => {
        console.log("assignment");
        setShow(false);
        history.goBack();
      }
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="single-assignment-submitted-frm">
      <p>
        <button
          class="btn single-assignment-submitted-tab"
          type="button"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          <div className="row">
            <div className="col-md-8">
              <span className="review-page-user-details">
                {assignment.user.name}
              </span>
            </div>
            <div className="col-md-4">
              {(teacherView && status!=="Accepted") && (
                <div>
                  <div>
                    <button
                      type="button"
                      className="btn-review"
                      data-toggle="modal"
                      data-target={`#ReviewByTeacher${assignment.id}`}
                      onClick={handleShow}
                    >
                      <i class="far fa-file-alt"></i> &nbsp;Review
                    </button>
                  </div>
                  <Modal
                    className="Model-top-position"
                    show={show}
                    onHide={handleClose}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <span
                          style={{
                            color: "#B52B65",
                            fontWeight: "800",
                            fontSize: "16px",
                          }}
                        >
                          {assignment.user.name}
                        </span>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        <span style={{ fontWeight: "800" }}>Title:</span> &nbsp;{" "}
                        {assignment.assignmentTitle}
                      </p>

                      <div className="group radio-btn review-frm-radio-btn">
                        <label for="status"> Status: </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="radio"
                          id="accepted"
                          name="status"
                          value="Accepted"
                          onChange={(e) => setNewStatus(e.target.value)}
                        />
                        &nbsp;&nbsp;
                        <label for="accepted">Accept </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="radio"
                          id="RevertedBack"
                          name="status"
                          value="Reverted Back"
                          onChange={(e) => setNewStatus(e.target.value)}
                        />
                        &nbsp;&nbsp;
                        <label for="RevertedBack">Revert Back </label>
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Comments :
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        className="btn-review-submit"
                        onClick={submitReview}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              )}
            </div>
          </div>
        </button>
      </p>
      <div class="row">
        <div class="col-md-8">
          <div className="card-body">
            <h4 style={{ color: "#8f250c" }}>{assignment.assignmentTitle}</h4>
            <span className="review-page-span">Submitted on :</span> &nbsp;{" "}
            {assignment.dateSubmitted}
            <hr />
            <span className="review-page-span">Answer:</span> &nbsp;{" "}
            {assignment.assignmentDescription}
            <hr />
            <span className="review-page-span">Status :</span> &nbsp;{" "}
            {assignment.status}
            <hr />
            <span className="review-page-span">
              Comment by Teacher:
            </span> &nbsp; {assignment.comments}
            <hr />
          </div>

          <div class="widget-body">
            <div class="text-white">
              {url &&
                (url.match(".gif") ||
                url.match(".jpg") ||
                url.match(".png") ||
                url.match(".jpeg") ? (
                  <img
                    src={assignment.fileURL}
                    class="img-fluid"
                    alt="Responsive image"
                    className="assignment-view-img"
                  />
                ) : (
                  <div class="embed-responsive embed-responsive-16by9 single-assignment-submit-ifram">
                    <iframe
                      class="embed-responsive-item"
                      src={assignment.fileURL}
                      allowfullscreen
                    ></iframe>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
