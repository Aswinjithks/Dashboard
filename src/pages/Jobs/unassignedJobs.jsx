import React from "react";
import Card from "../../components/Card";
import Cardtop from "../../components/Cardtop";

const UnassignedJobs = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-50">
      <Cardtop heading="Unassigned Jobs(12)" />
      <hr></hr>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 mt-3">
          {[...Array(3)].map((_, index) => (
            <Card key={index} type="unassigned" />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UnassignedJobs;
