import { useState, useEffect, useContext } from 'react';
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import axios from "axios"
import BooksContext from "./context/books";
import "./App.css";

function App() {
  const { fetchBooks, bookList } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [])

  return <div className="main-content">
    <div className="title">Books To Read</div>
    <BookList bookList={bookList} ></BookList>
    <BookCreate bookList={bookList}></BookCreate>
  </div>;
}

export default App;
