import { useEffect, useState } from "react"

import API from './../utils/API.js'
import Comment from "./Comment"

export default function BlogCard ({admin, handleEditPost, postObj, loggedIn, user}) {
    // declared variables
    let numLikes = postObj.Likes.length
    let numComments = postObj.Comments.length
    let likedPost = localStorage.getItem(`likedPost${postObj.id}`)

    // state
    const [liked, setLiked] = useState(false);
    const [LikesCount, setLikesCount] = useState(numLikes)
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState(postObj.Comments);

    useEffect( () => {
        API.getAllLikes().then((res)=>{
            const allLikes = res
            allLikes.map((like)=>{
                if (like.PostsId === postObj.id) {
                    if (user.sub === like.UsersId) {
                        setLiked(true)
                        localStorage.setItem(`likedPost${like.PostsId}`, true)
                        likedPost = localStorage.getItem(`likedPost${like.PostsId}`)
                    } else {
                        setLiked(false)
                        localStorage.setItem(`likedPost${postObj.id}`, false)
                        return;
                    }
                } else {
                    return;
                }
            })
            if (likedPost === null) {
                likedPost = false
                localStorage.setItem(`likedPost${postObj.id}`, false)
            }
        })      
    },[])
    

    // functions
    const handleLike = (e) => {
        if (loggedIn === false) {
            console.log(`loggedIn is strictly false`)
            alert("You must be logged in to like a post!")
            return;
        } else {
            const likedPost = postObj.id
            console.log(likedPost, user.sub)
            const likeObj = {like: true, PostsId: likedPost, UsersId: user.sub}
            API.like(likeObj).then((res)=>{
                localStorage.setItem(`likeId${postObj.id}`, res.id)
            })
            localStorage.setItem(`likedPost${postObj.id}`, true)
            setLiked(true);
            setLikesCount(LikesCount + 1)
            numLikes++;
        }

    }

    const handleUnlike = (e) => {
        const likeId = localStorage.getItem(`likeId${postObj.id}`)
        API.unlike(likeId)
        setLiked(false);
        localStorage.setItem(`likedPost${postObj.id}`, false)
        localStorage.setItem(`likeId${postObj.id}`, null)
        setLikesCount(LikesCount - 1)
        numLikes = numLikes - 1;
    }

    const handleShowComments = (e) => {
        if (showComments === false) {
            setShowComments(true)
        } else {
            setShowComments(false)
        };
    }

    return (
        <>
        <div className="blog-card" id={postObj.id}>
            <h2 className='blog-title'>{postObj.title}</h2>
            <img className='blog-picture' src={postObj.image} />
            <p className='blog-text'>{postObj.body}</p>
            <p className='blog-date'>{postObj.date}</p>
            <div className="buttons-container">
                <p className="num-comments">{LikesCount}</p>
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
                <button className={admin === true ? "admin-btn" : "admin-btn hidden"} onClick={handleEditPost}>
                    <h4 className="edit-post-btn">EDIT POST</h4>
                </button>
                <button className={admin === true ? "admin-btn" : "admin-btn hidden"}>
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