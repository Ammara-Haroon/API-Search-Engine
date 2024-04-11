import React from "react";
import style from "./BookModal.module.scss";
const BookModal = ({ book, setOpenModal }) => {
  return (
    <>
      <div className={style.modal}>
        <div className={style.modal_image_container}>
          <img
            className={style.modal_image}
            src={book.image}
            alt={book.title}
          />
        </div>
        <div className={style.modal_container}>
          {/* <div>
            <div> */}
          <div className={style.modal_heading}>
            <button
              className={style.modal_button}
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
            {book.authors && <h4>{book.authors.join("  ")}</h4>}
            <h2>{book.title}</h2>
            {book.subtitle && <h6>{book.subtitle}</h6>}
          </div>
          <div className={style.modal_information}>
            {book.description && <p>{book.description}</p>}
            {book.categories && <p>Tags: {book.categories.join(" | ")}</p>}
            {book.pageCount && <p>Pages: {book.pageCount}</p>}
            {book.printType && <p>Available As: {book.printType}</p>}
            {book.publishDate && <p>Published On: {book.publishDate}</p>}
            {book.publisher && <p>Published by: {book.publisher}</p>}
            {book.previewLink && (
              <a target="_blank" href={book.previewLink}>
                Preview Here
              </a>
            )}
          </div>
          {/* </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BookModal;
