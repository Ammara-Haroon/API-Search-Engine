import React from "react";
import style from "./BookCard.module.scss";
const BookCard = ({ book }) => {
  return (
    <div className={style.flip_card}>
      <div className={style.flip_card_inner}>
        <div className={style.flip_card_front}>
          <img src={book.image} alt={book.title} />
        </div>
        <div className={style.flip_card_back}>
          <h2>{book.title}</h2>
          <p>{book.authors.join(", ")}</p>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
