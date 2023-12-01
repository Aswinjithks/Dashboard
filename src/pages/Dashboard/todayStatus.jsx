import React from "react";

const TodayStatus = () => {
  return (
    <div className="h-[60%] w-[45%] max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-50 flow-root overflow-y-auto">
      <div className="flex flex-row justify-between mb-4  w-[90%]">
        <div>
          <h5 className="pl-4 font-bold leading-none text-gray-900 dark:text-gray">
            Today Status
          </h5>
        </div>
      </div>
      <hr></hr>
      <ul className="mt-5">
        <li className="flex flex-row justify-between mt-3 mb-3">
          <h6>Money Earned</h6>
          <h6>$120.00</h6>
        </li>
        <hr></hr>
        <li className="flex flex-row justify-between mt-3 mb-3">
          <h6>Money Earned</h6>
          <h6>$120.00</h6>
        </li>
        <hr></hr>
        <li className="flex flex-row justify-between mt-3 mb-3">
          <h6>Money Earned</h6>
          <h6>$120.00</h6>
        </li>
        <hr></hr>
        <li className="flex flex-row justify-between mt-3 mb-3">
          <h6>Money Earned</h6>
          <h6>$120.00</h6>
        </li>
        <hr></hr>
        <li className="flex flex-row justify-between mt-3 mb-3">
          <h6>Money Earned</h6>
          <h6>$120.00</h6>
        </li>
        <hr></hr>
        <li className="flex flex-row justify-between mt-3 mb-3">
          <h6>Money Earned</h6>
          <h6>$120.00</h6>
        </li>
        <hr></hr>
      </ul>
    </div>
  );
};

export default TodayStatus;
