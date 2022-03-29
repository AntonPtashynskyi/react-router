import { Route, Routes } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Container from './Container/Container';

import HomePage from './pages/HomePage';
import AuthorPage from './pages/AuthorPage';
import BooksList from './pages/BooksList';
import NotFound from './pages/NotFound';
import BookDetailsView from './pages/BookDetailsView';

export default function App() {
  return (
    <>
      <Container>
        <Navigation />
      </Container>
      <Container>
        <Routes>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/authors" element={<AuthorPage />}></Route>
          <Route path="/books/*" element={<BooksList />}>
            <Route path=":bookId" element={<BookDetailsView />}></Route>
          </Route>
          {/* <Route path="/books/:bookId" element={<BookDetailsView />}></Route> */}
        </Routes>
      </Container>
    </>
  );
}
