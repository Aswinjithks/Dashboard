import React from "react";
import Header from "./header";
import AssignedJobs from "./Jobs/assignedJobs";
import FinishedJobs from "./Jobs/finishedJobs";
import UnassignedJobs from "./Jobs/unassignedJobs";

const Jobs = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-6">
        <div className="p-5">
          <h2 className="text-2xl font-semibold">Thursday, 21 May</h2>
        </div>
        <div className="flex flex-row space-x-6 center">
          <UnassignedJobs />
          <AssignedJobs />
          <FinishedJobs />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
