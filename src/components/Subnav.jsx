import React from "react";

const Subnav = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-3">
        <div className="flex flex-row justify-between p-5">
          <div>
            <h2 className="text-2xl font-semibold">Thursday, 21 May</h2>
          </div>
          <div className="space-x-8">
            <button className=" hover:bg-blue-700 text-blue-700 border-blue-700 border-2 font-bold py-2 px-4 rounded">
              Auto Questionaire
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              + Add Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subnav;
