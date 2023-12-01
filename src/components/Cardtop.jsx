import React from "react";
import Filter from "../assets/filter.svg";

const Cardtop = ({ heading }) => {
  return (
    <div className="flex flex-col justify-between mb-4">
      <h5 className="text-xl pl-4 font-bold leading-none text-gray-900 dark:text-gray">
        {heading}
      </h5>
      <div className="flex flex-row justify-between p-4">
        <div className="inline-flex w-[300px] h-[28px] border-gray-500 ">
          <button className="bg-blue-500 hover:bg-blue-700 text-xs text-white p-1 rounded-l">
            Today
          </button>
          <button className="hover:bg-gray-400 border-gray-500 text-xs text-gray-800 p-1">
            This Week
          </button>
          <button className="hover:bg-gray-400 border-gray-500 text-xs text-gray-800 p-1 rounded-r">
            This Month
          </button>
        </div>
        <img src={Filter} alt="filter" />
      </div>
    </div>
  );
};

export default Cardtop;
