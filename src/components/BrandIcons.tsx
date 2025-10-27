import svgPaths from "../imports/svg-tzlobum4c3";

interface IconProps {
  className?: string;
}

export function StarCircleIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 133 133">
      <g>
        <rect height="123" stroke="#FF6431" strokeWidth="10" width="123" x="5" y="5" />
        <circle cx="66" cy="67" r="22" stroke="#FF6431" strokeWidth="10" />
        <path d={svgPaths.p1fbe600} stroke="#FF6431" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="10" />
      </g>
    </svg>
  );
}

export function RadialIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 133 133">
      <g>
        <rect height="123" stroke="#FF6431" strokeWidth="10" width="123" x="5" y="5" />
        <circle cx="66" cy="67" r="12" stroke="#FF6431" strokeWidth="10" />
        <path d={svgPaths.p3ffcfe00} stroke="#FF6431" strokeWidth="10" />
        <path d={svgPaths.p18b890c0} stroke="#FF6431" strokeWidth="10" />
        <path d={svgPaths.p37301700} stroke="#FF6431" strokeWidth="10" />
        <path d={svgPaths.p18d31c80} stroke="#FF6431" strokeWidth="10" />
      </g>
    </svg>
  );
}

export function CrosshairIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 133 133">
      <g>
        <g>
          <rect height="123" stroke="#FF6431" strokeWidth="10" width="123" x="5" y="5" />
          <circle cx="66" cy="67" r="60" stroke="#FF6431" strokeWidth="10" />
        </g>
        <line stroke="#FF6431" strokeWidth="10" x1="67" x2="67" y1="4" y2="128" />
        <line stroke="#FF6431" strokeWidth="10" x1="128" x2="4" y1="68" y2="68" />
      </g>
    </svg>
  );
}

export function LargeStarIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 133 133">
      <g>
        <rect height="123" stroke="#FF6431" strokeWidth="10" width="123" x="5" y="5" />
        <circle cx="66" cy="67" r="53" stroke="#FF6431" strokeWidth="10" />
        <path d={svgPaths.p3f8032f0} stroke="#FF6431" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="10" />
      </g>
    </svg>
  );
}
