interface BlackHoleVisualProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 'h-40 w-40',
  md: 'h-64 w-64',
  lg: 'h-96 w-96',
  xl: 'h-[28rem] w-[28rem] md:h-[34rem] md:w-[34rem]',
};

export default function BlackHoleVisual({ size = 'lg', className = '' }: BlackHoleVisualProps) {
  const sizeClass = sizeMap[size];

  return (
    <div
      className={`relative ${sizeClass} flex items-center justify-center ${className}`}
      aria-label="Ilustrasi black hole dengan cakram akresi"
      role="img"
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-glow-blue/10 blur-3xl animate-pulse-glow" />

      {/* Gravitational lensing ring — outer */}
      <div className="absolute inset-[5%] rounded-full border border-glow-blue/20 animate-spin-slower" />
      <div className="absolute inset-[8%] rounded-full border border-glow-purple/15" />

      {/* Accretion disk — outer wide layer */}
      <div
        className="absolute inset-[10%] rounded-full accretion-disk opacity-70 blur-md animate-spin-slow"
        style={{ transform: 'perspective(800px) rotateX(72deg)' }}
      />

      {/* Accretion disk — bright ring */}
      <div
        className="absolute inset-[12%] rounded-full accretion-disk opacity-90 animate-spin-slow"
        style={{ transform: 'perspective(800px) rotateX(72deg)' }}
      />

      {/* Photon ring — bright thin ring */}
      <div className="absolute inset-[18%] rounded-full border-[3px] border-glow-amber/60 shadow-[0_0_30px_rgba(255,184,77,0.5)] animate-spin-reverse-slow" />
      <div className="absolute inset-[20%] rounded-full border border-glow-cyan/40 shadow-[0_0_20px_rgba(56,212,255,0.3)]" />

      {/* Event horizon — dark center */}
      <div className="absolute inset-[24%] rounded-full bg-black shadow-[0_0_60px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,0,0,1)] z-10" />

      {/* Shadow edge glow */}
      <div className="absolute inset-[23%] rounded-full border border-glow-amber/30 blur-sm z-9" />

      {/* Top photon cone — visual representation of lensing */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[8%] rounded-full bg-gradient-to-r from-transparent via-glow-amber/30 to-transparent blur-sm"
        aria-hidden="true"
      />
    </div>
  );
}
