import booksArray from '../books.json';
import { useParams, useOutletContext } from 'react-router-dom';

export default function BookDetailsView({ bookList }) {
  const { bookId } = useParams();
  const booksProps = useOutletContext();

  console.log(booksProps);

  const books = booksArray.books;
  const currentBook = books.find(book => book.id === Number(bookId));

  return (
    <div>
      <i>Book {bookId}</i>
      {currentBook && (
        <>
          {' '}
          <h3>{currentBook.title}</h3>
          <p>{currentBook.descr}</p>
        </>
      )}
    </div>
  );
}
