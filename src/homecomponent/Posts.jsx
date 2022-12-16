import React, { useState, useEffect } from 'react';

function Posts() {

  const [posts, setPosts] = useState([]);

    // TODO: set first render to 10 posts, then additional 10 posts......



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // setPosts(data);
        setPosts(data.slice(0,20));
      });
  }, []);

  return (
      posts.map(post => (
        <div className="m-3 p-2 border border-1 rounded-2">
          <h5>{post.title}</h5>
          <p className="text-smaller">{post.body}</p>
        </div>
      ))
  );
}

export default Posts;
