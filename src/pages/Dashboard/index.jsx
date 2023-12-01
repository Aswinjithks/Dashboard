import React from "react";
import UpcomingJobs from "./upcomingJobs";
import TodayStatus from "./todayStatus";
import JobsAssigned from "./jobsAssigned";
import Invoicing from "./invoicing";
import IncomingJobs from "./incomingJobs";
import InTransit from "./inTransit";
import OverDue from "./overDue";
import Successfull from "./successfull";
import Failed from "./failed";
import Due from "./due";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="p-8">
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-row space-x-3 flex-wrap">
              <UpcomingJobs />
              <TodayStatus />
              <JobsAssigned />
              <Invoicing />
            </div>
            <div className="flex flex-col w-full">
              <IncomingJobs />
              <div className="flex flex-row mt-5 space-x-3 w-[100%]">
                <InTransit />
                <OverDue />
                <Due />
              </div>
              <div className="flex flex-row mt-5 space-x-3 w-[100%]">
                <Successfull />
                <Failed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
