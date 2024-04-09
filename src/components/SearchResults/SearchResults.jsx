import React from "react";
import style from "./SearchResults.module.scss";
import BooksGrid from "../BooksGrid/BooksGrid";
import PagingInformation from "../PagingInformation/PagingInformation";
import PageSelector from "../PageSelector/PageSelector";
const SearchResults = ({
  searchTerm,
  booksList,
  startIndex,
  numberOfBooksPerPage,
  setNumberOfBooksPerPage,
  totalNumberOfBooks,
  numberOfPages,
  setPageNumber,
}) => {
  console.log(startIndex, startIndex + numberOfBooksPerPage);
  return (
    <div>
      <PagingInformation
        stratIndex={startIndex}
        endIndex={startIndex + numberOfBooksPerPage}
        totalNumberOfBooks={totalNumberOfBooks}
        numberOfBooksPerPage={numberOfBooksPerPage}
        setNumberOfBooksPerPage={setNumberOfBooksPerPage}
      />
      <BooksGrid booksList={booksList} searchTerm={searchTerm} />
      <PageSelector numberOfPages={numberOfPages} fetchPage={setPageNumber} />
    </div>
  );
};

export default SearchResults;
