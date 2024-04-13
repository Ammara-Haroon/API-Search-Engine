import React from "react";
import style from "./PagingInformation.module.scss";
import ResultsSelector from "../ResultsSelector/ResultsSelector";

const PagingInformation = ({
  startIndex,
  endIndex,
  totalNumberOfBooks,
  numberOfBooksPerPage,
  setNumberOfBooksPerPage,
  setCurrentPage,
}) => {
  //console.log("in paging", startIndex, endIndex);
  return (
    <div className={style.paging_info}>
      <p>
        Showing {startIndex} - {endIndex} of {totalNumberOfBooks} Books
      </p>
      <ResultsSelector
        options={[10, 20, 30, 40]}
        onSelect={setNumberOfBooksPerPage}
        selectedValue={numberOfBooksPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PagingInformation;
