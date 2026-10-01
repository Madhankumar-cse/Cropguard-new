import React from 'react';
import { SLIDE_IMAGES, PROJECT_METADATA } from '../../data/presentationData';
import { Globe2, ShieldCheck, Leaf, LineChart, Sparkles } from 'lucide-react';

export const Slide6Vision: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-neutral-950 text-white p-8 md:p-14 select-none">
      {/* Background with vibrant sustainable harvest visual */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <img
          src={SLIDE_IMAGES.vision}
          alt="Sustainable food harvest and resilient agricultural landscape"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/70" />
      </div>

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <span>Vision & Global Alignment</span>
            <span>·</span>
            <span>Sustainable Agriculture</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight mt-1">
            Towards Smarter and More Resilient Agriculture
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
          <div className="text-xs text-emerald-400/80 font-mono mt-0.5">SLIDE 06 / 06</div>
        </div>
      </div>

      {/* Center Section: SDG 2 + Four Pillars + Large Typography */}
      <div className="relative z-10 my-auto py-4 space-y-6">
        {/* Premium SDG 2 Section */}
        <div className="bg-gradient-to-r from-emerald-950/80 via-neutral-900/90 to-neutral-900/80 border border-emerald-500/40 rounded-2xl p-5 shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center gap-6">
          {/* SDG 2 Emblem Badge */}
          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 rounded-xl shrink-0">
            <Globe2 className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="text-[11px] font-mono text-emerald-400 uppercase font-bold tracking-wider">
                UN GOAL 2
              </div>
              <div className="text-xl font-black text-white font-display">
                ZERO HUNGER
              </div>
            </div>
          </div>

          {/* SDG Statement */}
          <div className="border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-6">
            <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed italic">
              “Better agricultural forecasting can support informed cultivation decisions, reduce production uncertainty and contribute to more resilient food systems.”
            </p>
          </div>
        </div>

        {/* Four Visual Pillars */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Four Architectural Pillars for Agricultural Resilience</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            <div className="bg-neutral-900/80 border border-white/10 p-4 rounded-xl hover:border-emerald-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                <LineChart className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm font-display">DATA-DRIVEN FARMING</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-snug">
                Eliminating guesswork with multi-factor probabilistic yield models.
              </p>
            </div>

            <div className="bg-neutral-900/80 border border-white/10 p-4 rounded-xl hover:border-emerald-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm font-display">INFORMED DECISIONS</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-snug">
                Transparent factor attribution guiding fertilizer, water, and market contracts.
              </p>
            </div>

            <div className="bg-neutral-900/80 border border-white/10 p-4 rounded-xl hover:border-emerald-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                <Leaf className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm font-display">SUSTAINABLE PRODUCTION</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-snug">
                Optimized agrochemical application minimizing soil degradation and runoff.
              </p>
            </div>

            <div className="bg-neutral-900/80 border border-white/10 p-4 rounded-xl hover:border-emerald-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                <Globe2 className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm font-display">RESILIENT FOOD SYSTEMS</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-snug">
                Predictable regional harvests strengthening food security and supply chains.
              </p>
            </div>
          </div>
        </div>

        {/* Final Statement in Large Typography */}
        <div className="py-2 text-center md:text-left">
          <div className="text-2xl md:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
            “Predict Yield. <br className="hidden md:inline" />
            <span className="text-emerald-400">Understand Risk.</span> <br className="hidden md:inline" />
            Farm Smarter.”
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar with strict Team ID and Thank You */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-4 mt-4 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-lg font-black text-white font-display">CropGuard AI Pro</span>
          <span className="text-neutral-500">·</span>
          <span className="text-xs text-neutral-400">Problem Statement Code: SSA025</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 bg-emerald-500/15 border border-emerald-400/40 rounded-lg text-emerald-400 font-mono font-bold text-sm tracking-wider">
            {PROJECT_METADATA.teamId}
          </div>
          <div className="text-base font-bold text-white tracking-wide font-display">
            Thank You
          </div>
        </div>
      </div>
    </div>
  );
};
