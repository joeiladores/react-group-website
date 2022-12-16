import Posts from './Posts';
import React, { useState } from 'react';

function Newsfeed() {

  // const [count, setCount] = useState([]);


  return (
    <div className="col-md-7 shadow border border-1 rounded-2 p-2">
      {/* POST COMPONENT **********************************************************/}
      {/* <Posts count={count}/> */}
      <div className="text-center">
        <h4>Posts</h4>
      </div>
      <Posts />
      <div className="ms-3 d-flex justify-content-center">
        <button id="more-button" className="btn btn-warning">ADD MORE</button>
      </div>

    </div>
  );
}

export default Newsfeed;
