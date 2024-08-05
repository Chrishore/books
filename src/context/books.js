import { createContext, useState } from 'react';
import axios from "axios"

const BooksContext = createContext();

function Provider({ children }) {
    const [bookList, updateList] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3002/books');
        updateList(response.data);
    };

    const removeBook = (id) => {
        axios.delete(`http://localhost:3002/books/${id}`);
        updateList(bookList.filter(a => a.id !== id));
    };

    const editBook = async(updatedBookObj) => {
        const response = await axios.put(`http://localhost:3002/books/${updatedBookObj.id}`, updatedBookObj);
        const newList = bookList.map((i) => {
            if (i.id == updatedBookObj.id) {
                return response.data;
            }
            else {
                return i;
            }
        });
        updateList(newList);
    };



    const valueToShare = {
        bookList,
        updateList,
        fetchBooks,
        removeBook
    }
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;

