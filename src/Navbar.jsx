import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Group 3</Link>
        <button
          className="navbar-toggler myName"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myPages"
          aria-controls="myPages"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myPages">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to="/" className="list-group-item pe-3">Home</Link>
            <Link to="/about" className="list-group-item pe-3">About</Link>
            <Link to="/contact" className="list-group-item">Contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
