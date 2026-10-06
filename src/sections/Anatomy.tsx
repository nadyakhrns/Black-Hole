import { useState } from 'react';
import Section, { SectionHeading } from '@/components/Section';
import { ANATOMY_PARTS, type AnatomyPart } from '@/data/content';

export default function Anatomy() {
  const [activePart, setActivePart] = useState<string>('singularitas');

  const active = ANATOMY_PARTS.find((p) => p.id === activePart) ?? ANATOMY_PARTS[0];

  return (
    <Section id="anatomi" className="bg-space-dark">
      <SectionHeading
        kicker="Anatomi"
        title="Bagian-Bagian Black Hole"
        description="Jelajahi struktur black hole. Pilih salah satu bagian untuk mempelajari fungsinya."
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Interactive diagram */}
        <div className="reveal relative aspect-square max-w-md mx-auto w-full">
          {/* Glow background */}
          <div className="absolute inset-0 rounded-full bg-glow-blue/5 blur-3xl" />

          {/* Accretion disk visual */}
          <div className="absolute inset-[15%] rounded-full accretion-disk opacity-80 blur-sm animate-spin-slow"
            style={{ transform: 'perspective(600px) rotateX(70deg)' }} />
          <div className="absolute inset-[18%] rounded-full accretion-disk opacity-90 animate-spin-slow"
            style={{ transform: 'perspective(600px) rotateX(70deg)' }} />

          {/* Photon ring */}
          <div className="absolute inset-[25%] rounded-full border-[3px] border-glow-amber/50 shadow-[0_0_20px_rgba(255,184,77,0.4)]" />

          {/* Event horizon — dark center */}
          <div className="absolute inset-[30%] rounded-full bg-black shadow-[0_0_50px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(0,0,0,1)]" />

          {/* Jet */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-[18%] bg-gradient-to-t from-glow-purple/40 to-transparent rounded-full blur-sm" />
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-2 h-[18%] bg-gradient-to-b from-glow-purple/40 to-transparent rounded-full blur-sm" />

          {/* Interactive buttons positioned on diagram */}
          {ANATOMY_PARTS.map((part) => {
            const isActive = activePart === part.id;
            return (
              <button
                key={part.id}
                onClick={() => setActivePart(part.id)}
                onMouseEnter={() => setActivePart(part.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20"
                style={{
                  top: getButtonPosition(part.id).top,
                  left: getButtonPosition(part.id).left,
                }}
                aria-label={`Pilih ${part.name}`}
              >
                <span
                  className={`block rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? 'h-5 w-5 scale-125 shadow-[0_0_15px_rgba(56,212,255,0.6)]'
                      : 'h-3.5 w-3.5 hover:scale-110'
                  }`}
                  style={{
                    borderColor: part.color,
                    backgroundColor: isActive ? part.color : 'transparent',
                  }}
                />
                {isActive && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 top-6 whitespace-nowrap rounded-md glass-strong px-2.5 py-1 text-xs font-medium text-white"
                    style={{ color: part.color }}
                  >
                    {part.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Description panel */}
        <div className="reveal reveal-delay-1">
          {/* Part selector list */}
          <div className="flex flex-wrap gap-2 mb-6">
            {ANATOMY_PARTS.map((part) => (
              <button
                key={part.id}
                onClick={() => setActivePart(part.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border ${
                  activePart === part.id
                    ? 'text-white border-transparent'
                    : 'text-slate-400 border-glow-blue/15 hover:text-white hover:border-glow-blue/30'
                }`}
                style={
                  activePart === part.id
                    ? { backgroundColor: `${part.color}30`, borderColor: `${part.color}60` }
                    : undefined
                }
              >
                {part.name}
              </button>
            ))}
          </div>

          {/* Active part detail */}
          <div
            className="rounded-2xl glass p-6 md:p-7 transition-all duration-500"
            style={{ boxShadow: `0 0 30px ${active.color}15` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: active.color, boxShadow: `0 0 10px ${active.color}` }}
              />
              <h3 className="text-xl md:text-2xl font-bold text-white">{active.name}</h3>
            </div>
            <p className="text-sm md:text-base text-slate-300/85 leading-relaxed">
              {active.description}
            </p>
          </div>

          <p className="mt-4 text-xs text-slate-500 font-mono">
            Klik atau arahkan kursor ke titik pada diagram untuk memilih bagian
          </p>
        </div>
      </div>
    </Section>
  );
}

function getButtonPosition(id: string): { top: string; left: string } {
  const positions: Record<string, { top: string; left: string }> = {
    singularitas: { top: '50%', left: '50%' },
    horizon: { top: '50%', left: '50%' },
    foton: { top: '42%', left: '60%' },
    akresi: { top: '32%', left: '28%' },
    jet: { top: '10%', left: '50%' },
  };
  return positions[id] ?? { top: '50%', left: '50%' };
}
