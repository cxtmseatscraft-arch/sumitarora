/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SonyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const SonyLogo: React.FC<SonyLogoProps> = ({
  className = '',
  size = 'lg',
  showSubtitle = true,
}) => {
  // Height & width mapping based on size
  const sizeClasses = {
    sm: 'w-44 sm:w-52 h-auto',
    md: 'w-64 sm:w-80 h-auto',
    lg: 'w-80 sm:w-[450px] md:w-[500px] h-auto',
    xl: 'w-88 sm:w-[500px] md:w-[580px] h-auto',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 620 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} max-w-full drop-shadow-[0_4px_35px_rgba(229,25,32,0.35)] transition-all duration-300 hover:scale-[1.015]`}
        role="img"
        aria-label="SONY REXINE WORK Official Logo"
      >
        <defs>
          <filter id="subtle-red-glow" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= SONY LOGO WITH SPEED STRIPES ================= */}
        <g id="SONY-WORDMARK" fill="#FFFFFF">
          {/* Top Speed Wing (Longest) */}
          <path d="M 32 30 C 32 23 38 18 46 18 L 136 18 C 142 18 146 22 146 27 C 146 32 142 36 136 36 L 46 36 C 38 36 32 32 32 30 Z" />

          {/* Middle Speed Wing (Medium) */}
          <path d="M 58 56 C 58 49 64 45 72 45 L 142 45 C 148 45 152 49 152 54 C 152 59 148 63 142 63 L 72 63 C 64 63 58 59 58 56 Z" />

          {/* Bottom Speed Wing (Short) */}
          <path d="M 80 82 C 80 76 86 72 94 72 L 144 72 C 150 72 154 76 154 81 C 154 86 150 90 144 90 L 94 90 C 86 90 80 86 80 82 Z" />

          {/* S Letter Body */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 126 18 L 194 18 C 206 18 214 26 214 38 L 214 44 C 214 56 206 63 194 66 C 208 70 216 78 216 92 L 216 102 C 216 116 204 126 188 126 L 118 126 C 104 126 94 116 94 104 L 94 98 L 122 98 L 122 101 C 122 105 125 107 130 107 L 182 107 C 186 107 189 104 189 99 L 189 91 C 189 86 186 83 181 83 L 138 83 C 120 83 110 75 110 60 L 110 52 C 110 38 120 29 136 29 L 180 29 C 185 29 188 32 188 36 L 188 40 L 160 40 L 160 37 C 160 37 159 37 157 37 L 136 37 C 131 37 128 39 128 43 L 128 48 C 128 52 131 54 136 54 L 182 54 C 196 54 204 60 204 70 L 204 72 C 198 67 188 64 176 64 L 140 64 C 124 64 114 56 114 42 L 114 36 C 114 24 124 18 138 18 Z"
          />

          {/* O Letter - Modern Wide Squircle Racetrack */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 230 18 L 308 18 C 328 18 344 34 344 56 L 344 88 C 344 110 328 126 308 126 L 230 126 C 210 126 194 110 194 88 L 194 56 C 194 34 210 18 230 18 Z M 234 40 C 226 40 220 47 220 57 L 220 87 C 220 97 226 104 234 104 L 304 104 C 312 104 318 97 318 87 L 318 57 C 318 47 312 40 304 40 L 234 40 Z"
          />

          {/* N Letter - Heavy Bold Automotive Diagonal */}
          <path
            d="M 364 18 L 392 18 L 452 90 L 452 18 L 478 18 L 478 126 L 452 126 L 390 52 L 390 126 L 364 126 Z"
          />

          {/* Y Letter - Clean Precision Cut */}
          <path
            d="M 496 18 L 526 18 L 558 68 L 590 18 L 620 18 L 572 88 L 572 126 L 544 126 L 544 88 Z"
            transform="translate(-16, 0)"
          />
        </g>

        {/* ================= REXINE WORK & SLEEK RED ACCENT ================= */}
        {showSubtitle && (
          <g id="REXINE-WORK-BANNER">
            {/* Crisp Red Typography */}
            <text
              x="310"
              y="166"
              fill="#E51920"
              fontSize="28"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Montserrat', sans-serif"
              fontWeight="900"
              letterSpacing="16"
              textAnchor="middle"
              className="tracking-[0.35em] uppercase"
            >
              REXINE WORK
            </text>

            {/* Red Underline Rule matching the image */}
            <rect
              x="76"
              y="180"
              width="468"
              height="4.5"
              rx="2.25"
              fill="#E51920"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
