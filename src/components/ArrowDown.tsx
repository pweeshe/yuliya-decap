interface ArrowDownProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export default function ArrowDown({ 
  width = 14, 
  height = 14, 
  fill = "#7851A9",
  className 
}: ArrowDownProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 14 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7 9.79998L10.5 5.59998H3.5L7 9.79998Z" fill={fill} />
      <path d="M7 0C3.1402 0 0 3.1402 0 7C0 10.8598 3.1402 14 7 14C10.8598 14 14 10.8598 14 7C14 3.1402 10.8598 0 7 0ZM7 12.6C3.9123 12.6 1.4 10.0877 1.4 7C1.4 3.9123 3.9123 1.4 7 1.4C10.0877 1.4 12.6 3.9123 12.6 7C12.6 10.0877 10.0877 12.6 7 12.6Z" fill={fill} />
    </svg>
  );
}

