import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./css/App.css";

// Import pages
import StartPage from "./components/NewQuiz/StartPage";
import QuizTopicPage from "./components/NewQuiz/QuizTopicPage";
import QuizDisplayPage from "./components/NewQuiz/QuizDisplayPage";

function App() {

  const loggedInRouter = (
    <Router>
        <Switch>
          
          <Route exact path="/topic" >
            <QuizTopicPage />
          </Route>

          <Route exact path="/">
            <StartPage />
          </Route>
          
          <Route exact path="/quiz/:topic" >
            <QuizDisplayPage />
          </Route>

        </Switch>
    </Router>
  );

  return loggedInRouter;
}

export default App;
