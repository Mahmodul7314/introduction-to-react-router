
import { Link, useNavigate } from "react-router-dom";
const SinglePost = ({post}) => {
      const {id,title} = post;

        const navigate = useNavigate();

      const userStyle ={
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'20px'
    }
      
        const handleShowDetail =() =>{
            navigate(`/post/${id}`);
        }
      
    return (
       <div style={userStyle}>
            <h2>Post Id: {id}</h2>
            <h4>Post Title: {title}</h4>
           <Link to={`/post/${id}`}>Post Details</Link>
           <Link to={`/post/${id}`}><button> Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default SinglePost;


