import React from "react";
import style from "./BookCard.module.scss";
const BookCard = ({ book }) => {
  return (
    <div className="style.card">
      <img alt={book.tilte} src={book.image} />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>{book.authors.join(", ")}</p>
    </div>
  );
};

export default BookCard;
