"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-emerald-950 text-white relative overflow-hidden">

      {/* glowing background blobs */}
      <div className="absolute w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-emerald-700/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* card */}
      <div className="perspective">
        <div className="relative w-[320px] md:w-105 animate-float">

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl text-center">

            <h1 className="text-7xl font-bold text-emerald-400 drop-shadow-lg">
              404
            </h1>

            <h2 className="text-2xl font-semibold mt-2 text-emerald-100">
              Page Not Found
            </h2>

            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              The page you are looking for doesn’t exist or has been moved.
            </p>

            {/* divider */}
            <div className="my-6 h-px bg-white/10"></div>

            {/* button */}
            <Link
              href="/"
              className="inline-block px-6 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Go Home
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NotFound;