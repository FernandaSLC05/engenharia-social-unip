import React from 'react';
import {
  Building2,
  Code2,
  Users,
  ArrowUp,
  GraduationCap,
  BookOpen
} from 'lucide-react';
import { FOOTER_DATA } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] to-sky-50/60 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        {/* Referências Principais */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-800">
            <BookOpen className="h-4 w-4" />
            <span>Referências Oficiais & Base Legal</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FOOTER_DATA.references.map((ref) => (
              <div
                key={ref.name}
                className="rounded-2xl border border-slate-200/80 bg-[#FAF9F6] p-4 space-y-1"
              >
                <div className="text-sm font-extrabold text-slate-800">
                  {ref.name}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ref.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Créditos Acadêmicos UNIP */}
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 via-emerald-50/70 to-purple-50 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sky-200/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-sky-200 text-sky-700 shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-800">
                  Mente em Alerta — Conscientização sobre Engenharia Social
                </h3>
                <p className="text-xs text-slate-600">
                  Trabalho Acadêmico Universitário • Reconhecer, resistir e reagir à manipulação digital
                </p>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 hover:bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all shrink-0"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Voltar ao Topo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-sky-200 bg-white/90 p-4 flex items-center gap-3.5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-800">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-sky-800">
                  Instituição
                </span>
                <span className="block text-sm font-extrabold text-slate-800">
                  {FOOTER_DATA.institution}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-white/90 p-4 flex items-center gap-3.5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  Curso
                </span>
                <span className="block text-sm font-extrabold text-slate-800">
                  {FOOTER_DATA.course}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-white/90 p-4 flex items-center gap-3.5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-800">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-purple-800">
                  Desenvolvido por
                </span>
                <span className="block text-sm font-extrabold text-slate-800">
                  {FOOTER_DATA.creators}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
