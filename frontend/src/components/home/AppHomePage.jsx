import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";

import TeacherHome from "./TeacherHome";
import StudentHome from "./StudentHome";


function AppHomePage() {
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

  return (
    <div>
      {user.userType === 'teacher' && user.grade === '0' ? <TeacherHome /> : <StudentHome /> }
    </div>
  );
}

export default AppHomePage;
