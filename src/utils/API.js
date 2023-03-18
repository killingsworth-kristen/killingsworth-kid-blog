// in dev mode
// const URL_PREFIX = "http://localhost:3001"

// in prod mode
const URL_PREFIX= "https://killingsworth-kid-backend-2egfgsl7ea-uc.a.run.app"

const API = {
    // token call
    postToken: (token) => {
        // get user from token
        return fetch(`${URL_PREFIX}/users/token`, {
            method: "POST",
            body: JSON.stringify({token: `${token}`}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res);
            res.json()});
    },

    // Like calls
    getAllLikes: () =>{
        // get all likes
        return fetch(`${URL_PREFIX}/likes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },

    like: (likeObj) => {
        // post/create new like
        return fetch(`${URL_PREFIX}/likes`, {
            method: "POST",
            body: JSON.stringify(likeObj),
            mode: 'cors',
            keepalive: true,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },

    unlike: (likeId) => {
        // delete like
        return fetch(`${URL_PREFIX}/likes/${likeId}`, {
            method: "DELETE",
            mode: 'cors',
            keepalive: true,
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json());
    },

    // post API calls
    getPosts: () => {
        // get all posts
        return fetch(`${URL_PREFIX}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
    },

    getOnePost: (postId) => {
        // get all posts
        return fetch(`${URL_PREFIX}/posts/${postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    newPost: (postObj) => {
        // post/create new post
        return fetch(`${URL_PREFIX}/posts/`, {
            method: "POST",
            mode: "cors",
            keepalive: true,
            body: JSON.stringify(postObj),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
    },

    updatePost: (editPostObj, currentPost) => {
        // put/update post
        return fetch(`${URL_PREFIX}/posts/${currentPost}`, {
            method: "PUT",
            body: JSON.stringify(editPostObj),
            mode: 'cors',
            keepalive: true,
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
    },

    deletePost: (currentPost) => {
        // delete post
        console.log(currentPost)
        return fetch(`${URL_PREFIX}/posts/${currentPost}`, {
            method: "DELETE",
            mode: 'cors',
            keepalive: true,
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
    },

    // comment API calls
    newComment: (commentObj) => {
        // post/create new comment
        return fetch(`${URL_PREFIX}/comments`, {
            method: "POST",
            body: JSON.stringify(commentObj),
            mode: 'cors',
            keepalive: true,
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json());
    },

    updateComment: (editCommentObj, commentId) => {
        // put/update comment
        return fetch(`${URL_PREFIX}/comments/${commentId}`, {
            method: "PUT",
            body: JSON.stringify(editCommentObj),
            mode: 'cors',
            keepalive: true,
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json());
    },
    
    deleteComment: (currentComment) => {
        // delete comment
        return fetch(`${URL_PREFIX}/comments/${currentComment}`, {
            method: "DELETE",
            mode: 'cors',
            keepalive: true,
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json());
    }

}

export default API