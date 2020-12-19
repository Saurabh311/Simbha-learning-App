import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";
import FileUploader from "../announcementNew/FileUploader";
import "react-datepicker/dist/react-datepicker.css";


function StudyMaterialForm({setMaterial}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [grade, setGrade] = useState("1");
    const [subject, setSubject] = useState("Math");

    const [user, setUser] = useState({});
    const userMail = Auth.getUserMail();
  
    // Store user informations when logged: can acces user mail, name, Id
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
      setMaterial({
        title: title,
        description: description,
        grade: grade,
        subject: subject,
        user: user,
        fileUrl: fileUrl,
        postDate: format(new Date(), "dd-MMM-yyyy")
      });
      console.log(setMaterial);
      document.getElementById("studymaterial-form").reset();
    };
    return (
      <div className="studymaterial-frm">
        <h2 style={{ color: "#006d77" }}>New Study Material</h2>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <FileUploader setFileUrl={setFileUrl} />
            <br />
            <form
              id="studymaterial-form"
              style={{ width: "100%" }}
              onSubmit={submitHandler}
            >
              <div className="form-group">
                <label htmlFor="formGroupExampleInput"> Title</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="formGroupExampleInput"
                  placeholder="Study Material Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                   Description
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder=" Decription..."
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div class="form-group ">
                <label for="inputType">Grade</label>
                <select
                  required
                  id="grade"
                  className="form-control"
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                </select>
              </div>
              <div class="form-group ">
                <label for="inputType">Subject</label>
                <select
                  required
                  id="subject"
                  className="form-control"
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="Math">Math</option>
                  <option value="Social Study">Social Study </option>
                  <option value="Science">Science</option>
                  <option value="General Knowledge">General Knowledge</option>
                  <option value="Language">Language</option>
                  <option value="Art">Art</option>
                </select>
              </div>
  
              <button type="submit" className="btn-newPost">
                {" "}
                <i class="fas fa-share-square"></i> Submit Study Material
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default StudyMaterialForm;
  