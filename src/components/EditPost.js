import { useEffect, useState } from 'react';

import CloudinaryWidget from './CloudinaryWidget.js';
import API from '../utils/API.js';

import './style/EditPost.css'

export default function EditPost ({postMode, setPostMode, user}) {
    // state
    const [postObj, setPostObj] = useState({});
    const [postTitle, setPostTitle] = useState('');
    const [postImg, setPostImg ] = useState('');
    const [postBody, setPostBody ] = useState('');


    useEffect(()=>{
        const editTarget = localStorage.getItem('edit')
        if (editTarget === 'null' || editTarget === '' || editTarget === null) {
            return;
        } else {
            const blogCardNum = editTarget.split(' ')[1]
            const postId = blogCardNum.split('blogCard')[1]
            API.getOnePost(postId).then((res)=>{
                setPostObj(res);
                setPostBody(res.body);
                setPostImg(res.image);
                setPostTitle(res.title);
            })
        }
    },[])

    // functions
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

    const handleEditCancel = () => {
        setPostMode(`Add`);
    }

    const handleEditPostSubmit = (e) => {
        const editPostObj = {title: postTitle, body: postBody, image: postImg, UsersId: user.sub}
        const currentPost= postObj.id
        API.updatePost(editPostObj, currentPost)
    }

    return (
        <section className={postMode !== 'Edit' ? 'edit-post-modal hidden' : `edit-post-modal`}>
            <div className="blog-content-edit">
                <div className="white">
                    
                    <h2 className="edit-post-header">EDIT POST</h2>
                    <img className='edit-blog-picture' src={postImg}/>
                    <CloudinaryWidget setPostImg={setPostImg} postMode={postMode}/>
                </div>
                <form className='edit-post-form'>
                    <label htmlFor="edit-post-title">Title: </label>
                    <input type="text" className="edit-post-title" name="edit-post-title" onChange={(e)=>setPostTitle(e.target.value)} value={postTitle}></input><br/>
                    <textarea className='edit-post-body' name='edit-post-body' rows="15" onChange={(e)=>setPostBody(e.target.value)} value={postBody}></textarea><br/>
                    <button className='edit-submit-post-btn' onClick={handleEditPostSubmit}>Submit</button>
                </form>
                <button className='cancel-edit-post-btn' onClick={handleEditCancel}>CANCEL</button>
            </div>
        </section>
    )
}