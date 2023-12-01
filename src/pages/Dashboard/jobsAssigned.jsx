import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const JobsAssigned = () => {
  const [percentage, setPercentage] = useState(79);
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["bg-blue-500", "bg-gray-300"], 
        hoverBackgroundColor: ["hover:bg-blue-600", "hover:bg-gray-400"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutoutPercentage: 80,
    rotation: -0.5 * Math.PI,
    circumference: 2 * Math.PI,
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  };
  return (
    <div className="w-[40%] max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-50">
      <div className="flex flex-row justify-between mb-4  w-[90%]">
        <div>
          <h5 className="pl-4 font-bold leading-none text-gray-900 dark:text-gray">
            Jobs Assigned(4)
          </h5>
        </div>
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
        </div>
      </div>
      <hr></hr>
      {/* <div className="">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-4xl text-blue-500">{percentage}%</div>
          <div className="text-sm text-gray-700">Completion</div>
        </div>
      </div> */}
    </div>
  );
};

export default JobsAssigned;
