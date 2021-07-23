import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-light">
      <ul className="navbar-nav">
        <Link className="navbar-brand" to="/">
          CRUD
        </Link>
        <li className="nav-item">
          <Link className="nav-link" to="/create-update">
            Create User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
