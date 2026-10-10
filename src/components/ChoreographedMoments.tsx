import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Home, Moon, Plane, Film, Play, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { useContent } from '../i18n/useContent';

export const ChoreographedMoments: React.FC = () => {
  const content = useContent();
  const moments = content.moments;
  const SCENARIOS = moments.scenarios;
  const [activeScenarioId, setActiveScenarioId] = useState<string>('arriving_home');
  const [simulating, setSimulating] = useState<boolean>(false);
  const [simulatedStep, setSimulatedStep] = useState<number>(0);
  const reduceMotion = useReducedMotion();

  const getScenarioIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-5 h-5 text-[#c7aa79]" />;
      case 'moon':
        return <Moon className="w-5 h-5 text-[#c7aa79]" />;
      case 'plane':
        return <Plane className="w-5 h-5 text-[#c7aa79]" />;
      case 'film':
        return <Film className="w-5 h-5 text-[#c7aa79]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c7aa79]" />;
    }
  };

  const handleSimulate = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    // Reduced motion: show the full sequence at once, no stepped animation.
    if (reduceMotion) {
      setSimulatedStep(4);
      return;
    }
    setSimulating(true);
    setSimulatedStep(1);

    const stepInterval = setInterval(() => {
      setSimulatedStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setTimeout(() => setSimulating(false), 2500);
          return 4;
        }
        return prev + 1;
      });
    }, 600);
  };

  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#508876] block mb-2">
            {moments.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#142d28] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {moments.title}
          </h2>
          <p className="text-sm sm:text-base text-[#476058] leading-relaxed max-w-2xl mx-auto">
            {moments.sub}
          </p>
        </div>

        {/* 4 Scenario Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SCENARIOS.map((scenario) => {
            const isSelected = activeScenarioId === scenario.id;
            return (
              <motion.div
                key={scenario.id}
                whileHover={{ y: -4 }}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`bg-white rounded-3xl p-6 sm:p-7 border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#c7aa79] shadow-lg ring-1 ring-[#c7aa79]/50'
                    : 'border-[#142d28]/10 shadow-sm hover:border-[#142d28]/25'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#e9e4d9] border border-[#142d28]/10 flex items-center justify-center mb-5">
                    {getScenarioIcon(scenario.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8db5a2] block mb-1">
                    {scenario.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#142d28] mb-2 font-serif">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-[#476058] leading-relaxed mb-6">
                    {scenario.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#142d28]/10 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSimulate(scenario.id);
                    }}
                    className="text-[11px] font-semibold text-[#0D4C3C] hover:text-[#142d28] flex items-center gap-1.5 transition-colors"
                  >
                    <Play className="w-3 h-3 fill-[#c7aa79] rtl:-scale-x-100" />
                    <span>{moments.testRoutine}</span>
                  </button>
                  <ChevronRight
                    className={`w-4 h-4 rtl:-scale-x-100 transition-transform ${
                      isSelected ? 'text-[#c7aa79] translate-x-1 rtl:-translate-x-1' : 'text-[#3d5a50]'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Routine Step Simulator Drawer Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#142d28]/10 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#142d28]/10 mb-6">
            <div>
              <span className="text-xs font-semibold text-[#0D4C3C] uppercase tracking-wider block">
                {moments.simEyebrow}
              </span>
              <h4 className="text-xl font-serif font-bold text-[#142d28]">
                {activeScenario.title} {moments.simTitleSuffix}
              </h4>
            </div>
            <button
              onClick={() => handleSimulate(activeScenarioId)}
              disabled={simulating}
              className="px-5 py-2.5 bg-[#0D4C3C] hover:bg-[#156047] disabled:opacity-50 text-[#F4F1EB] text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 self-start sm:self-auto"
            >
              <Play className="w-3.5 h-3.5 fill-current rtl:-scale-x-100" />
              <span>{simulating ? moments.executing : moments.trigger}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeScenario.automationSequence.map((step, idx) => {
              const stepNum = idx + 1;
              const isPassed = simulating ? simulatedStep >= stepNum : true;
              const isCurrent = simulating && simulatedStep === stepNum;

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all text-xs ${
                    isCurrent
                      ? 'bg-[#e9e4d9] border-[#c7aa79] ring-1 ring-[#c7aa79]'
                      : isPassed
                      ? 'bg-white border-[#142d28]/10'
                      : 'bg-[#F4F1EB] border-[#142d28]/10 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-[#8db5a2]">
                      0{stepNum}
                    </span>
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D4C3C]" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#142d28]/20" />
                    )}
                  </div>
                  <p className="text-[#142d28] font-medium leading-snug">{step}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
