import React, { useState } from "react";
import style from "./BookCard.module.scss";
import BookModal from "../BookModal/BookModal";
import imageNotFound from "../../assets/image-not-found-icon.png";
const BookCard = ({ book }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className={style.card} onClick={() => setOpenModal(true)}>
        <div className={style.flip_card}>
          <div className={style.flip_card_base}>
            <div className={style.description}>
              <p>
                {book.description
                  ? book.description
                  : "No description avaialble."}
              </p>
            </div>
            {book.description && (
              <div className={style.arrows}>
                <small>&#11167;</small>
                <small>&#11165;</small>
              </div>
            )}
          </div>
          <div className={style.flip_card_inner}>
            <div className={style.flip_card_front}>
              <img src={book.image || imageNotFound} alt={book.title} />
            </div>
          </div>
        </div>
        <h3 className={style.book}>{book.title}</h3>
        <small className={style.author}>{book.authors.join(", ")}</small>
        <p>{/* <button>Add to Cart</button> */}</p>
      </div>
      {openModal && <BookModal book={book} setOpenModal={setOpenModal} />}
    </>
  );
};

export default BookCard;
