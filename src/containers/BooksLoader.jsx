import React, { useState, useEffect } from "react";
import { fetchBooks } from "../services/data-services";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import style from "./BooksLoader.module.scss";
import SearchResults from "../components/SearchResults/SearchResults";
const BooksLoader = ({ searchTerm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [booksList, setBooksList] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfBooksPerPage, setNumberOfBooksPerPage] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    if (searchTerm) {
      setNumberOfPages(0);
      setIsError(false);
      setIsLoading(true);
      fetchBooks(
        searchTerm,
        pageNumber * numberOfBooksPerPage,
        numberOfBooksPerPage
      )
        .then((books) => {
          console.log(books.booksList, pageNumber);
          console.log(
            "total",
            books.totalCount,
            "pages",
            Math.ceil(books.totalCount / numberOfBooksPerPage)
          );
          console.log("#", pageNumber, "pp", numberOfBooksPerPage);
          setTotalCount(books.totalCount);
          setBooksList(books.booksList);
          setNumberOfPages(Math.floor(books.totalCount / numberOfBooksPerPage));
        })
        .catch((err) => {
          setIsError(true);
          setErrMsg(err.message);
          setPageNumber(0);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [searchTerm, pageNumber, numberOfBooksPerPage]);

  return (
    <div>
      {/* //className={isLoading || isError ? style.spinner_loader : ""}> */}
      {isError && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <LoadingSpinner />}
      {!isError && !isLoading && booksList && (
        <SearchResults
          searchTerm={searchTerm}
          booksList={booksList}
          pageNumber={pageNumber}
          numberOfBooksPerPage={numberOfBooksPerPage}
          numberOfPages={numberOfPages}
          setPageNumber={setPageNumber}
          setNumberOfBooksPerPage={setNumberOfBooksPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalNumberOfBooks={totalCount}
        />
      )}
    </div>
  );
};

export default BooksLoader;
