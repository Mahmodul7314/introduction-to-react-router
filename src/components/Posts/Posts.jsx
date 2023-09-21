import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";


const Posts = () => {
    const posts =useLoaderData();
    return (
        <>
        <h2>Posts: {posts.length}</h2>
        <div className="Users">
          
            {
                posts.map(post =><SinglePost key={post.id} post={post}></SinglePost>)
            }
        </div>
        </>
    );
};

export default Posts;