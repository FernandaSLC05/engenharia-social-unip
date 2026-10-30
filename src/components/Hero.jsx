import React from 'react';
import { Sparkles, PhoneIncoming, ArrowDown, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data/content';

export default function Hero() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="sec-hero" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50/70 p-6 sm:p-10 shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Coluna Esquerda: Título + Parágrafo Contextualizado */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1 text-xs font-bold text-sky-800 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" />
              <span>{HERO_DATA.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-slate-800 leading-[1.15]">
              {HERO_DATA.title}
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {HERO_DATA.introParagraph}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => scrollToId('sec-psicologia')}
                className="inline-flex items-center gap-2 rounded-full bg-sky-700 hover:bg-sky-800 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-300"
              >
                <span>Entender a Manipulação</span>
                <ArrowDown className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollToId('sec-defesa')}
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-purple-50 border border-purple-200 px-5 py-2.5 text-xs sm:text-sm font-bold text-purple-800 shadow-sm transition-all duration-300"
              >
                <ShieldCheck className="h-4 w-4 text-purple-600" />
                <span>Como se Proteger</span>
              </button>
            </div>
          </div>

          {/* Coluna Direita: Ilustração do Golpe do Número Novo no WhatsApp */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-emerald-200 bg-white p-5 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <PhoneIncoming className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-800">
                      {HERO_DATA.whatsappSample.sender}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {HERO_DATA.whatsappSample.label}
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-amber-100 border border-amber-200 px-2.5 py-0.5 text-[10px] font-bold text-amber-900">
                  Pretexto Clássico
                </span>
              </div>

              <div className="rounded-2xl rounded-tl-sm bg-emerald-50/90 border border-emerald-200/80 p-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                {HERO_DATA.whatsappSample.message}
              </div>

              <p className="text-xs text-slate-600 bg-slate-50 rounded-2xl p-3 border border-slate-200/70">
                <strong className="text-slate-800">Por que funciona: </strong>
                {HERO_DATA.whatsappSample.lesson}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Contadores / Badges em Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-sky-200/60">
          {HERO_DATA.highlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-sky-200/70 bg-white/90 p-4 shadow-sm flex items-start gap-3.5"
            >
              <span className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-sky-100 border border-sky-200 px-3 py-2 text-sm font-black text-sky-900">
                {item.metric}
              </span>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-extrabold text-slate-800">
                  {item.title}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
