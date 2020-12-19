import React, { useState } from "react";
import ImageUploader from "./ImageUploader";

function RegisterForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setuserType] = useState("");
  const [grade, setGrade] = useState("0");
  const [imgUrl, setImgUrl] = useState("");
  const [uploading, setUploading] = useState(true);

  function onClickHandler(e) {
    e.preventDefault();
    if (grade === "0" && userType === "student") {
      alert("Please select grade..")
    }
    else{
      onSubmit({ name, email, password, userType, grade, imgUrl });
    }
  }

  return (
    <div className="sign-up-form">
      <div className="group radio-btn">
        <input
          type="radio"
          id="teacher"
          name="gender"
          value="teacher"
          onChange={(e) => setuserType(e.target.value)}
        />
        <label for="teacher">
          <img src="/images/teacher.png" alt="" className="teacher-img" />I am a
          Teacher
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="student"
          name="gender"
          value="student"
          onChange={(e) => setuserType(e.target.value)}
        />
        <label for="student">
          <img src="/images/student.png" alt="" className="student-img" />I am a
          Student
        </label>
      </div>

      <ImageUploader setUploading={setUploading} setImgUrl={setImgUrl} />

      <div className="group">
        <label htmlFor="user" className="label">
          Username
        </label>
        <input
          id="user"
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Create your Username"
          required
        />
      </div>
      <div className="group">
        <label htmlFor="email" className="label">
          Email Address
        </label>
        <input
          id="email2"
          type="text"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>
      <div className="group">
        <label htmlFor="pass" className="label">
          Password
        </label>
        <input
          id="pass1"
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-type="password"
          placeholder="Create your password"
          required
        />
      </div>

      {userType === "student" ? (
        <div className="group">
          <label htmlFor="pass" className="label">
            Grade
          </label>
          <select
            required
            id="grade"
            className="form-control"
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="0">Please select</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
          </select>
        </div>
      ) : null}

      {/* <div className="group">
        <input
          type="submit"
          className="button"
          onClick={(e) => onSubmit({ name, email, password, userType, grade })}
          value="Sign Up"
        />
      </div> */}

      <div className="group">
        <button type="submit" className="button" onClick={onClickHandler}>
          Sign Up
        </button>
      </div>

      <div className="hr"></div>
    </div>
  );
}

export default RegisterForm;
