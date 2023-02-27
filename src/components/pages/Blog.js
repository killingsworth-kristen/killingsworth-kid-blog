import { useState } from 'react'

import BlogCard from './../BlogCard'

import './../style/Blog.css'

export default function Blog ({admin}) {
    // state
    

    return (
        <>
        <section className="blog-container">
            <button className={admin === true ? 'top-admin-btn' : 'top-admin-btn hidden'}>
                <h2 className="add-post-btn">ADD POST</h2>
            </button>
            <BlogCard admin={admin}/>
            <BlogCard admin={admin}/>
            <BlogCard admin={admin}/>
            <BlogCard admin={admin}/>
        </section>
        </> 
    )
}