import React, { useState } from 'react';
import {
  Brain,
  ShieldAlert,
  Clock,
  Gift,
  Users,
  HeartHandshake,
  CheckSquare,
  RefreshCw,
  Mail,
  MessageCircle,
  PhoneCall,
  QrCode,
  Crosshair,
  Briefcase,
  Building2,
  Smartphone,
  Package,
  FileWarning,
  Bot,
  Layers,
  HelpCircle,
  ShieldCheck,
  LifeBuoy,
  CheckCircle2,
  Zap
} from 'lucide-react';

import {
  PSYCHOLOGY_DATA,
  ATTACK_CYCLE_DATA,
  CATALOG_DATA,
  MYTHS_TRUTHS_DATA,
  DEFENSE_EMERGENCY_DATA
} from './data/content';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Callout from './components/Callout';
import PhoneMockup from './components/PhoneMockup';
import Quiz from './components/Quiz';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

const CIALDINI_ICONS = {
  ShieldAlert,
  Clock,
  Gift,
  Users,
  HeartHandshake,
  CheckSquare
};

const FORMAT_ICONS = {
  Mail,
  MessageCircle,
  PhoneCall,
  QrCode,
  Crosshair,
  Briefcase
};

const SCAM_ICONS = {
  Building2,
  Smartphone,
  Package,
  FileWarning,
  Bot
};

