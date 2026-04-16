import Image from "next/image";
import React from "react";

const FriendCard = ({ name = "Name", role = "WORK", status = "Almost Due", lastSeen = "62d ago" }) => {
  return (
    <div className="p-6 flex flex-col items-center text-center gap-2 shadow-md rounded-xl bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50 my-10">

      {/* Avatar */}
      <div className="relative w-14 h-14">
        <Image
          src="https://placehold.net/avatar.png"
          alt={`${name} profile`}
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h4 className="text-lg font-semibold transition hover:text-emerald-600">
        {name}
      </h4>

      {/* Last seen */}
      <p className="text-sm text-gray-500">{lastSeen}</p>

      {/* Tag / Role */}
      <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
        {role}
      </span>

      {/* Status */}
      <p
        className={`text-sm font-medium ${
          status === "Almost Due"
            ? "text-red-500"
            : "text-emerald-600"
        }`}
      >
        {status}
      </p>

    </div>
  );
};

export default FriendCard;