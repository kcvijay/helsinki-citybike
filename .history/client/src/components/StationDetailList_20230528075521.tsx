import React from "react";

interface DetailListProps {
  listHeader: string;
  listDetail: string | number;
}

const StationDetailRow = ({ listHeader, listDetail }: DetailListProps) => {
  return (
    <li className="flex px-2 py-6 bg-slate-200 border-l-4 border-orange-500 mb-4">
      <p className="w-full font-bold border-r-2 border-teal-500">
        {listHeader}
      </p>
      <p className="w-full text-center">{listDetail}</p>
    </li>
  );
};

export default StationDetailRow;
