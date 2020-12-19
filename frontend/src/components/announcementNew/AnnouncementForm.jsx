import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";
import FileUploader from "./FileUploader";

//form to add announcements
function AnnouncementForm({ setAnnounce }) {
  const [fileUrl, setFileUrl] = useState("");
  const [announceTitle, setAnnounceTitle] = useState("");
  const [details, setDetails] = useState("");
  const [user, setUser] = useState({});
  const userMail = Auth.getUserMail();

  // Store user informations when logged: can access user mail, name, Id
  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (details === "") {
      alert("Submit a valid announcement");
      return;
    }
    setAnnounce({
      title: announceTitle,
      body: details,
      imageUrl: fileUrl,
      date: format(new Date(), "dd-MMM-yyyy"),
      user: user,
      likes: 0,
    });
    document.getElementById("announce-form").reset();
  };

  return (
    <div className="announcement-frm">
      <h2 style={{ color: "#006d77" }}>Post Announcement</h2>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <FileUploader setFileUrl={setFileUrl} />
          <br />
          <form
            id="announce-form"
            style={{ width: "100%" }}
            onSubmit={submitHandler}
          >
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Announcement Title</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput1"
                placeholder="Enter announcement title here.."
                onChange={(e) => setAnnounceTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">
                Annoucement Details :
              </label>
              <textarea
                type="text"
                className="form-control"
                id="formGroupExampleInput3"
                placeholder="Enter announcement details here.."
                rows="3"
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-newPost">
              {" "}
              <i class="fas fa-share-square"></i> Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementForm;
