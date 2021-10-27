import React, {useEffect, useState} from "react";
import axios from "axios";
import PostCard from "../layout/postCard";
import ErrorMsg from "../helpers/errorMsg";
import Loader from "../helpers/loader";

const PostsLists = () =>{
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        (async () => {
            const getPosts = await axios.get('http://localhost:5050/posts-list', {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            })
            setPosts(getPosts.data)
            setLoader(false)
        })()
    }, [])

    let i = 0
    return(
        <div className="container mt-3">
            {loader 
            ? 
                <Loader /> 
            :
                <div className="row d-flex justify-content-between">
                    {posts.code === 500 
                        ?  
                            <ErrorMsg code={posts.code} message={posts.message} action={'/login'} />
                        : 
                            posts.map(post => {
                                return(
                                    <PostCard key={i++} title={post.title} body={post.body} id={post.id}/>
                                )
                            })
                    }
                </div>
            }
        </div>
    )
}

export default PostsLists