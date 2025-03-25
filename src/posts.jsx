import { use } from "react"
import PostUse from "./post";
export default function Posts({postsPromice}){
    const posts =use (postsPromice);
    console.log(posts);
    return(
        <div>
            <h3>post {posts.length}</h3>
            {
                posts.map(post=><PostUse key={post.id} post={post}></PostUse>)
            }
        </div>
    )
}