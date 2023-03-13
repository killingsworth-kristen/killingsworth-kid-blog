import { useState, useEffect } from 'react'

import API from './../utils/API.js'

import './style/Comment.css'

export default function Comment ({username, body, user, loggedIn, commentOwner, commentObj, admin}) {
    // state
    const [editComment, setEditComment] = useState(false);
    const [commentBody, setCommentBody] = useState("");
    const [showCommentBtns, setShowCommentButtons] = useState(false);


    useEffect(()=>{
        if (loggedIn === false) {
            setShowCommentButtons(false);
            return;
        } else if (user.sub === commentOwner) {
            console.log(`commentOwner === user.sub`)
            console.log(commentObj.id, commentOwner, user.sub)
            setShowCommentButtons(true);
            return;
        } else if (admin === true) {
            setShowCommentButtons(true);
        } else {
            console.log(`commentOwner !== user.sub`)
            console.log(commentObj.id, commentOwner, user.sub)
            setShowCommentButtons(false);
            return;
        }
    },[])

    const handleEditComment = (e) => {
        e.preventDefault();
        if (loggedIn === false) {
            alert(`You must be logged in to edit/delete a comment`)
            return;
        } else if (e.target.classList.value.includes(`commentOwner-${commentOwner}`)) {
            if (commentOwner === user.sub) {
                setEditComment(true)
            } else {
                alert(`You are not the owner of this comment!`)
            }
        } else {
            console.log(`catching on else`)
        }
    }

    const handleDeleteComment = (e) => {
        e.preventDefault();
        if (loggedIn === false) {
            alert(`You must be logged in to edit/delete a comment`)
            return;
        } else if (e.target.classList.value.includes(`commentOwner-${commentOwner}`)) {
            if (commentOwner === user.sub) {
                API.deleteComment(commentObj.id)
                window.location.reload()
            } else {
                alert(`You are not the owner of this comment!`)
            }
        } else {
            console.log(`catching on else`)
        }
    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;
        setCommentBody(inputValue);
    }

    const handleSubmitNewComment = (e) => {
        // e.preventDefault();
        const editCommentObj = {body: commentBody, PostsId: commentObj.PostsId, UsersId: user.sub}
        const commentId = commentObj.id
        API.updateComment(editCommentObj, commentId)
        setEditComment(false)
    }

    const handleEditCancel = (e) => {
        e.preventDefault()
        setEditComment(false)
    }

    return (
        <>
        <div className='comment-card-container'>
            <form className={editComment === false ? 'new-comment-form hidden' : 'new-comment-form'}> 
                <button className='cancel-edit-btn' onClick={handleEditCancel}>CANCEL</button>
                <input type="text" className="comment-body" name="comment-body" onChange={handleInputChange}></input><br/>
                <button className='submit-comment-btn' onClick={handleSubmitNewComment}>Submit</button>
            </form>
            <div className={editComment === false ? "comment-card" : "comment-card hidden"}>
                <div className='comment-text'>
                    <h6 className='comment-user'>{username}</h6>
                    <p className='comment-body'>{body}</p>
                </div>
                <div className={showCommentBtns === true ? 'comment-btns-container': 'comment-btns-container hidden'}>
                    <button className={`edit-comment-btn commentOwner-${commentOwner}`} id={`edit-comment-${commentObj.id}`} onClick={handleEditComment}>EDIT COMMENT</button>
                    <button className={`delete-comment-btn commentOwner-${commentOwner}`} id={`delete-comment-${commentObj.id}`} onClick={handleDeleteComment}>DELETE COMMENT</button>
                </div>
            </div>
        </div>
        </>
    )
}