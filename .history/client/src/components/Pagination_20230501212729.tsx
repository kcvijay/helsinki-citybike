import React from "react";

interface Items {
  itemsPerPage: number;
  totalItems: number;
}

const Pagination = ({ itemsPerPage, totalItems }: Items) => {
  const pageNumbers = [];

  for (let i = 1; 1 <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
