import React from "react";
import style from "./PageSelector.module.scss";
const PageSelector = ({
  numberOfPages = 10,
  fetchPage,
  currentPage,
  setCurrentPage,
}) => {
  const pages = [];
  const isFirst = currentPage === 0;
  for (let i = currentPage; i < currentPage + 5 && i < numberOfPages; ++i) {
    pages.push(i);
  }

  const moveFwd = () => {
    setCurrentPage(currentPage + 1);
    fetchPage(currentPage);
  };

  const selectPage = (pg) => {
    setCurrentPage(pg);
    fetchPage(pg);
  };
  const moveBkwd = () => {
    setCurrentPage(currentPage - 1);
    fetchPage(currentPage);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.page_nav}>
        <button onClick={moveBkwd} disabled={currentPage === 0}>
          Previous
        </button>
        <ol className={style.paging}>
          {!isFirst ? (
            <li key={1} onClick={() => selectPage(0)}>
              1 ...
            </li>
          ) : null}
          {pages.map((page) => (
            <li
              key={page + 1}
              style={
                currentPage === page
                  ? { textDecoration: "underline", color: "green" }
                  : {}
              }
              onClick={() => selectPage(page)}
            >
              {page + 1}
            </li>
          ))}
        </ol>
        <button onClick={moveFwd} disabled={currentPage === numberOfPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PageSelector;
