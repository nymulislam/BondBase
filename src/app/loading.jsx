"use client";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-12 h-12 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
        
        {/* Inner Pulse Dot */}
        <div className="absolute w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
        
        {/* Text under loader */}
        <p className="absolute -bottom-8 text-xs font-semibold tracking-widest text-emerald-800 uppercase opacity-70">
          Syncing...
        </p>
      </div>
    </div>
  );
};

export default Loader;