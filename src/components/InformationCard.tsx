import { type LucideIcon } from 'lucide-react';

interface InformationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  meta?: string;
  badge?: string;
  badgeColor?: string;
  accentColor?: string;
  delay?: number;
}

export default function InformationCard({
  icon: Icon,
  title,
  description,
  meta,
  badge,
  badgeColor = 'bg-glow-blue/20 text-glow-cyan border-glow-blue/30',
  accentColor = 'from-glow-blue/20 to-glow-purple/10',
  delay = 0,
}: InformationCardProps) {
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <div
      className={`reveal ${delayClass} group relative overflow-hidden rounded-2xl glass p-6 md:p-7 transition-all duration-500 hover:border-glow-blue/30 hover:box-glow-blue hover:-translate-y-1`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/10 border border-glow-blue/20 transition-all duration-500 group-hover:bg-glow-blue/20 group-hover:scale-110">
            <Icon className="h-6 w-6 text-glow-cyan" strokeWidth={1.5} />
          </div>
          {badge && (
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>
        <h3 className="mb-2 text-lg md:text-xl font-semibold text-white">{title}</h3>
        {meta && (
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-glow-amber/70">{meta}</p>
        )}
        <p className="text-sm md:text-[0.95rem] text-slate-300/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
