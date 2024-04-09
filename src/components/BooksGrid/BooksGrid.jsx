import React from "react";
import BookCard from "../BookCard/BookCard";
import style from "./BooksGrid.module.scss";
const BooksGrid = ({ booksList, searchTerm }) => {
  return (
    <div className={style.container}>
      <h3>Search Results for "{searchTerm}"</h3>
      <div className={style.grid}>
        {booksList.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksGrid;
