import React from "react";

interface DetailListProps {
  listHeader: string;
  listDetail: string | number;
}

const StationDetailRow = ({ listHeader, listDetail }: DetailListProps) => {
  return (
    <li className="flex gap-4 px-4 py-8 bg-slate-200">
      <p className="w-full font-bold border-r-2 border-teal-500">
        {listHeader}
      </p>
      <p className="w-full text-center">{listDetail}</p>
    </li>
  );
};

export default StationDetailRow;
