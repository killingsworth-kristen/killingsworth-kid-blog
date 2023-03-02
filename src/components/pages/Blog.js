import { useState } from 'react'

import BlogCard from './../BlogCard'

import './../style/Blog.css'

export default function Blog ({admin, handleNewPost, handleEditPost}) {
    // state
    
    return (
        <>
        <section className="blog-container">
            <button className={admin === true ? 'top-admin-btn' : 'top-admin-btn hidden'} onClick={handleNewPost}>
                <h2 className="add-post-btn">ADD POST</h2>
            </button>
            <BlogCard admin={admin} handleEditPost={handleEditPost}/>
            <BlogCard admin={admin} handleEditPost={handleEditPost}/>
            <BlogCard admin={admin} handleEditPost={handleEditPost}/>
            <BlogCard admin={admin} handleEditPost={handleEditPost}/>
        </section>
        </> 
    )
}