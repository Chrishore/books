import "./BookShow.css"
import BookEdit from "./BookEdit.js"
import BooksContext from "../context/books";
import { ReactComponent as EditIcon } from '../resources/icons/pen-to-square-regular.svg';
import { ReactComponent as DeleteIcon } from '../resources/icons/trash-can-regular.svg';
import { useState, useContext } from 'react';
import axios from "axios"



function BookShow({ book }) {
  const [isEdit, setIsEdit] = useState(false);
  const { removeBook } = useContext(BooksContext);

  function handleDeleteClick() {
    removeBook(book.id);
  };

  function editBookChild(e) {
    setIsEdit(true);
  }

  let content = <h3>{book.title}</h3>;
  
  if (isEdit) {
    content = <BookEdit book={book} setIsEdit={setIsEdit} />;
  }


  return <div>
    <div className="card">
      <div className="right-icons">
        <div onClick={editBookChild} className="icon"><EditIcon /></div>
        <div onClick={handleDeleteClick} className="icon delete-icon"><DeleteIcon /></div>
      </div>
      <div>{content}</div>
    </div>
  </div>;
}

export default BookShow;
