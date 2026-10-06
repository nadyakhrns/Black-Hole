import { type ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 ${className}`}
    >
      <div className={`mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ kicker, title, description, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      <div className={`reveal inline-flex items-center gap-2 mb-4 ${align === 'center' ? '' : ''}`}>
        <span className="h-px w-8 bg-glow-blue/60" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-glow-cyan/80">{kicker}</span>
        <span className="h-px w-8 bg-glow-blue/60" />
      </div>
      <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="reveal reveal-delay-2 mt-5 text-base sm:text-lg text-slate-300/80 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
