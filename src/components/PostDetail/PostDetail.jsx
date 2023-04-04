import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    const { id, title, body, useId } = post;
    const navigate = useNavigate()
    const backNavigate = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Id:{id}</h1>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={backNavigate}>Go Back</button>
        </div>
    );
};

export default PostDetail;