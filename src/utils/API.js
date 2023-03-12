// in dev mode
const URL_PREFIX = "http://localhost:3001"
// in prod mode
// const URL_PREFIX= "deployed API url"

const API = {
    postToken: (token) => {
        // get user from token
        return fetch(`${URL_PREFIX}/users/token`, {
            method: "POST",
            body: JSON.stringify({token: `${token}`}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },

    getUserFromToken: () => {
        return fetch(`${URL_PREFIX}/users/token`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },

    like: (currentPost, currentUser) => {
        // post/create new like
        return fetch(`${URL_PREFIX}/likes`, {
            method: "POST",
            // body: {
            //     "like": true,
            //     "PostsId": `${currentPost}`,
            //     "UsersId": `${currentUser}`
            // },
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },

    unlike: (currentLike) => {
        // delete like
        return fetch(`${URL_PREFIX}/likes/${currentLike}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },

    // post API calls
    getPosts: () => {
        // get all posts
        return fetch(`${URL_PREFIX}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    newPost: (postObj) => {
        // post/create new post
        console.log(postObj)
        return fetch(`${URL_PREFIX}/posts`, {
            method: "POST",
            body: JSON.stringify(postObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    updatePost: (currentPost, currentUser, currentBody, currentTitle, currentImg) => {
        // put/update post
        // return fetch(`${URL_PREFIX}/posts/${currentPost}`, {
        //     method: "PUT",
        //     body: {
        //         "title":`${currentTitle}`,
        //         "body":`${currentBody}`,
        //         "image":`${currentImg}`,
        //         "UsersId":`${currentUser}`
        //     },
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // }).then(res => res.json())
    },

    deletePost: () => {
        // delete post
        // return fetch(`${URL_PREFIX}/posts/${currentPost}`, {
        //     method: "DELETE",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "authorization": `Bearer ${token}`
        //     }
        // }).then(res => res.json())
    },

    // comment API calls
    newComment: (currentBody, currentPost, currentUser) => {
        // post/create new comment
        return fetch(`${URL_PREFIX}/comments`, {
            method: "POST",
            body: {
                "body": `${currentBody}`,
                "PostsId": `${currentPost}`,
                "UsersId":`${currentUser}`
            },
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json());
    },

    updateComment: (currentComment, currentBody, currentPost, currentUser) => {
        // put/update comment
        return fetch(`${URL_PREFIX}/comments/${currentComment}`, {
            method: "PUT",
            body: {
                "body": `${currentBody}`,
                "PostsId": `${currentPost}`,
                "UsersId":`${currentUser}`
            },
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json());
    },
    
    deleteComment: (currentComment) => {
        // delete comment
        return fetch(`${URL_PREFIX}/comments/${currentComment}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json());
    }

}

export default API