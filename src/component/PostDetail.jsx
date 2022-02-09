import axios from "axios"
import React, { useEffect, useState } from 'react';

function PostDetail(props) {
    const [detailpost, setdetailpost] = useState({})

    useEffect(() => {
        console.log(props);
        console.log(props.match.param.postid);
        fetchDetailPost()
    }, [])

    const fetchDetailPost = async () => {
        const postId = props.match.param.postid
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        try {
            const response = await axios.get(url)
            setdetailpost(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    return <div>
        <p>Title-{detailpost.title}</p>
        <p>ID-{detailpost.id}</p>
        <p>Body-{detailpost.body}</p>
        <p>user ID-{detailpost.userId}</p>
    </div>;
}

export default PostDetail;
