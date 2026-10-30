import React from 'react';
import { Info, Lightbulb, AlertTriangle } from 'lucide-react';

export default function Callout({ type = "Você Sabia?", title, children }) {
  const isSabia = type.toLowerCase().includes('sabia');
  const isAtencao = type.toLowerCase().includes('aten');

  const style = isSabia
    ? {
        bg: 'bg-purple-50/90',
        border: 'border-purple-200 border-l-purple-500',
        badge: 'bg-purple-100 text-purple-900 border-purple-200',
        iconBg: 'bg-purple-100 text-purple-700',
        Icon: Info
      }
    : isAtencao
    ? {
        bg: 'bg-rose-50/90',
        border: 'border-rose-200 border-l-rose-500',
        badge: 'bg-rose-100 text-rose-900 border-rose-200',
        iconBg: 'bg-rose-100 text-rose-700',
        Icon: AlertTriangle
      }
    : {
        bg: 'bg-emerald-50/90',
        border: 'border-emerald-200 border-l-emerald-500',
        badge: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        iconBg: 'bg-emerald-100 text-emerald-700',
        Icon: Lightbulb
      };

  const IconComp = style.Icon;

  return (
    <div
      className={`rounded-3xl border border-l-4 ${style.border} ${style.bg} p-5 sm:p-6 shadow-sm transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${style.iconBg} shadow-sm`}
        >
          <IconComp className="h-5 w-5" />
        </div>
        <div className="space-y-1.5">
          <span
            className={`inline-block rounded-full border px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider ${style.badge}`}
          >
            {type}
          </span>
          {title && (
            <h4 className="text-base sm:text-lg font-extrabold text-slate-800">
              {title}
            </h4>
          )}
          <div className="text-xs sm:text-sm leading-relaxed text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

