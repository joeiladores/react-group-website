

function Home() {
  return (
    <div>
      <div className="d-flex align-items-end flex-column">
        <div className="col-7 border rounded mt-5 me-5">
          <div className="col-11 ">
            <div className="p-3 border rounded mt-5 ms-3">
              <h3 className>Post Title</h3>
              <p className="mt-3">Post Body Here</p>
            </div>
          </div>
          <div className="col-11">
            <div className="p-3 border rounded mt-5 ms-3 mb-5">
              <h3 className>Post Title</h3>
              <p className="mt-3">Post Body Here</p>
            </div>
          </div>
          <ul className="ms-3">
            <li>Post Title</li>
            <li>Post Title</li>
            <li>Post Title</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
