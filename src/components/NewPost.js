import React, { useEffect, useState} from 'react';
import CloudinaryWidget from "./CloudinaryWidget";

import API from './../utils/API.js'

import './style/NewPost.css'

export default function NewPost ({postMode, setPostMode, openModal, setOpenModal}) {

    const [postTitle, setPostTitle] = useState("");
    const [postImg, setPostImg ] = useState("");
    const [postBody, setPostBody ] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === "post-title") {
            setPostTitle(inputValue)
        } else if (inputType === "post-body") {
            setPostBody(inputValue)
        } else {
            console.log("uh oh!")
        }

    }

    const handleNewPostSubmit = async (e) => {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.user).sub
        console.log(currentUser)
        let postObj = {
            title: postTitle,
            body: postBody,
            image: postImg,
            UsersId: currentUser
        }
        await API.newPost(postObj)
        setOpenModal(false);
        setPostTitle("");
        setPostBody("");
        setPostImg("");
    }
    
    return (
        <>
        <section className={openModal === true ? 'new-post-modal' : 'new-post-modal hidden'}>
            <div className='modal-header'>
                <h2 className='modal-title'>{postMode} Post</h2>
                <p className='modal-close' onClick={() => {setOpenModal(false)}}>X</p>
            </div>
            <div className='new-post-img-container'>
                <img className="new-post-img" src={postImg} />
            </div>
            <CloudinaryWidget setPostImg={setPostImg}/>
            <form className='new-post-form'>
                <label htmlFor="post-title">Title: </label>
                <input type="text" id="post-title" name="post-title" onChange={handleInputChange}></input><br/>
                <textarea id='post-body' name='post-body' rows="15" onChange={handleInputChange}></textarea><br/>
                <button id='submit-post-btn' onClick={handleNewPostSubmit}>Submit</button>
            </form>
        </section>
        </>
    )
}