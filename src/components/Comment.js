import './style/Comment.css'

export default function Comment ({username, body}) {
    return (
        <>
        <div className="comment-card">
            <h6 className='comment-user'>{username}</h6>
            <p className='comment-text'>{body}</p>
        </div>
        </>
    )
}