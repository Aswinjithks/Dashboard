import React from "react";
import Dashboard from "../assets/grid.svg";
import Jobs from "../assets/clipboard.svg";
import Technicians from "../assets/briefcase.svg";
import Calender from "../assets/calendar-month.svg";
import Customers from "../assets/users.svg";
import Invoice from "../assets/file-chart-bar.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-2xl">
      <div className="flex flex-row justify-between p-10">
        <nav className="">
          <ul className="flex flex-row space-x-10 items-center">
            <Link to={"/"}>
              <li className="flex justify-between space-x-1">
                <img alt="dashboard" src={Dashboard} />
                <h6 className="gray-text-400 font-medium">Dashboard</h6>
              </li>
            </Link>
            <Link to={"/jobs"}>
              <li className="flex justify-between space-x-1">
                <img alt="jobs" src={Jobs} />
                <h6 className="gray-text-400 font-medium">Jobs</h6>
              </li>
            </Link>
            <li></li>
            <li className="flex justify-between space-x-1">
              <img alt="Technicians" src={Technicians} />
              <h6 className="gray-text-400 font-medium">Technicians</h6>
            </li>
            <li className="flex justify-between space-x-1">
              <img alt="Calender" src={Calender} />
              <h6 className="gray-text-400 font-medium">Calender</h6>
            </li>
            <li className="flex justify-between space-x-1">
              <img alt="Customers" src={Customers} />
              <h6 className="gray-text-400 font-medium">Customers</h6>
            </li>
            <li className="flex justify-between space-x-1">
              <img alt="Invoice & Payments" src={Invoice} />
              <h6 className="gray-text-400 font-medium">Invoice & Payments</h6>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row items-center">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
            alt="Rounded avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
