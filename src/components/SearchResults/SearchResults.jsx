import React from "react";
import style from "./SearchResults.module.scss";
import BooksGrid from "../BooksGrid/BooksGrid";
import PagingInformation from "../PagingInformation/PagingInformation";
import PageSelector from "../PageSelector/PageSelector";

const SearchResults = ({
  searchTerm,
  booksList,
  numberOfBooksPerPage,
  setNumberOfBooksPerPage,
  totalNumberOfBooks,
  numberOfPages,
  setPageNumber,
  currentPage,
  setCurrentPage,
}) => {
  const startIndex = 1 + currentPage * numberOfBooksPerPage;
  const endIndex = startIndex + numberOfBooksPerPage - 1;
  console.log(startIndex, endIndex, totalNumberOfBooks);
  return (
    <div className={style.results}>
      <PagingInformation
        startIndex={startIndex}
        endIndex={endIndex}
        totalNumberOfBooks={totalNumberOfBooks}
        numberOfBooksPerPage={numberOfBooksPerPage}
        setNumberOfBooksPerPage={setNumberOfBooksPerPage}
      />
      <BooksGrid booksList={booksList} searchTerm={searchTerm} />
      <PageSelector
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
        fetchPage={setPageNumber}
      />
    </div>
  );
};

export default SearchResults;
