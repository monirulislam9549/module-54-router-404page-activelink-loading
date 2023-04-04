import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()

    return (
        <div>
            <h1>Everything is about this person</h1>
            <p>Name: {friend.name}</p>
            <p>Email: {friend.email}</p>
        </div>
    );
};

export default FriendDetail;