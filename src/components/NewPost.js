import React from 'react';
import CloudinaryWidget from "./CloudinaryWidget";

import './style/NewPost.css'

export default function NewPost ({postMode, setPostMode, openModal, setOpenModal}) {

    return (
        <>
        <section className={openModal === true ? 'new-post-modal' : 'new-post-modal hidden'}>
            <div className='modal-header'>
                <h2 className='modal-title'>{postMode} Post</h2>
                <p className='modal-close' onClick={() => {setOpenModal(false)}}>X</p>
            </div>
            <CloudinaryWidget />
            <form className='new-post-form'>
                <label for="post-title">Title: </label>
                <input type="text" id="post-title" name="post-title"/><br/>
                <textarea id='post-body' name='post-body' rows="15"/><br/>
                <input type='submit' id='submit-post-btn' name='submit-post-btn'/>
            </form>
        </section>
        </>
    )
}