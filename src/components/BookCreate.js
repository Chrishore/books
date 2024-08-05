import { useState, useContext } from 'react';
import axios from "axios"
import BooksContext from "../context/books";


function BookCreate() {
  const [newBook, updateNewBook] = useState();
  const { bookList, updateList } = useContext(BooksContext);

  function createBook(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    var newBookObj = {
      "id": Math.round(Math.random() * 9999),
      "title": formJson.bookName
    }
    updateNewBook("")
    axios.post("http://localhost:3002/books", newBookObj);
    updateList([...bookList, newBookObj]);
  }

  function handleInputChange(e) {
    updateNewBook(e.target.value);
  }

  return <div>
    <form onSubmit={createBook} className='row align-items-end'>
      <div className='m-2 col-8'>
        <label htmlFor="bookName" className="form-label">Enter Book name to be added</label>
        <input className="form-control" type="text" name="bookName" id='bookName' value={newBook} onChange={handleInputChange} />
      </div>
      <div className='m-2 col-2'>
        <button className='btn btn-primary' type="submit">ADD</button>
      </div>
    </form>
  </div>;
}

export default BookCreate;
