export function BlockPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="minecraft-blocks" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
            {/* Dirt-like block pattern */}
            <rect x="0" y="0" width="32" height="32" fill="hsl(45 100% 50%)" opacity="0.3" />
            <rect x="32" y="32" width="32" height="32" fill="hsl(45 100% 50%)" opacity="0.3" />
            <rect x="32" y="0" width="32" height="32" fill="hsl(45 100% 40%)" opacity="0.2" />
            <rect x="0" y="32" width="32" height="32" fill="hsl(45 100% 40%)" opacity="0.2" />
            
            {/* Block outlines */}
            <rect x="0" y="0" width="32" height="32" fill="none" stroke="hsl(45 100% 50%)" strokeWidth="1" opacity="0.5" />
            <rect x="32" y="0" width="32" height="32" fill="none" stroke="hsl(45 100% 50%)" strokeWidth="1" opacity="0.5" />
            <rect x="0" y="32" width="32" height="32" fill="none" stroke="hsl(45 100% 50%)" strokeWidth="1" opacity="0.5" />
            <rect x="32" y="32" width="32" height="32" fill="none" stroke="hsl(45 100% 50%)" strokeWidth="1" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#minecraft-blocks)" />
      </svg>
    </div>
  );
}
