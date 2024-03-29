import React, { useState} from 'react';
import CloudinaryWidget from "./CloudinaryWidget";

import API from './../utils/API.js'

import './style/NewPost.css'

export default function NewPost ({openModal, setOpenModal}) {

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

    const handleNewPostSubmit = () => {
        const currentUser = JSON.parse(localStorage.user).sub
        console.log(currentUser)
        const postObj = {
            title: postTitle,
            body: postBody,
            image: postImg,
            UsersId: currentUser
        }
        console.log(postObj)
        API.newPost(postObj).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.error(err)
            console.log(err.message)
            console.log(err.cause)
        })
        setOpenModal(false);
        setPostTitle("");
        setPostBody("");
        setPostImg("");
    }
    
    return (
        <>
        <section className={openModal === true ? 'new-post-modal' : 'new-post-modal hidden'}>
            <div className='modal-header'>
                <h2 className='modal-title'>Create Post</h2>
                <p className='modal-close' onClick={() => {setOpenModal(false)}}>X</p>
            </div>
            <div className='new-post-img-container'>
                <img className="new-post-img" src={postImg} alt=''/>
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