/* Декоративные элементы — Ретрофутуризм: ретро-сетка, солнце, synthwave */

/**
 * AngularDivider → RetroHorizon — линия горизонта с градиентом
 */
export function AngularDivider({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Заливка */}
        <rect y="40" width="1440" height="40" fill="currentColor" />
        {/* Горизонтальная линия с градиентом */}
        <line x1="0" y1="40" x2="1440" y2="40" stroke="url(#retroLine)" strokeWidth="2" />
        <defs>
          <linearGradient id="retroLine" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#FF6EC7" stopOpacity="0" />
            <stop offset="20%" stopColor="#FF6EC7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#FF6EC7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF6EC7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * NeonGrid → RetroGrid — перспективная сетка (synthwave)
 */
export function NeonGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Горизонтальные линии (перспектива) */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,110,199,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,110,199,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 40px',
          transform: 'perspective(300px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }}
      />
      {/* Горизонтальные градиентные полосы */}
      <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6EC7]/10 to-transparent" />
      <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/5 to-transparent" />
    </div>
  );
}

/**
 * GlitchLine → RetroBeam — горизонтальный луч
 */
export function GlitchLine({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <div className="w-40 h-[1px] bg-gradient-to-r from-[#FF6EC7] via-[#00D4FF] to-transparent opacity-40" />
    </div>
  );
}

/**
 * DotMatrix → RetroStars — звёздные точки
 */
export function DotMatrix({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.06] ${className}`} aria-hidden="true">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        {/* Случайные «звёзды» */}
        <circle cx="20" cy="30" r="1" fill="#FF6EC7" />
        <circle cx="80" cy="15" r="0.8" fill="#00D4FF" />
        <circle cx="150" cy="45" r="1.2" fill="#FF6EC7" />
        <circle cx="40" cy="90" r="0.6" fill="#C77DFF" />
        <circle cx="170" cy="100" r="1" fill="#00D4FF" />
        <circle cx="100" cy="60" r="0.7" fill="#FF6EC7" />
        <circle cx="60" cy="150" r="1" fill="#C77DFF" />
        <circle cx="130" cy="170" r="0.8" fill="#FF6EC7" />
        <circle cx="180" cy="180" r="1.2" fill="#00D4FF" />
        <circle cx="30" cy="180" r="0.5" fill="#FF6EC7" />
      </svg>
    </div>
  );
}

/**
 * HexagonDecor → RetroSun — закатное солнце synthwave
 */
export function HexagonDecor({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.08] ${className}`} aria-hidden="true">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        {/* Солнце */}
        <defs>
          <linearGradient id="sunGrad" x1="100" y1="30" x2="100" y2="170">
            <stop offset="0%" stopColor="#FF6EC7" />
            <stop offset="50%" stopColor="#FF6EC7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="70" fill="url(#sunGrad)" />
        {/* Горизонтальные полосы через солнце */}
        {[50, 70, 85, 95, 105, 115, 130, 150].map((y, i) => (
          <line key={i} x1="30" y1={y} x2="170" y2={y} stroke="#0D0221" strokeWidth={i < 4 ? 2 : 3 + i} opacity="0.8" />
        ))}
      </svg>
    </div>
  );
}

/**
 * ScanlineOverlay — тонкие горизонтальные полоски
 */
export function ScanlineOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
      <div className="absolute inset-0 scanlines" />
      <div className="scanline-bar" />
    </div>
  );
}

/* Обратная совместимость */
export const WaveDivider = AngularDivider;
export const WaveDividerSoft = AngularDivider;
export const FloatingBubbles = NeonGrid;
export function FloatingFish({ className = '' }: { className?: string }) {
  return <GlitchLine className={className} />;
}
export function SeaweedDecor({ className: _className = '' }: { className?: string }) {
  return null;
}
export const WavePattern = DotMatrix;
export const Compass = HexagonDecor;
