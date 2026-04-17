import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {

    const { id, picture, name, status, tags, days_since_contact } = friend

    return (
        <div>
            <Link href={`/friend/${id}`}>
                <div className="p-6 flex flex-col items-center text-center gap-2 shadow-md rounded-xl bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50 my-10">
                    <div className="relative w-14 h-14">
                        <Image
                            src={picture}
                            alt='User Profile'
                            width={200}
                            height={200}
                            className="rounded-full object-cover" />
                    </div>

                    {/* Name */}
                    <h4 className="text-lg font-semibold transition hover:text-emerald-600">
                        {name}
                    </h4>

                    {/* Days since contact */}
                    <p className="text-sm font-semibold text-gray-500">{days_since_contact}d ago</p>

                    {/* Tags */}
                    <div className="flex gap-3">
                        {tags.map((tag, index) => (<span
                            key={index}
                            className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                            {tag}
                        </span>))}
                    </div>

                    {/* Status */}
                    < p
                        className={`text-sm font-medium px-2 py-0.5 mt-2 ${status === "Almost Due"
                            ? "text-red-500 bg-red-100 rounded-full"
                            : status === "Overdue" ? "text-warning bg-yellow-100 rounded-full" : "text-emerald-600 bg-emerald-100 rounded-full"
                            }`}
                    >
                        {status}
                    </p>

                </div >
            </Link>
        </div>
    );
}

export default FriendCard;