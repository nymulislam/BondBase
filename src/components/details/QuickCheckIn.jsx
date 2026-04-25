'use client'

import { friendContext } from "@/context/FriendContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";

const QuickCheckIn = ({name}) => {

    const {friendCheckIn, setFriendCheckIn} = useContext(friendContext)

    const handleCheckIn = (card) => {
        const checkIn = {
            friendName: name,
            action: card,
            time: new Date().toISOString()
        }

        setFriendCheckIn([...friendCheckIn, checkIn])
        toast.success(`${card} with ${name}!`);

    }

    return (
        <div className="grid grid-cols-3 gap-4">

            {/* Card 1 */}
            <div
                onClick={() => handleCheckIn('call')}
                className="p-6 text-center rounded-xl flex flex-col items-center gap-2 inset-shadow-sm transition-all duration-300 hover:bg-emerald-100 hover:-translate-y-1 cursor-pointer">
                <div>
                    <LuPhoneCall size={22} />
                </div>
                <p className="opacity-75 font-medium">Call</p>
            </div>

            {/* Card 2 */}
            <div
                onClick={() => handleCheckIn('text')}
                className="p-6 text-center rounded-xl flex flex-col items-center gap-2 inset-shadow-sm transition-all duration-300 hover:bg-emerald-100 hover:-translate-y-1 cursor-pointer">
                <div>
                    <LuMessageSquareMore size={22} />
                </div>
                <p className="opacity-75 font-medium">Text</p>
            </div>

            {/* Card 3 */}
            <div
                onClick={() => handleCheckIn('video')}
                className="p-6 text-center rounded-xl flex flex-col items-center gap-2 inset-shadow-sm transition-all duration-300 hover:bg-emerald-100 hover:-translate-y-1 cursor-pointer">
                <div>
                    <IoVideocamOutline size={22} />
                </div>
                <p className="opacity-75 font-medium">Video</p>
            </div>

        </div>
    );
};

export default QuickCheckIn;