import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ itemsPerPage }) => {
  const [itemsOffset, setItemOffset] = useState(0);

  const endOffset = itemsOffset + itemsPerPage;

  const currentItems = items.slice(itemsOffset, endOffset);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  return <div>Pagination</div>;
};

export default Pagination;
