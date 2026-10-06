import { TIMELINE_EVENTS, type TimelineEvent } from '@/data/content';

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-glow-blue/40 to-transparent md:-translate-x-1/2" />

      <div className="space-y-8 md:space-y-12">
        {TIMELINE_EVENTS.map((event: TimelineEvent, index: number) => (
          <TimelineItem key={event.year} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const isLeft = index % 2 === 0;
  const delayClass = `reveal-delay-${(index % 4) + 1}`;

  return (
    <div
      className={`reveal ${delayClass} relative flex items-start gap-6 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="hidden md:block md:w-1/2" />

      <div className="absolute left-4 md:left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-glow-cyan bg-space-deep z-10">
        <div className="absolute inset-0 rounded-full bg-glow-cyan/30 animate-pulse-glow" />
      </div>

      <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className="group inline-block w-full rounded-2xl glass p-5 md:p-6 transition-all duration-500 hover:border-glow-blue/30 hover:box-glow-blue">
          <span className="font-mono text-2xl md:text-3xl font-bold gradient-text">
            {event.year}
          </span>
          <h3 className="mt-2 text-base md:text-lg font-semibold text-white">{event.title}</h3>
          <p className="mt-2 text-sm text-slate-300/80 leading-relaxed">{event.description}</p>
        </div>
      </div>
    </div>
  );
}
