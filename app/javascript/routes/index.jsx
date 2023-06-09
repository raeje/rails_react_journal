import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../components/Auth";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Dashboard from "../components/Dashboard";
import Category from "../components/outlets/Category";
import Overview from "../components/outlets/Overview";
import TasksDueToday from "../components/outlets/TasksDueToday";
import Summary from "../components/outlets/Summary";

//<Route path="/" element={<Home />}></Route>

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="dashboard" element={<Overview />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="tasks-due-today" element={<TasksDueToday />} />
        <Route path="summary" element={<Summary />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Route>
    </Routes>
  </Router>
);
