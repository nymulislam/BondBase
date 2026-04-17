import React from 'react';

const FriendDetails
    = async ({ params }) => {
        const { id } = await params;
        const res = await fetch('http://localhost:3000/data/friends.json')
        const friendData = res.json();

        const friendInfo = friendData.find()

        return (
            <div>

                {/* profile card */}
                <div>

                </div>
            </div>
        );
    };

export default FriendDetails
    ;