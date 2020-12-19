import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import UserApi from "../../api/UserApi";
import MessageApi from "../../api/MessageApi";
import FileUploader from "../../components/announcementNew/FileUploader";

function NewMessageForm({ user }) {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    function getAllUsers() {
      UserApi.getAllUsers().then((res) => {
        setListOfUsers(res.data);
      });
    }

    getAllUsers();
  }, []);

  const listOfTeachers = listOfUsers.filter((li_user) => {
    if (li_user.name !== user.name) {
      return li_user;
    } else {
      return null;
    }
  });

  console.log(listOfTeachers);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message === "") {
      alert("Please enter your message..");
    }
    if (recipient === "") {
      alert("Please select person name..");
    }
    const newMessage = {
      msgSubject: subject,
      recipient: listOfTeachers.find((user) => user.name === recipient),
      msgBody: message,
      sender: user,
      date: format(new Date(), "dd-MMM-yyyy HH:mm"),
      fileUrl: fileUrl,
    };

    MessageApi.createMessage(newMessage).then(() => {
      console.log("sent");
      setMessage("");
      setRecipient("");
      setSubject("");
      setFileUrl("");
      alert("Message sent successfully...");
    });
  };

  return (
    <div className="container col-sm-12 col-md-10 col-lg-8">
      <h3 className="font-italic">Send your message</h3>

      <div className="card msg-form-card p-3">
        <FileUploader setFileUrl={setFileUrl} />

        <div className="input-group mb-3 user-dropdown">
          <div className="input-group-prepend">
            <span className="input-group-text">Send To</span>
          </div>
          <select
            id="user"
            name="user"
            className="browser-default custom-select"
            onChange={(event) => setRecipient(event.target.value)}
          >
            <option value="">Please select</option>
            {listOfTeachers.length === 0
              ? ""
              : listOfTeachers.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
          </select>
        </div>

        <div className="input-group mb-3 user-dropdown">
          <div className="input-group-prepend">
            <span className="input-group-text">Message</span>
          </div>
          <textarea
            className="form-control"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>

        <div className="form-group text-right">
          <button className="btn btn-msg-submit" onClick={sendMessage}>
            <i class="fas fa-share-square"></i> Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewMessageForm;
