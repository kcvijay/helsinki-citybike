import React from "react";

interface DetailListProps {
  listHeader: string;
  listDetail: string | number;
}

const StationDetailRow = ({ listHeader, listDetail }: DetailListProps) => {
  return (
    <li className="flex gap-8 bg-slate-200 border-l-4 border-orange-500 mb-4">
      <div className="border-r-2 border-teal-100 w-[200px] p-4 font-bold ">
        <p className="">{listHeader}</p>
      </div>
      <div className="p-4">
        <p className="w-full">{listDetail}</p>
      </div>
    </li>
  );
};

export default StationDetailRow;
