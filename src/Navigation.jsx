import { NavLink, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg shadow py-4 sticky-top bg-light page-padding">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><i class="fa-regular fa-file-code"></i><i class="fa-solid fa-g"></i>roup 3
        </Link>
        <div className="d-flex flex-space-between">
          <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "link-active" : "link")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active" : "link")}>
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;