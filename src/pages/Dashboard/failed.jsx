import React from 'react'

const Failed = () => {
  return (
    <div className="w-full max-w-md p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-50">
      <div className="flex flex-row justify-between space-x-3">
    <div className="rounded-full bg-red-700 h-10 w-10 pl-[14px] pt-[8px] pr-[2px] pb-[15px] text-red-200" >$</div>
        <h5 className="text-base pt-2 font-bold text-gray-900 dark:text-gray">
          $1,25.77
        </h5>
      </div>
      <h6 className="text-xs p-3">Failed</h6>
    </div>
  )
}

export default Failed