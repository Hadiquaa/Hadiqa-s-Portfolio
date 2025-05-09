import React from "react";

const Logo = () => {
  return (
    <div className="h-16 w-auto">
      <svg
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* { } Icon */}
        <text
          x="12%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontSize="72"
          fontWeight="800"
          fill="#0dbc82"
          transform="skewX(-10)"
        >
          {}
        </text>

        {/* Hadiqa text */}
        <text
          x="49%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontSize="70"
          fontWeight="900"
          className="fill-blacktext dark:fill-zinc-300"
          transform="skewX(-10)"
        >
          Hadiqa
        </text>

        {/* .dev text */}
        <text
          x="90%"
          y="62%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontSize="40"
          fontWeight="700"
          fill="#0dbc82"
          transform="skewX(-10)"
        >
          .dev
        </text>
      </svg>
    </div>
  );
};

export default Logo;
