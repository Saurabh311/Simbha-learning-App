import React, { useState } from "react";
import Auth from "../../services/Auth";

//form to create comment and add in database
export default function CommentsCreateForm({ announce, user, onSubmit }) {
  const [body, setBody] = useState("");

  function onClickHandler() {
    const comment = {
      body: body,
      user: user,
      announcement: announce,
    };
    onSubmit(comment);
    setBody("");
  }

  //Inform parent by calling onSubmit and passing the title and body

  return (
    <div id="create-comment" class="container bootdey">
      <div class="col-md-12 bootstrap snippets">
        <div class="panel">
          <div class="panel-body">
            <textarea
              id="comment-text"
              class="form-control"
              rows="2"
              placeholder="What are you thinking?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              defaultValue="Reset"
            ></textarea>
            <div class="mar-top clearfix">
              <a
                class="btn btn-sm btn-primary pull-right"
                href="#comment"
                onClick={onClickHandler}
              >
                <i class="fa fa-pencil fa-fw"></i> Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
