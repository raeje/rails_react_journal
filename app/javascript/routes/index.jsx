import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import Category from "../components/outlets/Category";
import Overview from "../components/outlets/Overview";

//<Route path="/" element={<Home />}></Route>
export default (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="dashboard" element={<Overview />} />
        <Route path="category/:id" element={<Category />} />
      </Route>
    </Routes>
  </Router>
);
