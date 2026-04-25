"use client";

import { friendContext } from "@/context/FriendContext";
import { ChevronDown } from "lucide-react";
import { useContext, useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";

const categories = ["View all", "Text Message", "Voice Call", "Video Call"];

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("View all");
  const { filter, setFilter } = useContext(friendContext)

  return (
    <div className="w-64 relative ml-2">

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-lg border border-emerald-600 bg-white text-gray-800 shadow-sm transition-all duration-200 hover:border-emerald-500 focus:ring-2 focus:ring-emerald-600"
      >
        {selected}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-0 mt-2 w-full bg-white rounded-xl shadow-md transition-all duration-200 overflow-hidden z-50 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        {categories.map((item) => (
          <div
            key={item}
            onClick={() => {
              setSelected(item);
              setFilter(item);
              setOpen(false);
            }}
            className={`px-4 py-2 cursor-pointer flex justify-between items-center transition
              ${selected === item
                ? "bg-emerald-100 text-emerald-700 font-medium"
                : "hover:bg-gray-100"
              }
            `}
          >
            {item}

            {selected === item && (
              <span className="text-emerald-600"><GrFormCheckmark size={22} /></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;