'use client'

import { friendContext } from "@/context/FriendContext";
import { formatDate } from "@/lib/utils";
import { useContext } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";

const TimelineData = () => {

    const { friendCheckIn = [], filter } = useContext(friendContext);

    const filteredData = friendCheckIn.filter((friend) => {
        if (!filter || filter === "View all") return true;
        const filterMap = {
            "Text Message": "text",
            "Voice Call": "call",
            "Video Call": "video"
        };
        return friend.action === filterMap[filter];
    });

    console.log(filteredData);



    return (
        <div>
            {
                filteredData.map((friend, i) =>
                    <div
                        className="shadow-md hover:shadow-lg transition hover:translate-y-1 hover:bg-emerald-50 p-5 rounded-2xl my-2 flex items-center gap-4"
                        key={i}
                    >
                        <div>
                            {friend.action === 'call' && <LuPhoneCall size={25} />}
                            {friend.action === 'text' && <LuMessageSquareMore size={25} />}
                            {friend.action === 'video' && <IoVideocamOutline size={25} />}
                        </div>
                        <div>
                            <div>
                                <span className="font-semibold capitalize">
                                    {friend.action}
                                </span>
                                <span className="text-gray-500 text-sm font-medium">
                                    {` with ${friend.friendName}`}
                                </span>
                            </div>
                            <div className="text-sm font-medium text-gray-600">
                                {formatDate(friend.time)}
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default TimelineData;