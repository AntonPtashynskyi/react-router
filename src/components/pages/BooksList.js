import { useState, useEffect } from 'react';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';
import booksArray from '../books.json';
// import BookDetailsView from './BookDetailsView';

export default function BooksList() {
  const [books, setBooks] = useState([]);
  // const { pathname } = useLocation();

  useEffect(() => {
    setBooks(booksArray.books);
  }, []);

  return (
    <div>
      {books && (
        <>
          <h2>Books to read!</h2>
          <ul>
            {books.map(book => (
              <li key={book.id}>
                <NavLink to={`${book.id}`}>{book.title}</NavLink>
              </li>
            ))}
          </ul>
        </>
      )}

      <Outlet context={books} />
    </div>
  );
}
