import { useState } from "react"

import Comment from "./Comment"

export default function BlogCard ({admin}) {
    // state
    const [liked, setLiked] = useState(false)
    const [showComments, setShowComments] = useState(false)

    // functions
    const handleLike = (e) => {
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

    const numComments = 3;
    return (
        <>
        <div className="blog-card" id="unique">
            <h2 className='blog-title'>Title</h2>
            <p className='blog-text'>Laborum ad ut duis est consequat mollit reprehenderit irure officia ullamco dolore nisi consequat adipisicing. Et duis proident esse ea ex ea commodo. Proident commodo laborum ut proident enim occaecat quis aliquip aute sint proident culpa dolor nulla. Aliquip velit esse aute do ipsum nisi veniam reprehenderit esse consectetur ea. Ex nostrud sit culpa proident proident est. Aute qui do officia anim ut cillum. Sint enim reprehenderit nostrud cillum aute veniam. Et elit minim nulla aute nulla adipisicing reprehenderit ut est deserunt enim duis officia irure. Enim excepteur irure quis occaecat labore. Esse ea in nisi ullamco ex fugiat in nisi adipisicing. Voluptate eiusmod duis cillum sint duis cillum Lorem. Aliqua adipisicing velit deserunt occaecat labore exercitation commodo id mollit aliquip sit tempor ipsum incididunt. Ea ex ipsum duis mollit laborum anim elit dolor adipisicing anim dolor. Veniam et ullamco consequat commodo nulla irure anim laborum mollit.</p>
            <div className="buttons-container">
                <button className={liked === true ? "like-btn unfilled-heart hidden" : "like-btn unfilled-heart"} onClick={handleLike}>
                    <img className="heart-img" src='./../assets/img/unfilled_heart.svg'/>
                </button>
                <button className={liked === false ? "like-btn filled-heart hidden" : "like-btn filled-heart"} onClick={handleUnlike}>
                    <img className="heart-img" src='./../assets/img/filled_heart.svg'/>
                </button>
                <button className="comments-btn" onClick={handleShowComments}>
                    <p className="num-comments">{numComments}</p>
                    <img className='comments-img' src="./../assets/img/comments_icon.svg"/>
                </button>
            </div>
            <div className="admin-btn-container">
                <button className={admin === true ? "admin-btn" : "admin-btn hidden"}>
                    <h4 className="edit-post-btn">EDIT POST</h4>
                </button>
                <button className={admin === true ? "admin-btn" : "admin-btn hidden"}>
                    <h4 className="delete-post-btn">DELETE POST</h4>
                </button>
            </div>
        </div>
        <div className={showComments === false ? "comments-container hidden" : "comments-container"}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
        </>
    )
}