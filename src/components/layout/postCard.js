import React from "react";

const PostCard = (props) => {
    return(
        <div className="card mt-3 w-50">
            <div className="card-body">
                {props.img
                    ?
                    <div>
                        <img src={props.img} className="card-img-top" alt={props.imgTitle} />
                        <p>{props.id}</p>
                    </div>
                    :
                    <div>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.body}</p>
                        <p className="card-text"><small className="text-muted">{props.id}</small></p>
                    </div>
                }

            </div>
        </div>
    )
}

export default PostCard