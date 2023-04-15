import { useEffect, useState } from "react"

import './style/BlogCard.css'
import API from './../utils/API.js'
import Comment from "./Comment"
import NewComment from "./NewComment.js"
// import EditPost from "./EditPost.js"

export default function BlogCard ({admin, postObj, loggedIn, user, postMode, setPostMode}) {
    // declared variables
    let numLikes = postObj.Likes.length
    let numComments = postObj.Comments.length
    let likedPost = localStorage.getItem(`likedPost${postObj.id}`)

    // state
    const [liked, setLiked] = useState(false);
    const [LikesCount, setLikesCount] = useState(numLikes)
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState(postObj.Comments);
    const [showNewComment, setShowNewComments] = useState(false);
    const [newComment, setNewComment] = useState("ADD COMMENT");


    useEffect( () => {
        if (loggedIn === false) {
            setLiked(false)
            // setShowCommentButtons(false);
            localStorage.setItem(`likedPost${postObj.id}`, false)
            return;
        }
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
        // comments.map((comment)=>{
        //     if (user.sub === comment.UsersId) {
        //         console.log(`commentOwner === user.sub`)
        //         console.log(comment.id, comment.UsersId, user.sub)
        //         setShowCommentButtons(true);
        //         return;
        //     } else {
        //         console.log(`commentOwner !== user.sub`)
        //         console.log(comment.id, comment.UsersId, user.sub)
        //         setShowCommentButtons(false);
        //         return;
        //     }
        // })  
    },[loggedIn])
    

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

    const handleShowNewComment = (e) => {
        e.preventDefault()
        if (loggedIn == false) {
            alert(`you must be logged in to add a comment!`)
            return;
        }
        if (showNewComment === false) {
            setNewComment("CANCEL");
            setShowNewComments(true);
            e.target.classList.add("red")
        } else {
            setNewComment("ADD COMMENT");
            setShowNewComments(false);
            e.target.classList.remove('red');
        }
    }

    const handleEditPostMode = (e) => {
        setPostMode('Edit')
        console.log(e.target.parentNode.classList)
        localStorage.setItem('edit',e.target.parentNode.classList)
    }

    const handleDeletePost = async () => {
        try {
        API.deletePost(postObj.id)
        window.location.reload()
        } catch (err) { 
            console.log(err)
        }
    }

    return (
        <>
        <div className="blog-card" id={postObj.id}>
            <div className="blog-content">
                <h2 className='blog-title'>{postObj.title}</h2>
                <img className='blog-picture' src={postObj.image} />
                <p className='blog-text'>{postObj.body}</p>
                <p className='blog-date'>{postObj.date}</p>
            </div>
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
                <button className={admin === true ? `admin-btn blogCard${postObj.id}` : `admin-btn blogCard${postObj.id} hidden`} onClick={handleEditPostMode}>
                    <h4 className="edit-post-btn">EDIT POST</h4>
                </button>
                <button className={admin === true ? "admin-btn" : "admin-btn hidden"}>
                    <h4 className="delete-post-btn" onClick={handleDeletePost}>DELETE POST</h4>
                </button>
            </div>
        </div>
        <div className={showComments === false ? "comments-container hidden" : "comments-container"}>
            <div className="new-comment-container">
                <button className="new-comment-btn" onClick={handleShowNewComment}>{newComment}</button>
                <div className={showNewComment === false ? "hidden" : ""}> 
                    <NewComment user={user} PostsId={postObj.id}/>
                </div>
            </div>
            {comments.map((comment)=>{
                return (<Comment 
                    key={comment.id}
                    username={comment.User.name}
                    commentOwner={comment.UsersId}
                    body={comment.body}
                    user={user}
                    loggedIn={loggedIn}
                    commentObj={comment}
                    admin={admin}
                />)
            })}
        </div>
        </>
    )
}