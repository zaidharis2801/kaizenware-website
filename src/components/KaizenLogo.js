export default function KaizenLogo({ className = "w-10 h-10" }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle cx="50" cy="50" r="45" stroke="url(#logoGradient)" strokeWidth="3" fill="none" />
      
      {/* Inner circles representing continuous improvement */}
      <circle cx="50" cy="50" r="35" stroke="url(#innerGradient)" strokeWidth="2" fill="none" opacity="0.7" />
      <circle cx="50" cy="50" r="25" stroke="url(#innerGradient)" strokeWidth="2" fill="none" opacity="0.5" />
      
      {/* Center Kaizen symbol 改 */}
      <text 
        x="50" 
        y="58" 
        fontSize="28" 
        fontWeight="bold" 
        fill="url(#logoGradient)" 
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        改
      </text>
      
      {/* Arrow indicating progress */}
      <path 
        d="M 70 30 L 75 25 L 70 20" 
        stroke="url(#logoGradient)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
