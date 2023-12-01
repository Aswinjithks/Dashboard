import React from "react";
import Filter from "../../assets/filter.svg";
import Briefcase from "../../assets/briefcase-plus.svg";
import Card from "../../components/Card";
import useRandomColors from "../../hooks/useRandomColors";
const UpcomingJobs = () => {
  const [colors] = useRandomColors(3);

  return (
    <div className="h-[60%] w-[50%] max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-50 overflow-y-auto">
      <div className="flex flex-col justify-between mb-4">
        <h5 className="text-base pl-4 font-bold leading-none text-gray-900 dark:text-gray">
          Upcoming Jobs(4)
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
      <hr></hr>
      <div className="flow-root ">
        <ul className="divide-y divide-gray-200 mt-3 overflow-y-scroll">
          {colors.map((item, index) => (
            <Card type="upcoming" index={index} color={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingJobs;
