import React, { useState, useEffect } from 'react';
import { ShieldAlert, LifeBuoy, Download } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'sec-psicologia', label: 'Psicologia', color: 'sky' },
  { id: 'sec-ciclo', label: 'Ciclo (5 Etapas)', color: 'sky' },
  { id: 'sec-catalogo', label: 'Golpes & SMS', color: 'emerald' },
  { id: 'sec-mitos', label: 'Mitos', color: 'emerald' },
  { id: 'sec-defesa', label: 'Defesa & Emergência', color: 'purple' },
  { id: 'sec-quiz', label: 'Quiz & Glossário', color: 'purple' }
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight <= 0) return;
      setScrollProgress(Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-slate-200/80">
      {/* Barra de progresso de leitura no topo */}
      <div className="h-1.5 w-full bg-slate-200/60 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-emerald-400 to-purple-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => scrollToId('sec-hero')}
          className="flex items-center gap-2.5 rounded-full text-left focus:outline-none group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 border border-sky-200 text-sky-800 shadow-sm group-hover:scale-105 transition-all">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-sm sm:text-base font-extrabold tracking-tight text-slate-800">
              Mente em Alerta
            </span>
            <span className="block text-[11px] font-medium text-slate-500">
              Engenharia Social • Guia Interativo
            </span>
          </div>
        </button>

        {/* Pills de navegação das seções */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => {
            const btnStyle =
              item.color === 'sky'
                ? 'bg-sky-50 hover:bg-sky-100 border-sky-200 text-sky-800'
                : item.color === 'emerald'
                  ? 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-800'
                  : 'bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-800';

            return (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${btnStyle}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            id="navbar-download-ebook"
            href="/Mente_em_Alerta_v3.pdf"
            download="Mente_em_Alerta_Guia_Completo.pdf"
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 hover:bg-sky-200 border border-sky-200 px-3.5 py-1.5 text-xs font-extrabold text-sky-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download className="h-3.5 w-3.5 text-sky-700" />
            <span className="hidden sm:inline">Baixar E-book (PDF)</span>
            <span className="sm:hidden">PDF</span>
          </a>

          <button
            onClick={() => scrollToId('sec-emergencia-box')}
            className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 hover:bg-rose-200 border border-rose-300 px-3.5 py-1.5 text-xs font-extrabold text-rose-900 shadow-sm transition-all"
          >
            <LifeBuoy className="h-3.5 w-3.5 text-rose-700" />
            <span>Emergência</span>
          </button>
        </div>
      </div>
    </header>
  );
}
