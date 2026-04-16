const logosRow1 = [
  { src: '/logos/GB.png', name: 'GB' },
  { src: '/logos/Swastic%20botanica.png', name: 'Swastic Botanica' },
  { src: '/logos/aaryaveer.png', name: 'Aaryaveer' },
  { src: '/logos/smart.png', name: 'Smart' },
  { src: '/logos/collegian.png', name: 'Collegian' },
];

const logosRow2 = [
  { src: '/logos/dts%20(1).png', name: 'DTS' },
  { src: '/logos/jkm.png', name: 'JKM' },
  { src: '/logos/novara.png', name: 'Novara' },
  { src: '/logos/primeaxis.png', name: 'Prime Axis' },
  { src: '/logos/alfawear.png', name: 'Alfa Wear' },
];

function LogoRow({ logos, direction = 'left', speed = 35 }) {
  // Duplicate logos 4 times for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  const animationClass = direction === 'left' ? 'scroll-left' : 'scroll-right';

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0A0A0C] via-[#0A0A0C]/90 to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className={`logo-track ${animationClass}`} style={{ '--speed': `${speed}s` }}>
        {duplicatedLogos.map((logo, index) => {
          return (
            <div
              key={`${logo.name}-${index}`}
              className="logo-item group flex-shrink-0"
            >
              <div className="flex flex-col items-center gap-2 px-6 md:px-10">
                <div className="w-24 h-12 md:w-32 md:h-16 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] group-hover:scale-105">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-zinc-700 transition-colors duration-300 group-hover:text-zinc-400 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function LogoCarousel() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#0A0A0C]/60 overflow-hidden" data-testid="logo-carousel">
      {/* Section header */}
      <div className="container-custom mx-auto mt-4 md:mt-8 mb-12 md:mb-16">
        <p className="text-xs uppercase tracking-[0.25em] font-mono text-blue-400/80 text-center">
          Trusted by leading brands
        </p>
      </div>

      {/* Dual carousel rows */}
      <div className="space-y-8">
        {/* Row 1 - Left to Right scroll */}
        <LogoRow logos={logosRow1} direction="left" speed={40} />

        {/* Row 2 - Right to Left scroll (opposite direction) */}
        <LogoRow logos={logosRow2} direction="right" speed={45} />
      </div>

      {/* Inline styles for the infinite scroll animation */}
      <style>{`
        .logo-track {
          display: flex;
          width: fit-content;
        }
        
        .logo-track:hover {
          animation-play-state: paused;
        }
        
        .logo-item {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        .logo-item:hover {
          opacity: 1;
        }
        
        .scroll-left {
          animation: scroll-left var(--speed, 40s) linear infinite;
        }
        
        .scroll-right {
          animation: scroll-right var(--speed, 40s) linear infinite;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .scroll-left, .scroll-right {
            --speed: 30s;
          }
        }
      `}</style>
    </section>
  );
}
