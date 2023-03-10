import React, { useEffect, useState} from 'react';
import CloudinaryWidget from "./CloudinaryWidget";

// import API from './../../utils/API.js'

import './style/NewPost.css'

export default function NewPost ({postMode, setPostMode, openModal, setOpenModal}) {

    // useEffect(() => {
    //     API.NewPost()
    // },[])

    const [postTitle, setPostTitle] = ("");
    const [postImg, setPostImg ] = ("");
    const [postBody, setPostBody ] = ("");

    const handleNewPostSubmit = (e) => {
        e.preventDefault();

    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

    }
    
    return (
        <>
        <section className={openModal === true ? 'new-post-modal' : 'new-post-modal hidden'}>
            <div className='modal-header'>
                <h2 className='modal-title'>{postMode} Post</h2>
                <p className='modal-close' onClick={() => {setOpenModal(false)}}>X</p>
            </div>
            <CloudinaryWidget postImg={postImg} setPostImg={setPostImg}/>
            <form className='new-post-form'>
                <label htmlFor="post-title">Title: </label>
                <input type="text" id="post-title" name="post-title"/><br/>
                <textarea id='post-body' name='post-body' rows="15"/><br/>
                <button id='submit-post-btn' onClick={handleNewPostSubmit}>Submit</button>
            </form>
        </section>
        </>
    )
}