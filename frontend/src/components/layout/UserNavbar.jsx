import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";
import UserImg from "../../images/user_empty.png";

function Navbar({ onLogout }) {
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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        <img className="logo" src="/images/Simba-ICON.png" alt="logo" />
      </a>
      <p className="nav-simba-title">
        <span className="title-name">SIMBA</span>
        <br />
        <span className="title-slogan">The Lion King (Learning App)</span>
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto student-nav">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/announce"
              className="nav-link"
              activeClassName="active-link"
            >
              Announcements
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/messages"
              className="nav-link"
              activeClassName="active-link"
            >
              Messages
            </NavLink>
          </li>

          <li className="nav-item">
            <a href="https://simbagame-7ab0e.web.app" className="nav-link" >
              <span>Mind Game</span>
            </a>
          </li>

          {/* <li className="nav-item">
            <NavLink
              exact
              to="/calendar"
              className="nav-link"
              activeClassName="active-link"
            >
              Calendar
            </NavLink>
          </li> */}
          <li className="nav-item dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              exact
            >
              {(user.imgUrl === null || user.imgUrl === "") ? (
                <img
                  className="profile-img"
                  src={UserImg}
                  alt="profile"
                  srcset=""
                />
              ) : (
                <img
                  className="profile-img"
                  src={user.imgUrl}
                  alt="profile"
                  srcset=""
                />
              )} &nbsp;&nbsp;
              {user.name}
            </a>
            <div
              className="dropdown-menu profile-dropdown shadow p-3 mb-5 rounded"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <div class="navbar-login">
                <div class="row">
                  <div class="col-lg-4">
                    <p class="text-center">
                      <span class="glyphicon glyphicon-user icon-size">
                        {(user.imgUrl === null || user.imgUrl === "") ? (
                          <img
                            className="profile-img"
                            src={UserImg}
                            alt="profile"
                            srcset=""
                          />
                        ) : (
                          <img
                            className="profile-img"
                            src={user.imgUrl}
                            alt="profile"
                            srcset=""
                          />
                        )}
                      </span>
                    </p>
                  </div>
                  <div class="col-lg-8">
                    <p class="text-left user-profile-data">
                      <strong>{user.name}</strong>
                    </p>
                    <p class="text-left small">{user.email}</p>
                    <p class="text-left">
                      <button
                        className="btn btn-log my-2 my-sm-0"
                        onClick={onLogout}
                      >
                        LogOut
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
