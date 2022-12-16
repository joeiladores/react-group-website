import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="row page-padding my-5">
        <div className="col-md-12">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;