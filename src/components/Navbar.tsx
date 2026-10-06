import { useState, useEffect } from 'react';
import { Menu, X, Orbit } from 'lucide-react';
import { NAV_ITEMS } from '@/data/content';
import { useActiveSection, useScrollProgress } from '@/hooks/useScroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((n) => n.id));
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-strong shadow-lg shadow-black/50' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, 'beranda')}
              className="flex items-center gap-2 group"
            >
              <Orbit className="h-6 w-6 text-glow-cyan group-hover:rotate-180 transition-transform duration-700" strokeWidth={1.5} />
              <span className="font-display text-sm font-bold tracking-wider text-white">
                BLACK<span className="text-glow-cyan">HOLE</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeId === item.id
                      ? 'text-glow-cyan'
                      : 'text-slate-300/70 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeId === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-glow-cyan shadow-[0_0_10px_rgba(56,212,255,0.5)]" />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:text-white hover:bg-glow-blue/10 transition-colors"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="h-0.5 bg-glow-blue/10">
          <div
            className="h-full bg-gradient-to-r from-glow-blue via-glow-cyan to-glow-purple transition-[width] duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-space-void/95 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-16 bottom-0 w-72 glass-strong p-6 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? 'text-glow-cyan bg-glow-blue/10'
                    : 'text-slate-300/80 hover:text-white hover:bg-glow-blue/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
