import React, { useEffect } from "react";
import Card from "./Card";
import Cardtop from "./Cardtop";
import useRandomColors from "../hooks/useRandomColors";

const Maincard = ({ type }) => {
  const [colors] = useRandomColors(3);

  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-50">
      <Cardtop
        heading={
          type === "unassigned"
            ? "Unassigned Jobs(12)"
            : type === "assigned"
            ? "Assigned Jobs(12)"
            : "Finished Jobs(12)"
        }
      />
      <hr></hr>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 mt-3">
          {type === "unassigned" ? (
            <>
              {[...Array(3)].map((_, index) => (
                <Card key={index} type="unassigned" />
              ))}
            </>
          ) : (
            colors.map((item, index) => (
              <Card color={item} key={index} type={type} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Maincard;
