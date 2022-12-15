import React, { useState, useEffect } from "react"
import axios from "axios"

function DataFetching() {

    const [post, setPost] = useState({})
    const [id] = useState(1)

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
        console.log(res)
        setPost(res.data)
        })
      
    }, [])


    return (
        <div>
            <div>{post.title}</div>
            {/* {posts.map(post => (<li>{post.title}</li>))} */}
        
        </div>
    )

}

export default DataFetching