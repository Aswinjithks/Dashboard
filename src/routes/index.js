import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Privet from "../layouts";
import Jobs from "../pages/Jobs";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Privet />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
      </Route>
    </Routes>
  );
};

export default Index;
