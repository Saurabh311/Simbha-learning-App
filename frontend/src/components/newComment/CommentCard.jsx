import React, { useState } from "react";
import CommentUpdateForm from "./CommentUpdateForm";
import UserImg from "../../images/user_empty.png";

//display comment for announcement
function CommentCard({
  userComment,
  onUpdateClick,
  onDeleteClick,
  userData,
  user,
}) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  return isUpdating ? (
    <CommentUpdateForm
      initialComment={userComment}
      onUpdateClick={(updComment) => {
        setIsUpdating(false);
        onUpdateClick(updComment);
      }}
    />
  ) : (
    <div id="comment" className="media-block">
      <a className="media-left" href="#">
        {userComment.user.imgUrl === null || userComment.user.imgUrl === "" ? (
          <img
            className="img-circle img-sm"
            src={UserImg}
            alt="profile"
            srcset=""
          />
        ) : (
          <img
            className="img-circle img-sm"
            src={userComment.user.imgUrl}
            alt="profile"
            srcset=""
          />
        )}
      </a>
      <div className="media-body comment-text">
        <div className="mar-btm">
          <a href="#" class="btn-link text-semibold media-heading box-inline">
            From {userComment.user.name}
          </a>
        </div>
        <p>{userComment.body}</p>
        <div class="pad-ver">
          <div className="btn-group">
            {user.email === userComment.user.email ? (
              <div>
                <a
                  className="btn btn-sm btn-default btn-hover-success"
                  href="#comment"
                  onClick={handleUpdateClick}
                >
                  <i class="fas fa-edit"></i>
                </a>

                <a
                  className="btn btn-sm btn-default btn-hover-danger"
                  href="#comment"
                  onClick={() => onDeleteClick(userComment)}
                >
                  <i class="fas fa-trash-alt"></i>
                </a>
              </div>
            ) : null}
          </div>
          <a
            className="btn btn-sm btn-default btn-hover-primary"
            href="#create-comment"
          >
            <i class="fas fa-comment-alt"></i>
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
}
export default CommentCard;
