interface SuccessIconProps {
  className?: string
}

export const SuccessIcon = ({ className = '' }: SuccessIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
    >
      <mask id="mask0_5_395" maskUnits="userSpaceOnUse" x="6" y="6" width="84" height="84">
        <path
          d="M48 88C53.2539 88.0068 58.4573 86.9753 63.3112 84.9647C68.1651 82.954 72.5739 80.004 76.284 76.284C80.0039 72.5739 82.954 68.1652 84.9646 63.3112C86.9753 58.4573 88.0068 53.2539 88 48C88.0067 42.7462 86.9751 37.5428 84.9645 32.6889C82.9539 27.835 80.0039 23.4262 76.284 19.716C72.5739 15.9961 68.1651 13.046 63.3112 11.0354C58.4573 9.02478 53.2539 7.99323 48 8.00003C42.7462 7.99334 37.5428 9.02494 32.6889 11.0356C27.835 13.0462 23.4262 15.9962 19.716 19.716C15.9961 23.4262 13.0461 27.835 11.0355 32.6889C9.02491 37.5428 7.99331 42.7462 8 48C7.9932 53.2539 9.02475 58.4573 11.0354 63.3112C13.046 68.1652 15.9961 72.5739 19.716 76.284C23.4262 80.0039 27.835 82.9539 32.6889 84.9645C37.5428 86.9751 42.7462 88.0067 48 88Z"
          fill="white"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M32 48L44 60L68 36"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_5_395)">
        <path d="M0 0H96V96H0V0Z" fill="url(#paint0_linear_5_395)" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_5_395"
          x1="48"
          y1="0"
          x2="48"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3E42FB" />
          <stop offset="1" stopColor="#07FFD2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
