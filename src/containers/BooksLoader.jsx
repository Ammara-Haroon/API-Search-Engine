import React, { useState, useEffect } from "react";
import { fetchBooks } from "../services/data-services";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import style from "./BooksLoader.module.scss";
import SearchResults from "../components/SearchResults/SearchResults";
const BooksLoader = ({ searchTerm, currentPage, setCurrentPage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [booksList, setBooksList] = useState(null);
  const [numberOfBooksPerPage, setNumberOfBooksPerPage] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    if (searchTerm) {
      //setNumberOfPages(0);
      setIsError(false);
      setIsLoading(true);
      fetchBooks(
        searchTerm,
        currentPage * numberOfBooksPerPage,
        numberOfBooksPerPage
      )
        .then((books) => {
          console.log(books.booksList, currentPage);
          console.log(
            "total",
            books.totalCount,
            "pages",
            Math.ceil(books.totalCount / numberOfBooksPerPage),
            "#",
            currentPage
          );
          //console.log("#", pageNumber, "pp", numberOfBooksPerPage);
          setTotalCount(books.totalCount);
          setBooksList(books.booksList);
          if (currentPage === 0) {
            setNumberOfPages(
              Math.ceil(books.totalCount / numberOfBooksPerPage)
            );
          }
        })
        .catch((err) => {
          setIsError(true);
          setErrMsg(err.message);
          setCurrentPage(0);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [searchTerm, currentPage, numberOfBooksPerPage]);

  return (
    <div>
      {isError && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <LoadingSpinner />}
      {!isError && !isLoading && booksList && (
        <SearchResults
          searchTerm={searchTerm}
          booksList={booksList}
          numberOfBooksPerPage={numberOfBooksPerPage}
          numberOfPages={numberOfPages}
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
