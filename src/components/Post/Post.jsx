import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h1>Id:{id}</h1>
            <p>Title:{title}</p>
            <Link to={`/post/${id}`}> <button>Show Post</button></Link>
            <Link to={`/post/${id}`}>Show detail post</Link>
            <button onClick={handleNavigate}>Show detail post</button>

        </div>
    );
};

export default Post;