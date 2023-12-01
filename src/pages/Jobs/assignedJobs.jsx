import React from "react";
import Card from "../../components/Card";
import Cardtop from "../../components/Cardtop";

const AssignedJobs = () => {
  const colors = ["bg-orange-400", "bg-blue-300", "bg-green-300"];
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-50">
      <Cardtop heading="Assigned Jobs(12)" />
      <hr></hr>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 mt-3">
          {colors.map((item, index) => (
            <Card color={item} key={index} type="assigned" />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignedJobs;
