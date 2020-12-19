import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorScreen from "../tempscreens/ErrorScreen";
import UserApi from "../../api/UserApi";
import Auth from "../../services/Auth";
import CommentPage from "../newComment/CommentsPage";

//display single announcement
function SingleAnnouncement() {
  const userEmail = Auth.getUserMail(); //get current loggedin user email id
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const passedPost = state === undefined ? null : state.announce;
  const [announce, setAnnounce] = useState(passedPost);
  const url = announce.imageUrl;
  const User_Email_ID = announce.user.email;
  const User_Name = announce.user.name;

  //function to get all data of current user
  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userEmail).then((res) => {
        setUser(res.data);
      });
    }
    userEmail !== null && getUserByMail();
  }, [userEmail]);

  try {
    return (
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-7 announcement-post">
          <div class="single-announcement-card">
            <div class="d-flex justify-content-between p-2 px-3">
              <div class="d-flex flex-row align-items-center">
                <img
                  src={announce.user.imgUrl}
                  width="50"
                  class="rounded-circle"
                />
                <div class="d-flex flex-column ml-2">
                  <span class="font-weight-bold">{User_Email_ID}</span>
                  <small class="text-primary">{User_Name}</small>{" "}
                </div>
              </div>
            </div>

            {announce.imageUrl &&
              (url.match(".gif") ||
              url.match(".jpg") ||
              url.match(".png") ||
              url.match(".jpeg") ? (
                <img
                  src={announce.imageUrl}
                  class="img-fluid"
                  alt="Responsive image"
                />
              ) : (
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    title="SingleAnnouncement"
                    src={announce.imageUrl}
                    allowfullscreen
                  ></iframe>
                </div>
              ))}

            <div class="p-2">
              <h3 className="product-title">{announce.title}</h3>
              <p class="text-justify">{announce.body}</p>
              <hr />
              <div class="comments">
                <CommentPage announce={announce} user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}
export default SingleAnnouncement;
