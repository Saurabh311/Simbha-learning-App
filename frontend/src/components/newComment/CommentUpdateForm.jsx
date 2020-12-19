import React, { useState } from "react";

//form to update comment
export default function CommentUpdateForm({ initialComment, onUpdateClick }) {
  const [body, setBody] = useState(initialComment.body);

  return (
    <div id="create-comment" class="container bootdey">
      <div class="col-md-12 bootstrap snippets">
        <div class="panel">
          <div class="panel-body">
            <textarea
              class="form-control"
              rows="2"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <div class="mar-top clearfix">
              <button
                class="btn btn-sm btn-primary pull-right"
                onClick={() => {
                  if (body === "") {
                    alert("Can't save empty comment");
                    return;
                  }
                  onUpdateClick({ ...initialComment, body });
                }}
                type="submit"
              >
                <i class="fa fa-pencil fa-fw"></i> Save
              </button>
              <a
                class="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
                href="#"
              ></a>
              <a
                class="btn btn-trans btn-icon fa fa-camera add-tooltip"
                href="#"
              ></a>
              <a
                class="btn btn-trans btn-icon fa fa-file add-tooltip"
                href="#"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
