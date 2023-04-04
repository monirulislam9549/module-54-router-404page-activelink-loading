import React from 'react';
import './AllFriend.css'
import { Link } from 'react-router-dom';

const AllFriend = ({ friend }) => {
    const { name, email, id, phone } = friend
    console.log(friend);
    return (
        <div className='friend'>
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <p><Link to={`/friend/${id}`}>Show me Details</Link></p>
        </div>
    );
};

export default AllFriend;