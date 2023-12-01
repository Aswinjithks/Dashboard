import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Jobs from "../components/jobs";
import Dashboard from "../components/dashboard";
import Privet from "../layouts";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Privet />}>
        <Route path="/jobs" element={<Jobs />} />
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Index;
