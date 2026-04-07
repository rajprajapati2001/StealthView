import React from 'react';

export const StealthLogo: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Shield Background with Indigo-to-Violet Gradient */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-full w-full drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]"
      >
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path 
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
          fill="url(#shieldGradient)" 
        />
      </svg>
      
      {/* Padlock Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[35%] w-[35%] drop-shadow-sm"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="white" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1.5" fill="#18181b" stroke="none" />
        </svg>
      </div>
    </div>
  );
};
