import React from "react";

const TableRow = () => {
  return (
    <tr>
      <td data-cell="Departure Station">Töölönlahti</td>
      <td data-cell="Departure Station ID">100</td>
      <td data-cell="Departure Time">01.05.2021 12:25</td>
      <td data-cell="Return Station">Meilahti</td>
      <td data-cell="Return Station ID">120</td>
      <td data-cell="Return Time">01.05.2021 12:35</td>
      <td data-cell="Distance">200 m</td>
      <td data-cell="Duration">10 min</td>
    </tr>
  );
};

export default TableRow;
