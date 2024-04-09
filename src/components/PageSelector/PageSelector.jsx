import React from "react";

const PageSelector = ({ numberOfPages = 10, fetchPage }) => {
  const pages = Array.from(Array(numberOfPages).keys());
  return (
    <div>
      <ol>
        {pages.map((page) => (
          <li key={page + 1} onClick={() => fetchPage(page)}>
            {page + 1}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PageSelector;
