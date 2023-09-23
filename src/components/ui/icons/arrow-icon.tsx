interface ArrowDownIconProps {
  className?: string
  direction?: 'down' | 'up'
}

export const ArrowIcon = ({ className = '', direction = 'down' }: ArrowDownIconProps) => {
  return (
    <div className={className}>
      {direction === 'down' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M28.3333 16.6667L20 25L11.6666 16.6667"
            stroke="#3D46FA"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M28.3332 23.3333L19.9998 15L11.6665 23.3333"
            stroke="#3D46FA"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  )
}
