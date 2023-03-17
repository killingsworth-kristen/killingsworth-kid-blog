import React, { useState } from 'react'

import API from './../utils/API.js'

import './style/NewComment.css'

export default function NewComment ({user, PostsId}) {
    const [commentBody, setCommentBody] = useState("")

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;
        setCommentBody(inputValue);
    }

    const handleSubmitNewComment = (e) => {
        // e.preventDefault();
        const commentObj = {body: commentBody, PostsId: PostsId, UsersId: user.sub}
        API.newComment(commentObj).then(res=>console.log(res))
        console.log(`API new comment`)
    }

    return (
        <>
        <section className='new-comment-container'>
            <form className='new-comment-form'> 
                <input type="text" className="comment-body" name="comment-body" onChange={handleInputChange}></input><br/>
                <button className='submit-comment-btn' onClick={handleSubmitNewComment}>Submit</button>
            </form>
        </section>
        </>
    )
}