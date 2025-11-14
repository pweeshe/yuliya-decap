interface HeroClipperProps {
  height?: string | number;
  className?: string;
  flipHorizontal?: boolean;
}

export default function HeroClipper({ 
  height = "100%",
  className,
  flipHorizontal = false
}: HeroClipperProps) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 335 831" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      style={{
        shapeRendering: 'crispEdges',
        imageRendering: 'pixelated',
        transform: flipHorizontal ? 'scaleX(-1)' : undefined
      }}
    >
      <path 
        d="M158.49 835.355L0.658868 835.355L0.658867 53.355C0.658868 21.8747 26.1787 -3.64505 57.6589 -3.64504L64.7437 -3.64504L329.296 602.383C337.633 621.479 334.885 643.602 322.13 660.078L203.563 813.246C192.768 827.192 176.126 835.355 158.49 835.355Z" 
        fill="white"
      />
    </svg>
  );
}


