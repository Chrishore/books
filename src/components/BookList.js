import Bookshow from "./BookShow.js";
import { useContext } from 'react';
import BooksContext from "../context/books";

import "./BookShow.css"


function BookList() {
  const { bookList } = useContext(BooksContext);
  console.log(bookList);
  const showList = bookList.map((book) => {
    return <Bookshow book={book} key={book.id}></Bookshow>
  })
  return <div className="bookshow" >
    {showList}
  </div>;
}

export default BookList;
