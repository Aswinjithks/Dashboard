import React from "react";
import Briefcase from "../assets/briefcase-plus.svg";

const Card = ({ color, type }) => {
  return (
    <div>
      <li className="py-3 sm:py-4 ">
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${color}`}>
          <div className="flex flex-row justify-between px-6 py-4">
            <div>
              <h6 className="text-xs">Job Id</h6>
              <h4 className="font-semibold">001 AAA AA09</h4>
              <h6 className="text-xs">Job Schedule</h6>
              <h4 className="font-semibold">5:00 PM, 1 JUN</h4>
            </div>
            <div>
              <img className="pl-[7rem]" src={Briefcase} alt="filter" />
              <span
                className={`inline-block bg-stone-300 bg-opacity-20 backdrop-blur-md rounded-sm px-3 py-1 text-sm font-semibold ${
                  type === "unassigned" ? "text-gray-700" : "text-white"
                } mt-6 mr-2 mb-2`}
              >
                Washing machine
              </span>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
