import React, { useEffect, useState } from "react";
import CommentsCreateForm from "./CommentsCreateForm";
import Api from "../../api/Api";
import CommentApi from "../../api/CommentApi";
import CommentCard from "./CommentCard";
import ErrorScreen from "../tempscreens/ErrorScreen";

function CommentsPage({ announce, user }) {
  /* Save the response from useEffect in a variable using state variables */
  const [userComment, setUserComment] = useState([]);

  /*We want all the comments to be displayed when the page is loaded,
so we use useEffect */

  useEffect(() => {
    getAllComments();
  }, []);

  //function to get all comments
  function getAllComments() {
    CommentApi.getAllCommentsByAnnouncementId(announce.id).then((c) => {
      setUserComment(c.data);
    });
  }

  //function to create comment
  const createComment = (commentData) => {
    if (commentData.body === "") {
      alert("Please enter your comment..");
      return;
    }
    Api.post("/comments", commentData).then((resp) => {
      setUserComment([...userComment, resp.data]);
    });
    alert("Shared successfully..");
  };

  //function to update comment
  const updateComment = (updatedComment) => {
    Api.put("/comments/", updatedComment).then((res) => getAllComments());
    alert("Edited successfully..");
  };

  //function to delete comment
  const deleteComment = (delComment) => {
    Api.delete("/comments/" + delComment.id).then((r) => getAllComments());
    alert("Deleted successfully..");
  };

  try {
    return (
      <div>
        <CommentsCreateForm
          announce={announce}
          user={user}
          onSubmit={createComment}
        />
        {userComment.length === 0
          ? "No comments yet"
          : userComment.map((eachuserComment) => (
              <CommentCard
                key={eachuserComment.id}
                userComment={eachuserComment}
                onUpdateClick={updateComment}
                onDeleteClick={deleteComment}
                user={user}
              />
            ))}
      </div>
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}

export default CommentsPage;
