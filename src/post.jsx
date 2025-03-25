export default function PostUse({post}){
    return(
        <div className="card">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}