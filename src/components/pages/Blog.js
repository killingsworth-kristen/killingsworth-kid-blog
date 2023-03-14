import { useState, useEffect } from 'react'

import API from './../../utils/API.js'
import BlogCard from './../BlogCard.js'

import Footer from './../Footer.js'

import './../style/Blog.css'

export default function Blog ({admin, handleNewPost, loggedIn, user, postMode, setPostMode}) {
    // state
    const [posts, setPosts] = useState([])

    useEffect(()  => {
        const getAllPosts = async () => {
            let allPosts = await API.getPosts()
            // await allPosts.map((post => {postArr = [post.id, post.title, post.body, post.image, post.date]}))
            setPosts(allPosts)
        }
        getAllPosts()
    },[])

    return (
        <>
        <section className="blog-container">
            <button className={admin === true ? 'top-admin-btn' : 'top-admin-btn hidden'} onClick={handleNewPost}>
                <h2 className="add-post-btn">ADD POST</h2>
            </button>
           <div className='blog-posts-container'> 
                {posts.map((post) => {
                // console.log("this is the blogCard map: "+ post)
                return (<BlogCard key={post.id} 
                    postObj={post}
                    admin={admin} 
                    loggedIn={loggedIn}
                    user={user}
                    postMode={postMode}
                    setPostMode={setPostMode}/>)
            })}
            </div>
            <Footer />
        </section>
        </> 
    )
}