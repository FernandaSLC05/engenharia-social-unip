import React, { useState } from 'react';
import { Smartphone, CheckCircle2 } from 'lucide-react';

const SMS_SIGNALS = [
  {
    id: 1,
    title: "Número desconhecido ou comum",
    snippet: "+55 11 9 5555-0000",
    explanation:
      "Bancos legítimos não usam números de celular aleatórios para exigir ações de desbloqueio."
  },
  {
    id: 2,
    title: "Senso de urgência e ameaça",
    snippet: "URGENTE! Sua conta será BLOQUEADA hoje.",
    explanation:
      "A ameaça de perda imediata serve para provocar medo e impedir que você consulte o aplicativo oficial."
  },
  {
    id: 3,
    title: "Link encurtado suspeito",
    snippet: "bit.ly/seg-banco-5521",
    explanation:
      "Encurtadores escondem o domínio real do site clonado que rouba sua senha e dados do cartão."
  },
  {
    id: 4,
    title: "Ausência do nome da vítima",
    snippet: "Prezado cliente, regularize agora...",
    explanation:
      "Mensagens disparadas em massa usam saudações genéricas, sem identificar o titular da conta."
  }
];

export default function PhoneMockup() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="rounded-3xl border border-emerald-200 bg-white p-6 sm:p-7 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-200 px-3 py-0.5 text-xs font-extrabold text-amber-900 mb-1">
            <Smartphone className="h-3.5 w-3.5" />
            Anatomia da Fraude (Inspeção Interativa)
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
            Os 4 Sinais Clássicos em um SMS de Golpe
          </h3>
        </div>
        <span className="text-xs font-semibold text-slate-500">
          Clique nos números (1 a 4) para destacar
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Celular Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[300px] rounded-[36px] border-[6px] border-slate-800 bg-[#FAF9F6] p-4 shadow-md">
            <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-slate-300" />

            {/* Sinal 1: Remetente */}
            <button
              type="button"
              onClick={() => setActiveId(1)}
              className={`w-full rounded-2xl p-2.5 text-left border transition-all ${
                activeId === 1
                  ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-200'
                  : 'bg-white border-slate-200 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-extrabold text-slate-800">
                    +55 11 9 5555-0000
                  </div>
                  <div className="text-[10px] text-slate-500">
                    SMS • Remetente desconhecido
                  </div>
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white text-xs font-black">
                  1
                </span>
              </div>
            </button>

            {/* Balão de SMS */}
            <div className="mt-3 rounded-2xl bg-white p-3.5 border border-slate-200 space-y-2.5 text-xs shadow-sm">
              {/* Sinal 2: Urgência */}
              <button
                type="button"
                onClick={() => setActiveId(2)}
                className={`w-full rounded-xl p-2 text-left flex items-start justify-between gap-2 border transition-all ${
                  activeId === 2
                    ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-200'
                    : 'border-transparent hover:bg-slate-50'
                }`}
              >
                <span className="font-bold text-rose-900">
                  URGENTE! Sua conta será BLOQUEADA hoje.
                </span>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white text-[10px] font-black">
                  2
                </span>
              </button>

              {/* Sinal 4: Ausência de nome */}
              <button
                type="button"
                onClick={() => setActiveId(4)}
                className={`w-full rounded-xl p-2 text-left flex items-start justify-between gap-2 border transition-all ${
                  activeId === 4
                    ? 'bg-sky-50 border-sky-400 ring-2 ring-sky-200'
                    : 'border-transparent hover:bg-slate-50'
                }`}
              >
                <span className="text-slate-700">
                  Prezado cliente, regularize agora e evite multa:
                </span>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-[10px] font-black">
                  4
                </span>
              </button>

              {/* Sinal 3: Link curto */}
              <button
                type="button"
                onClick={() => setActiveId(3)}
                className={`w-full rounded-xl p-2 text-left flex items-center justify-between gap-2 border transition-all ${
                  activeId === 3
                    ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-200'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="font-mono text-xs font-bold text-sky-700 underline">
                  bit.ly/seg-banco-5521
                </span>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white text-[10px] font-black">
                  3
                </span>
              </button>

              <div className="text-right text-[10px] text-slate-400">09:41</div>
            </div>
          </div>
        </div>

        {/* Lista Interativa dos 4 Pontos */}
        <div className="lg:col-span-7 space-y-2.5">
          {SMS_SIGNALS.map((sig) => {
            const isSelected = activeId === sig.id;
            return (
              <button
                key={sig.id}
                type="button"
                onClick={() => setActiveId(sig.id)}
                className={`w-full rounded-2xl border p-3.5 text-left transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? 'bg-emerald-50/90 border-emerald-400 shadow-sm'
                    : 'bg-[#FAF9F6] border-slate-200/80 hover:bg-white'
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black mt-0.5 ${
                    isSelected
                      ? 'bg-emerald-800 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {sig.id}
                </span>
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-800">
                    {sig.title}{' '}
                    <span className="font-mono text-[11px] font-normal text-slate-500">
                      “{sig.snippet}”
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sig.explanation}
                  </p>
                </div>
              </button>
            );
          })}

          <div className="rounded-2xl bg-sky-50/90 border border-sky-200 p-3.5 flex items-center gap-2.5 text-xs text-sky-950 font-semibold">
            <CheckCircle2 className="h-4 w-4 text-sky-700 shrink-0" />
            <span>
              A soma desses 4 sinais revela a fraude. Nunca clique no link: abra direto o app oficial do seu banco.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
