import React, {useEffect, useState} from "react";
import axios from "axios";
import PostCard from "../layout/postCard";
import ErrorMsg from "../helpers/errorMsg";
import Loader from "../helpers/loader";

const PhotosLists = () =>{
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true)
    const [counter, setCounter] = useState({
        limit: 10,
        offset: 0,
        show: false
    })


    useEffect(() => {

        (async () => {
            const getPhotos = await axios.get(`http://localhost:5050/photos-list?limit=${counter.limit}&offset=${counter.offset}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            })
            setPosts(getPhotos.data)
            setLoader(false)
        })()
    }, [counter])

    const nextPage = () => {
        setLoader(true)
        setCounter(prevState => ({
            limit: prevState.limit + 10,
            offset: prevState.offset + 10,
            show: true
        }))

    }

    const prevPage = () => {
        setLoader(true)

        setCounter(prevState => ({
            limit: prevState.limit - 10,
            offset: prevState.offset - 10
        }))

    }
    
    let i = 0
    return(
        <div className="container mt-3">
            {loader 
            ? 
                <Loader /> 
            : 
            <div>
                {posts.code === 500
                    ?
                        <ErrorMsg code={posts.code} message={posts.message} action={'/login'} />
                    :
                    <div>
                        <div className="d-flex justify-content-center">    
                            <button className="btn btn-primary" onClick={prevPage} style={{display: counter.show ? "block" : 'none'}}>Prev page </button>
                            <button className="btn btn-primary" onClick={nextPage}>Next page </button>
                        </div>
                        <div className="row d-flex justify-content-between">
                            
                                {posts.map(post => {
                                    return (
                                        <PostCard key={i++} img={post.url} imgTitle={post.title} id={post.id}/>
                                    )
                                })}
                        </div>
                    </div>
                 }
            </div>    
            }
        </div>
    )
}

export default PhotosLists