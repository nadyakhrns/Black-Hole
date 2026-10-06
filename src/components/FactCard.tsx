import { type LucideIcon } from 'lucide-react';

interface FactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delay?: number;
}

export default function FactCard({ icon: Icon, label, value, delay = 0 }: FactCardProps) {
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <div
      className={`reveal ${delayClass} group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:border-glow-blue/30 hover:box-glow-blue hover:-translate-y-1`}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-glow-blue/10 blur-2xl transition-opacity duration-500 group-hover:bg-glow-blue/20" />

      <div className="relative">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-glow-blue/10 border border-glow-blue/20">
          <Icon className="h-5 w-5 text-glow-cyan" strokeWidth={1.5} />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-glow-amber/70 mb-2">
          {label}
        </p>
        <p className="text-sm md:text-base text-white font-medium leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
