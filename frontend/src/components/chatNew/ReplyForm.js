import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import UserApi from "../../api/UserApi";
import { format } from "date-fns";
import Auth from "../../services/Auth";
import MessageApi from "../../api/MessageApi";
import FileUploader from "../../components/announcementNew/FileUploader";

//Form to reply to a particular message
function ReplyForm() {
  const [user, setUser] = useState({});
  const userMail = Auth.getUserMail();
  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  const { state } = useLocation();
  const history = useHistory();
  const replyTo = state === undefined ? null : state.replyTo;
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  
  console.log("replyTo from newmessage:", replyTo);

  const sendMessage = () => {
    console.log("Send messge");
    if (message === "") {
      alert("Please enter your message..");
      return;
    }

    const newMessage = {
      msgSubject: subject,
      recipient: replyTo,
      msgBody: message,
      sender: user,
      date: format(new Date(), "dd-MMM-yyyy"),
      fileUrl: fileUrl,
    };

    console.log("newM", newMessage);

    MessageApi.createMessage(newMessage).then(() => {
      console.log("sent");
      setMessage("");
      setSubject("");
      setFileUrl("");
      alert("Message sent successfully...");
      history.push("/messages");
    });
  };

  return (
    <div className="row ChatPage">
      <div className="col-md-9 message-frame">
        <div className="messaging">
          <div className="inbox_msg">
            <div className="mesgs">
              <div className="msg_history">
                <div className="container col-sm-12 col-md-10 col-lg-8">
                  <h3 className="font-italic">Send your Reply</h3>

                  <div className="card msg-form-card p-3">
                    <FileUploader setFileUrl={setFileUrl} />

                    <div className="input-group mb-3 user-dropdown">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          Send To: {replyTo.name}
                        </span>
                      </div>
                    </div>

                    <div className="input-group mb-3 user-dropdown">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Message</span>
                      </div>
                      <textarea
                        className="form-control"
                        value={message}
                        required
                        onChange={(event) => setMessage(event.target.value)}
                      ></textarea>
                    </div>

                    <div className="form-group text-right">
                      <button
                        className="btn btn-msg-submit"
                        onClick={sendMessage}
                      >
                        <i class="fas fa-share-square"></i> Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplyForm;
