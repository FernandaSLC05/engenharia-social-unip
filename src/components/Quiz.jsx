import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, BookA } from 'lucide-react';
import { QUIZ_GLOSSARY_DATA } from '../data/content';

export default function Quiz() {
  const [answers, setAnswers] = useState({});

  const selectOption = (qId, optId) => {
    setAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const resetQuiz = () => setAnswers({});

  const answeredCount = Object.keys(answers).length;
  const total = QUIZ_GLOSSARY_DATA.questions.length;
  const correctCount = QUIZ_GLOSSARY_DATA.questions.filter(
    (q) => answers[q.id] === q.correct
  ).length;

  return (
    <section id="sec-quiz" className="scroll-mt-24 space-y-10">
      {/* Parte A: Quiz Interativo de 6 Perguntas */}
      <div className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50/80 via-white to-amber-50/40 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 border border-purple-200 px-3.5 py-1 text-xs font-extrabold text-purple-900 mb-1.5">
              <HelpCircle className="h-3.5 w-3.5" />
              Seção 07 • Autoavaliação Interativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Teste seus Conhecimentos (6 Questões)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Clique em uma alternativa para conferir a resposta correta e a explicação imediata.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="rounded-2xl bg-white border border-purple-200 px-4 py-2 text-right shadow-sm">
              <div className="text-[11px] font-bold text-slate-500">Pontuação</div>
              <div className="text-base font-black text-purple-900">
                {correctCount} / {total} acertos
              </div>
            </div>
            {answeredCount > 0 && (
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-purple-50 border border-purple-200 px-4 py-2 text-xs font-bold text-purple-900 transition-all"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Refazer</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {QUIZ_GLOSSARY_DATA.questions.map((q) => {
            const selected = answers[q.id];
            const isAnswered = !!selected;
            const isCorrect = selected === q.correct;

            return (
              <div
                key={q.id}
                className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug">
                    {q.question}
                  </h3>

                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isThisSelected = selected === opt.id;
                      const isThisCorrect = opt.id === q.correct;

                      let btnStyle =
                        'bg-[#FAF9F6] border-slate-200 text-slate-700 hover:border-purple-300';
                      if (isAnswered) {
                        if (isThisCorrect) {
                          btnStyle =
                            'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                        } else if (isThisSelected) {
                          btnStyle =
                            'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                        } else {
                          btnStyle = 'bg-slate-50 border-slate-200 text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => selectOption(q.id, opt.id)}
                          className={`w-full rounded-full border px-4 py-2.5 text-left text-xs transition-all flex items-center justify-between gap-2 ${btnStyle}`}
                        >
                          <span>{opt.text}</span>
                          {isAnswered && isThisCorrect && (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          )}
                          {isAnswered && isThisSelected && !isThisCorrect && (
                            <XCircle className="h-4 w-4 text-rose-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {isAnswered && (
                  <div
                    className={`rounded-2xl border p-3.5 text-xs leading-relaxed ${
                      isCorrect
                        ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50/90 border-rose-200 text-rose-950'
                    }`}
                  >
                    <strong className="block mb-0.5">
                      {isCorrect
                        ? '✓ Resposta Correta!'
                        : `✗ A alternativa correta é (${q.correct.toUpperCase()}):`}
                    </strong>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Parte B: Mini-Glossário Essencial (8 Termos) */}
      <div className="rounded-3xl border border-sky-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
        <div className="border-b border-slate-100 pb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 border border-sky-200 px-3.5 py-1 text-xs font-extrabold text-sky-900 mb-1.5">
            <BookA className="h-3.5 w-3.5" />
            Vocabulário Rápido • 8 Termos Chave
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">
            Glossário Essencial de Segurança
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUIZ_GLOSSARY_DATA.glossary.map((item) => (
            <div
              key={item.term}
              className="rounded-2xl border border-slate-200/80 bg-[#FAF9F6] p-4 space-y-2 hover:border-sky-300 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-extrabold text-slate-800">
                  {item.term}
                </h4>
                <span className="rounded-full bg-sky-50 border border-sky-200 px-2 py-0.5 text-[10px] font-bold text-sky-800">
                  {item.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
