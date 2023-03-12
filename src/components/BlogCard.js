import { useState } from "react"

import API from './../utils/API.js'
import Comment from "./Comment"
import Navbar from "./Navbar"

export default function BlogCard ({admin, handleEditPost, postObj}) {
    // state
    const [liked, setLiked] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState(postObj.Comments)

    // functions
        const handleLike = (e) => {
        API.like("1","1234")
        setLiked(true);
    }

    const handleUnlike = (e) => {
        setLiked(false);
    }

    const handleShowComments = (e) => {
        if (showComments === false) {
            setShowComments(true)
        } else {
            setShowComments(false)
        };
    }

    let numLikes = postObj.Likes.length
    let numComments = postObj.Comments.length

    return (
        <>
        <div className="blog-card" id="unique">
            <h2 className='blog-title'>{postObj.title}</h2>
            <p className='blog-text'>{postObj.body}</p>
            <p className='blog-date'>{postObj.date}</p>
            <div className="buttons-container">
                <p className="num-comments">{numLikes}</p>
                <button className={liked === true ? "like-btn unfilled-heart hidden" : "like-btn unfilled-heart"} onClick={handleLike}>
                    <img className="heart-img" src='./../assets/img/unfilled_heart.svg' alt="Like button"/>
                </button>
                <button className={liked === false ? "like-btn filled-heart hidden" : "like-btn filled-heart"} onClick={handleUnlike}>
                    <img className="heart-img" src='./../assets/img/filled_heart.svg' alt="Unliike button"/>
                </button>
                <button className="comments-btn" onClick={handleShowComments}>
                    <p className="num-comments">{numComments}</p>
                    <img className='comments-img' src="./../assets/img/comments_icon.svg" alt="Comments button"/>
                </button>
            </div>
            <div className="admin-btn-container">
                <button className={admin === 'true' ? "admin-btn" : "admin-btn hidden"} onClick={handleEditPost}>
                    <h4 className="edit-post-btn">EDIT POST</h4>
                </button>
                <button className={admin === 'true' ? "admin-btn" : "admin-btn hidden"}>
                    <h4 className="delete-post-btn">DELETE POST</h4>
                </button>
            </div>
        </div>
        <div className={showComments === false ? "comments-container hidden" : "comments-container"}>
            {comments.map((comment)=>{
                return (<Comment 
                    key={comment.id}
                    username={comment.UsersId}
                    body={comment.body}
                />)
            })}
        </div>
        </>
    )
}