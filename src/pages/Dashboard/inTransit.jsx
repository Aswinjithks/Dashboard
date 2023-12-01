import React from "react";

const InTransit = () => {
  return (
    <div className="w-full max-w-md p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-50">
      <div className="flex flex-row justify-between space-x-3">
    <div className="rounded-full h-10 w-10  bg-blue-700 pl-[14px] pt-[8px] pr-[2px] pb-[15px] text-blue-200">$</div>
        <h5 className="text-base pt-2 font-bold text-gray-900 dark:text-gray">
          $400
        </h5>
      </div>
      <h6 className="text-xs p-3">In Transit</h6>
    </div>
  );
};

export default InTransit;
