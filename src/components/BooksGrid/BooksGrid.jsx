import React from "react";
import BookCard from "../BookCard/BookCard";
import style from "./BooksGrid.module.scss";
const BooksGrid = ({ booksList }) => {
  return (
    <div>
      BooksGrid
      {booksList.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksGrid;
