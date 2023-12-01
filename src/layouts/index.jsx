import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

const Privet = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Privet;
