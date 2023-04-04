import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFriend from '../AllFriend/AllFriend';
import './Friend.css'

const Friend = () => {
    const friends = useLoaderData()
    // console.log(friends);
    return (
        <div>
            <h1>This is My Friend</h1>
            <div className='grid-frnd'>
                {
                    friends.map(friend => <AllFriend
                        key={friend.id}
                        friend={friend}
                    ></AllFriend>)
                }
            </div>
        </div>
    );
};

export default Friend;