export default function App() {
  const [catalogTab, setCatalogTab] = useState('formatos');
  const [revealedMyths, setRevealedMyths] = useState({ 1: true, 4: true });
  const [selectedEmergency, setSelectedEmergency] = useState(
    DEFENSE_EMERGENCY_DATA.emergencyCases[0].id
  );

  const toggleMyth = (id) => {
    setRevealedMyths((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const revealAllMyths = () => {
    const all = {};
    MYTHS_TRUTHS_DATA.forEach((m) => {
      all[m.id] = true;
    });
    setRevealedMyths(all);
  };

  const activeEmergencyObj =
    DEFENSE_EMERGENCY_DATA.emergencyCases.find(
      (c) => c.id === selectedEmergency
    ) || DEFENSE_EMERGENCY_DATA.emergencyCases[0];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-8 pb-12 space-y-14">
        {/* ================================================================= */}
        {/* 1. HERO SECTION + INTRODUÇÃO CONTEXTUALIZADA                      */}
        {/* ================================================================= */}
        <Hero />

        {/* ================================================================= */}
        {/* 2. A PSICOLOGIA DA MANIPULAÇÃO (POR QUE CAÍMOS?)                  */}
        {/* ================================================================= */}
        <section
          id="sec-psicologia"
          className="scroll-mt-24 rounded-3xl border border-sky-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-7"
        >
          <div className="space-y-2 border-b border-sky-100 pb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-extrabold text-sky-800">
              <Brain className="h-3.5 w-3.5" />
              Seção 02 • Fundamentos Psicológicos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              A Psicologia da Manipulação: Por que Caímos?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {PSYCHOLOGY_DATA.heuristicsParagraph}
            </p>
          </div>

          {/* Grid com os 6 Gatilhos de Influência (Cialdini) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PSYCHOLOGY_DATA.cialdiniTriggers.map((trig) => {
              const IconComp = CIALDINI_ICONS[trig.icon] || ShieldAlert;
              return (
                <div
                  key={trig.id}
                  className="rounded-3xl border border-sky-200/80 bg-sky-50/40 p-5 flex flex-col justify-between space-y-3 hover:bg-sky-50/80 transition-all duration-200"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-100 text-sky-800 border border-sky-200">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-extrabold text-slate-800">
                        {trig.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {trig.explanation}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-sky-200/90 p-3 text-xs text-sky-950 italic">
                    <strong className="not-italic block text-[11px] uppercase tracking-wider text-sky-700 mb-0.5">
                      Frase típica do golpista:
                    </strong>
                    {trig.scammerPhrase}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Callout Você Sabia? - Ataque ao Twitter em 2020 */}
          <Callout
            type={PSYCHOLOGY_DATA.twitterCallout.type}
            title={PSYCHOLOGY_DATA.twitterCallout.title}
          >
            {PSYCHOLOGY_DATA.twitterCallout.text}
          </Callout>
        </section>

        {/* ================================================================= */}
        {/* 3. O CICLO DO ATAQUE (COMPONENTE VISUAL EM 5 ETAPAS)              */}
        {/* ================================================================= */}
        <section
          id="sec-ciclo"
          className="scroll-mt-24 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50/90 via-white to-sky-50/40 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6"
        >
          <div className="space-y-1.5 border-b border-sky-200/60 pb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 border border-sky-200 px-3.5 py-1 text-xs font-extrabold text-sky-900">
              <RefreshCw className="h-3.5 w-3.5" />
              Seção 03 • Anatomia do Processo em 5 Fases
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              O Ciclo do Ataque e Como Interrompê-lo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Golpes bem-sucedidos não são fruto de improviso: eles seguem 5 etapas claras. Veja como quebrar a corrente em cada uma:
            </p>
          </div>

          {/* 5 Cards Numerados Horizontais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ATTACK_CYCLE_DATA.map((phase) => (
              <div
                key={phase.step}
                className="rounded-3xl border border-sky-200 bg-white p-5 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-800 text-white text-xs font-black">
                      {phase.step}
                    </span>
                    <span className="rounded-full bg-sky-50 border border-sky-200 px-2.5 py-0.5 text-[10px] font-bold text-sky-800">
                      Etapa {phase.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-800">
                      {phase.title}
                    </h3>
                    <div className="text-[11px] font-bold text-sky-700">
                      {phase.subtitle}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {phase.whatAttackerDoes}
                  </p>
                </div>

                {/* Dica Rápida de Interrupção */}
                <div className="rounded-2xl bg-emerald-50/90 border border-emerald-200 p-3 text-xs text-emerald-950">
                  <strong className="block text-[10px] uppercase tracking-wider text-emerald-800 mb-0.5">
                    Como interromper:
                  </strong>
                  {phase.howToInterrupt}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. CATÁLOGO DE GOLPES + ANATOMIA DA FRAUDE (SEÇÃO DUPLA)          */}
        {/* ================================================================= */}
        <section
          id="sec-catalogo"
          className="scroll-mt-24 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/30 p-6 sm:p-8 lg:p-10 shadow-sm space-y-8"
        >
          {/* Parte Superior: Abas Interativas */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/60 pb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-extrabold text-emerald-900 mb-1.5">
                  <Layers className="h-3.5 w-3.5" />
                  Seção 04 • Cenários Reais & Canais
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                  Catálogo de Golpes & Anatomia da Fraude
                </h2>
              </div>

              {/* Seletor de Abas */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCatalogTab('formatos')}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                    catalogTab === 'formatos'
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  Aba 1: Formatos Técnicos (6)
                </button>
                <button
                  onClick={() => setCatalogTab('brasil')}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                    catalogTab === 'brasil'
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  Aba 2: Golpes Mais Comuns no Brasil (5)
                </button>
              </div>
            </div>

            {/* Aba 1: Formatos Técnicos */}
            {catalogTab === 'formatos' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CATALOG_DATA.technicalFormats.map((fmt) => {
                  const IconComp = FORMAT_ICONS[fmt.icon] || Mail;
                  return (
                    <div
                      key={fmt.name}
                      className="rounded-3xl border border-emerald-200/80 bg-white p-5 shadow-sm space-y-2.5 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                            <IconComp className="h-4 w-4" />
                          </div>
                          <h3 className="text-base font-extrabold text-slate-800">
                            {fmt.name}
                          </h3>
                        </div>
                        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-900">
                          {fmt.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {fmt.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Aba 2: Golpes mais comuns no Brasil */}
            {catalogTab === 'brasil' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CATALOG_DATA.brazilCommonScams.map((scam) => {
                  const IconComp = SCAM_ICONS[scam.icon] || Smartphone;
                  return (
                    <div
                      key={scam.name}
                      className="rounded-3xl border border-emerald-200/80 bg-white p-5 shadow-sm flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                            <IconComp className="h-4 w-4" />
                          </div>
                          <span className="rounded-full bg-amber-100 border border-amber-200 px-2.5 py-0.5 text-[10px] font-bold text-amber-900">
                            {scam.tag}
                          </span>
                        </div>
                        <h3 className="text-base font-extrabold text-slate-800">
                          {scam.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {scam.desc}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-emerald-50/90 border border-emerald-200 p-3 text-xs text-emerald-950">
                        <strong className="block mb-0.5">Defesa prática:</strong>
                        {scam.defense}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Parte Inferior: Mockup de Celular (Anatomia do SMS) */}
          <PhoneMockup />
        </section>

        {/* ================================================================= */}
        {/* 5. MITOS VS. VERDADES (6 CARDS INTERATIVOS)                       */}
        {/* ================================================================= */}
        <section
          id="sec-mitos"
          className="scroll-mt-24 rounded-3xl border border-emerald-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-extrabold text-emerald-900 mb-1.5">
                <HelpCircle className="h-3.5 w-3.5" />
                Seção 05 • Desmistificando Crenças Perigosas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                Mitos vs. Verdades sobre Engenharia Social
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Clique em cada afirmação para revelar o veredito e a explicação técnica.
              </p>
            </div>

            <button
              onClick={revealAllMyths}
              className="rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2 text-xs font-bold shrink-0 transition-all"
            >
              Revelar Todos os 6 Itens
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MYTHS_TRUTHS_DATA.map((item) => {
              const isOpen = !!revealedMyths[item.id];
              const isMito = item.verdict === 'MITO';

              return (
                <div
                  key={item.id}
                  onClick={() => toggleMyth(item.id)}
                  className="cursor-pointer rounded-3xl border border-slate-200/90 bg-[#FAF9F6] p-5 shadow-sm hover:border-emerald-300 hover:bg-white transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-400">
                        Afirmação #{item.id}
                      </span>
                      <span
                        className={`rounded-full border px-3 py-0.5 text-xs font-black ${
                          isOpen
                            ? isMito
                              ? 'bg-rose-100 text-rose-900 border-rose-300'
                              : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                            : 'bg-white text-slate-600 border-slate-200'
                        }`}
                      >
                        {isOpen ? item.verdict : 'Ver Veredito'}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug">
                      {item.statement}
                    </h3>
                  </div>

                  {isOpen ? (
                    <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200/70 pt-2.5">
                      {item.explanation}
                    </p>
                  ) : (
                    <span className="text-[11px] font-bold text-emerald-700">
                      Clique para virar o cartão →
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. CULTURA DE DEFESA + GUIA RÁPIDO DE EMERGÊNCIA                  */}
        {/* ================================================================= */}
        <section id="sec-defesa" className="scroll-mt-24 space-y-8">
          {/* Parte 1: Método Pare, Pense, Verifique + 5 Hábitos Essenciais */}
          <div className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50/80 via-white to-purple-50/30 p-6 sm:p-8 lg:p-10 shadow-sm space-y-7">
            <div className="space-y-1.5 border-b border-purple-200/60 pb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 border border-purple-200 px-3.5 py-1 text-xs font-extrabold text-purple-900">
                <ShieldCheck className="h-3.5 w-3.5" />
                Seção 06 • Cultura de Defesa & Hábitos
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                O Método “Pare, Pense, Verifique” e 5 Hábitos de Ouro
              </h2>
            </div>

            {/* 3 Passos Visuais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DEFENSE_EMERGENCY_DATA.parePenseVerifique.map((p) => (
                <div
                  key={p.step}
                  className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-purple-950">
                      {p.step}
                    </h3>
                    <span className="rounded-full bg-purple-100 border border-purple-200 px-3 py-0.5 text-xs font-bold text-purple-900">
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 5 Hábitos Essenciais */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-900">
                5 Hábitos Essenciais de Prevenção
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {DEFENSE_EMERGENCY_DATA.essentialHabits.map((hab, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-purple-200/80 bg-white p-4 space-y-1.5 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-700 shrink-0" />
                      <h4 className="text-xs font-extrabold text-slate-800">
                        {hab.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {hab.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Parte 2: Caixa de Emergência ("Caiu em um golpe? O que fazer") */}
          <div
            id="sec-emergencia-box"
            className="scroll-mt-24 rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-rose-50/90 via-white to-amber-50/60 p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/70 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 border border-rose-300 px-3.5 py-1 text-xs font-extrabold text-rose-900 mb-1.5">
                  <LifeBuoy className="h-3.5 w-3.5 text-rose-700" />
                  Guia Rápido de Emergência • MED & Lei nº 14.155/2021
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                  Caiu em um golpe? Selecione a situação para agir agora:
                </h3>
              </div>
            </div>

            {/* 4 Botões Seletivos */}
            <div className="flex flex-wrap gap-2.5">
              {DEFENSE_EMERGENCY_DATA.emergencyCases.map((em) => {
                const isSelected = em.id === selectedEmergency;
                return (
                  <button
                    key={em.id}
                    onClick={() => setSelectedEmergency(em.id)}
                    className={`rounded-full px-4 py-2.5 text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                      isSelected
                        ? 'bg-rose-800 text-white shadow-sm scale-[1.02]'
                        : 'bg-white text-slate-700 border border-rose-200 hover:bg-rose-50'
                    }`}
                  >
                    {em.label}
                  </button>
                );
              })}
            </div>

            {/* Painel da Ação Imediata */}
            <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 rounded-2xl bg-rose-50/80 border border-rose-200 p-5 space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-200/80 px-3 py-0.5 text-[11px] font-extrabold text-rose-950">
                  <Zap className="h-3.5 w-3.5" />
                  <span>{activeEmergencyObj.badge}</span>
                </div>
                <h4 className="text-base font-extrabold text-rose-950">
                  Ação Imediata (Primeiros Minutos):
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {activeEmergencyObj.immediateAction}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-2.5">
                <h4 className="text-sm font-extrabold text-slate-800">
                  Passos Seguintes Obrigatórios:
                </h4>
                <ul className="space-y-2">
                  {activeEmergencyObj.nextSteps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 p-3 text-xs sm:text-sm text-slate-700"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-900 font-black text-xs mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 7. QUIZ INTERATIVO (6 PERGUNTAS) + GLOSSÁRIO ESSENCIAL (8 TERMOS) */}
        {/* ================================================================= */}
        <Quiz />

        {/* ================================================================= */}
        {/* 8. CTA DE DOWNLOAD DO E-BOOK COMPLETO (PDF)                       */}
        {/* ================================================================= */}
        <DownloadCTA />
      </main>

      {/* =================================================================== */}
      {/* 8. RODAPÉ ACADÊMICO (UNIP + CIÊNCIA DA COMPUTAÇÃO + REFERÊNCIAS)    */}
      {/* =================================================================== */}
      <Footer />
    </div>
  );
}
