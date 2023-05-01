import React from "react";

const Pagination = ({ itemsPerPage, totalItems }) => {
  const pageNumbers = [];

  for (let i = 1; 1 <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return <div></div>;
};

export default Pagination;
