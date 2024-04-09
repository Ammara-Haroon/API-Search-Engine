import React from "react";
import style from "./PagingInformation.module.scss";
import ResultsSelector from "../ResultsSelector/ResultsSelector";

const PagingInformation = ({
  stratIndex,
  endIndex,
  totalNumberOfBooks,
  numberOfBooksPerPage,
  setNumberOfBooksPerPage,
}) => {
  return (
    <div className={style.paging_info}>
      <p>
        Showing {stratIndex} -{endIndex} of {totalNumberOfBooks}
      </p>
      <ResultsSelector
        options={[10, 20, 30, 40]}
        onSelect={setNumberOfBooksPerPage}
        selectedValue={numberOfBooksPerPage}
      />
    </div>
  );
};

export default PagingInformation;
