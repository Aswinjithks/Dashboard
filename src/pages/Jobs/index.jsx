import React from "react";
import Maincard from "../../components/maincard";
import { JOB_TYPES } from "../../config/jobtypes";

const Jobs = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="p-6">
        <div className="flex flex-row space-x-6 center">
          {JOB_TYPES.map((item, index) => (
            <Maincard key={index} type={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
