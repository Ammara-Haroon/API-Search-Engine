import React, { useState, useEffect } from "react";
import { fetchBooks } from "../services/data-services";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import style from "./BooksLoader.module.scss";
import SearchResults from "../components/SearchResults/SearchResults";
const BooksLoader = ({ searchTerm, currentPage, setCurrentPage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [booksList, setBooksList] = useState(null);
  const [numberOfBooksPerPage, setNumberOfBooksPerPage] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    if (searchTerm) {
      setErrMsg(null);
      setIsLoading(true);
      fetchBooks(
        searchTerm,
        currentPage * numberOfBooksPerPage,
        numberOfBooksPerPage
      )
        .then((books) => {
          setTotalCount(books.totalCount);
          setBooksList(books.booksList);
          if (currentPage === 0) {
            setNumberOfPages(
              Math.ceil(books.totalCount / numberOfBooksPerPage)
            );
          }
        })
        .catch((err) => {
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
      {errMsg && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <LoadingSpinner />}
      {!errMsg && !isLoading && booksList && (
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
