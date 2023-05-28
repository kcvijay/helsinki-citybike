import React from "react";

interface DetailListProps {
  listHeader: string;
  listDetail: string | number;
}

const StationDetailRow = ({ listHeader, listDetail }: DetailListProps) => {
  return (
    <div className="flex gap-8 bg-slate-200 border-l-4 border-orange-500 mb-4">
      <div className="border-r-8 border-white w-[200px] px-2 py-3 font-bold ">
        <p className="">{listHeader}</p>
      </div>
      <div className="px-2 py-3 w-full">
        <p>{listDetail}</p>
      </div>
    </div>
  );
};

export default StationDetailRow;
