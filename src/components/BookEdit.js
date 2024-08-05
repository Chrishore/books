import { useState, useContext } from 'react';
import axios from "axios"
import BooksContext from "../context/books";

function BookEdit({ book, setIsEdit }) {
  const { editBook } = useContext(BooksContext);

  async function handleEditClick(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    var newBookObj = {
      "id": book.id,
      "title": formJson.bookName
    }
    editBook(newBookObj);
    setIsEdit(false);
  }
  return <div>
    <form onSubmit={handleEditClick}>
      <div class="m-2">
        <input type="text" class="form-control" name="bookName" id="bookNameInput" defaultValue={book.title} ></input>
      </div>
      <div class="m-2">
        <button className="btn btn-primary" type="submit">EDIT</button>
      </div>
    </form>
  </div>;
}

export default BookEdit;
