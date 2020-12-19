import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./css/App.css";
import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import AppHomePage from "./components/home/AppHomePage";
import AnnouncementPage from "./components/announcementNew/AnnouncementPage";
import NewAnnouncementPage from "./components/announcementNew/NewAnnouncement";
import SingleAnnouncement from "./components/announcementNew/SingleAnnouncement";
import CommentPage from "./components/newComment/CommentsPage";
import AssignmentPostPage from "./components/assignmentpost/AssignmentPostPage";
import NewAssignment from "./components/assignmentpost/NewAssignment";
import SingleAssignment from "./components/assignmentpost/SingleAssignment";
import GradeAssignmentPage from "./components/home/GradeAssignmentPage";
import AssignmentList from "./components/assignmentpost/AssignmentList";
import ChatNewPage from "./components/chatNew/ChatPage";
import AssignmentSubmissionForm from "./components/assignmentsubmission/AssignmentSubmissionForm";
import SingleAssignmentSubmitted from "./components/assignmentsubmission/SingleAssignmentSubmitted";
import NewStudyMaterial from './components/studymaterial/NewStudyMaterial';
import StudyMaterialList from './components/studymaterial/StudyMaterialList';
import SingleStudyMaterial from './components/studymaterial/SingleStudyMaterial';
import GradeStudyMaterialPage from './components/studymaterial/GradeStudyMaterialPage';
import StudyMaterialByGrade from './components/studymaterial/StudyMaterialByGrade';
import ReplyForm from "./components/chatNew/ReplyForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/studymaterial/new">
            <NewStudyMaterial />
          </Route>

          <Route exact path="/assignmentPost">
            <AssignmentPostPage />
          </Route>

          <Route exact path="/assignmentPost/new">
            <NewAssignment />
          </Route>

          <Route exact path="/assignmentPost/:id">
            <SingleAssignment />
          </Route>

          <Route exact path="/studymaterial">
            <StudyMaterialList />
          </Route>

          <Route exact path="/studymaterial/:id">
            <SingleStudyMaterial />
          </Route>

          <Route exact path="/assignmentPost/grade/:grade">
            <GradeAssignmentPage />
          </Route>

          <Route exact path="/studymaterial/grade/:grade">
            <GradeStudyMaterialPage />
          </Route>

          <Route exact path="/assignmentPost/grade/subject/:subject">
            <AssignmentList />
          </Route>

          <Route exact path="/studymaterial/grade/subject/:subject">
            <StudyMaterialByGrade />
          </Route>

          {/* <Route exact path="/assignmentSubmission/new/:id"> */}
          <Route exact path="/assignmentSubmission/new">
            <AssignmentSubmissionForm />
          </Route>

          <Route exact path="/assignmentSubmission/:id">
            <SingleAssignmentSubmitted />
          </Route>

          <Route exact path="/announce">
            <AnnouncementPage />
          </Route>

          <Route path="/announce/new" exact>
            <NewAnnouncementPage />
          </Route>

          <Route exact path="/announce/:id">
            <SingleAnnouncement />
          </Route>

          <Route path="/comments" exact>
            <CommentPage />
          </Route>

          <Route path="/messages" exact>
            <ChatNewPage />
          </Route>

          <Route path="/replymessage" exact>
            <ReplyForm/>
          </Route>

          <Route path="/">
            <AppHomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
