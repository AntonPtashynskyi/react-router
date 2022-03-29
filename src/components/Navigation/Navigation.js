import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className="navLink">
        Main
      </NavLink>

      <NavLink to="/authors" className="navLink">
        Author
      </NavLink>

      <NavLink to="/books" className="navLink">
        Books
      </NavLink>
    </nav>
  );
}
