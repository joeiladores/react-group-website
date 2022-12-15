function Layout({ children }) {
  return (
    <div class="row">
      <div className="col-12">
      <div className="container p-5 border m-5 rounded shadow-lg">
        <div className="row">
          <div className="col-md-12">
            <img
              src="https://dy9hpnbyn8tl0.cloudfront.net/kodego-large.svg"
              alt=""
            />
            <h4 className="mt-4">Daily Attendance Form</h4>
            {children}
          </div>
        </div>
      </div>
      </div>
      <p className="text-center">
        <small>
          Developed by <strong>WD29</strong>
        </small>
      </p>
    </div>
  );
}

export default Layout;
