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
  currentPage,
  setCurrentPage,
}) => {
  const startIndex = 1 + currentPage * numberOfBooksPerPage;
  const endIndex =
    startIndex + numberOfBooksPerPage - 1 < totalNumberOfBooks
      ? startIndex + numberOfBooksPerPage - 1
      : totalNumberOfBooks;
  return (
    <div className={style.results}>
      <PagingInformation
        startIndex={startIndex}
        endIndex={endIndex}
        totalNumberOfBooks={totalNumberOfBooks}
        numberOfBooksPerPage={numberOfBooksPerPage}
        setNumberOfBooksPerPage={setNumberOfBooksPerPage}
        setCurrentPage={setCurrentPage}
      />
      <BooksGrid booksList={booksList} searchTerm={searchTerm} />
      <PageSelector
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        fetchPage={setCurrentPage}
      />
    </div>
  );
};

export default SearchResults;
