import axios from "axios"
import { useEffect, useState } from "react";


function PostLists(props) {
    const [posts, setposts] = useState([])
    useEffect(() => {
        fetchPost()
    }, [])
    const fetchPost = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts"
            const response = await axios.get(url)
            setposts(response.data)
        } catch (err) {
            console.log(err);
        }
    }
    const navigatepostdetail = (postId) => {
        props.history.push(`/posts/${postId}`)
    }
    return <div>
        {posts.map((post) => {
            return <p key={post.id} onClick={() => { navigatepostdetail(post.id) }}>{post.title}</p>
        })
        }
    </div>;
}

export default PostLists;
