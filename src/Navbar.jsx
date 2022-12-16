import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  
  return (

    <nav className="navbar navbar-expand-lg shadow page-padding sticky-top py-4">
      <div className="container-fluid px-5">
        <Link to="/" className="navbar-brand"><i class="fa-regular fa-file-code"></i><i class="fa-solid fa-g"></i>roup 3</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><Link to="/" className="nav-link active" >
              Home
            </Link></li>
            <li class="nav-item"><Link to="/about" className="nav-link px-3">
              About
            </Link></li>
            <li class="nav-item"><Link to="/contact" className="nav-link">
              Contact
            </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// <nav className="navbar navbar-expand-lg shadow page-padding">
    //   <div className="container-fluid">
    //     <Link to="/" className="navbar-brand">
    //       Group 3
    //     </Link>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li class="nav-item"><CustomLink to="/" className="nav-link active pe-3">
    //           Home
    //         </CustomLink></li>
    //         <li class="nav-item"><Link to="/about" className="nav-link pe-3">
    //           About
    //         </Link></li>
    //         <li class="nav-item"><Link to="/contact" className="nav-link">
    //           Contact
    //         </Link></li>
    //       </ul>
    //     </div>
    //   </div>

    // </nav>

    // <div className="navbar align-items-center d-flex align-items-center shadow page-padding">
    // <Link to="/" className="navbar-brand">
    //  Group 3
    // </Link>
    // <ul>
    //  <CustomLink to="/" className="active">Home</CustomLink>
    //  <CustomLink to="/about">About</CustomLink>
    //  <CustomLink to="/contact">Contact</CustomLink>
    //</ul>
  //</div>
  
  //function CustomLink({to, children, ...props}) {
//  const resolvedPath = useResolvedPath(to)    
//  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
//  return (
//      <li className={isActive ? "active" : ""}>
//          <Link to={to} {...props}>{children}</Link>
//      </li>
//  )
//}
