interface RadioCheckedIconProps {
  className?: string
}
export const RadioCheckedIcon = ({ className = '' }: RadioCheckedIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <path
        d="M6.5 1.12964C6.23148 1.12964 5.96296 1.23168 5.74278 1.44649L1.44648
        5.74279C1.02222 6.16168 1.02222 6.83834 1.44648 7.25723L5.74278 11.5535C6.16167 11.9778
        6.83833 11.9778 7.25722 11.5535L11.5535 7.25723C11.9778 6.83834 11.9778 6.16168 11.5535
        5.74279L7.25722 1.44649C7.03704 1.23168 6.76852 1.12964 6.5 1.12964Z"
        fill="white"
      />
    </svg>
  )
}
