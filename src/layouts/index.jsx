import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Subnav from "../components/Subnav";

const Privet = () => {
  return (
    <>
      <Header />
      <Subnav />
      <Outlet />
    </>
  );
};

export default Privet;
