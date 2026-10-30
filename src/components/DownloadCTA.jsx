import React from 'react';
import { Download, BookOpen, WifiOff, FileText, ShieldCheck } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: WifiOff, label: 'Consulta offline' },
  { icon: FileText, label: 'Conteúdo completo' },
  { icon: ShieldCheck, label: 'Checklists de defesa' }
];

export default function DownloadCTA() {
  return (
    <section
      id="sec-download"
      className="scroll-mt-24 relative overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-sky-50 via-purple-50 to-emerald-50 p-8 sm:p-10 lg:p-14 shadow-sm text-center"
    >
      {/* Bolhas decorativas suaves */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-purple-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-2xl space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-white border border-purple-200 text-purple-700 shadow-sm">
          <BookOpen className="h-7 w-7" />
        </div>

        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-purple-200 px-3.5 py-1 text-xs font-extrabold text-purple-900">
            Material de Apoio • E-book Gratuito
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            Leve o guia Mente em Alerta com você
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Baixe o e-book completo em PDF para consultar quando quiser, mesmo sem
            internet. Compartilhe com familiares e colegas e ajude a criar uma
            cultura de defesa contra a engenharia social.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-2.5">
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-700"
            >
              <Icon className="h-3.5 w-3.5 text-purple-600" />
              {label}
            </li>
          ))}
        </ul>

        <a
          id="cta-download-ebook"
          href="/Mente_em_Alerta_v3.pdf"
          download="Mente_em_Alerta_Guia_Completo.pdf"
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-purple-100 hover:bg-purple-200 border border-purple-300 px-8 py-4 text-base sm:text-lg font-extrabold text-purple-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <Download className="h-5 w-5 text-purple-700 transition-transform duration-300 group-hover:translate-y-0.5" />
          Baixar Guia Completo em PDF
        </a>
      </div>
    </section>
  );
}
