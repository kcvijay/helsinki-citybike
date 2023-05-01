import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = () => {
  return <div>Pagination</div>;
};

export default Pagination;
