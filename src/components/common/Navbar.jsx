"use client";

import { useState } from "react";
import Link from "next/link";
import { GoGraph } from "react-icons/go";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const menuItems = [
        { name: "Home", icon: <RiHome2Line />, href: "/" },
        { name: "Timeline", icon: <RiTimeLine />, href: "/timeline" },
        { name: "Stats", icon: <GoGraph />, href: "/stats" },
    ];

    return (
        <div className="sticky top-0 z-50 bg-base-200 shadow-sm">
            <div className="container mx-auto navbar">

                {/* Left */}
                <div className="navbar-start">
                    <Link
                        href="/"
                        className="btn border-none text-xl transition hover:scale-105 hover:bg-emerald-100 hover:text-emerald-900"
                    >
                        BondBase
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300
                                     ${pathname === item.href
                                            ? "bg-emerald-600 text-white shadow-md"
                                            : "hover:bg-emerald-100 hover:text-emerald-900"
                                        }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Button */}
                <div className="lg:hidden navbar-end">
                    <button
                        onClick={() => setOpen(!open)}
                        className="btn btn-ghost"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 bg-base-200 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="menu p-4">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 transition hover:translate-x-1"
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;