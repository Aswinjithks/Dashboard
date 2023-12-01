import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const IncomingJobs = () => {
  const data = [
    {
      name: "1",
      uv: 0,
    },
    {
      name: "2",
      uv: 2,
    },
    {
      name: "3",
      uv: 1,
    },
    {
      name: "4",
      uv: 3,
    },
    {
      name: "5",
      uv: 2,
    },
    {
      name: "6",
      uv: 3,
    },
    {
      name: "7",
      uv: 5,
    },
  ];
  return (
    <div className="h-[60%] p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-50">
      <div className="flex flex-col justify-between mb-4">
        <h5 className="text-base pl-4 font-bold leading-none text-gray-900 dark:text-gray">
          Incoming Jobs(4)
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
        </div>
        <div className="border border-gray-300 rounded-lg ">
          <div>
            <LineChart width={600} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#3372D1"
                strokeWidth={3}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingJobs;
