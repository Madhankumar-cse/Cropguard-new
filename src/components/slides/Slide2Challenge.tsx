import React from 'react';
import { SLIDE_IMAGES, PROJECT_METADATA } from '../../data/presentationData';
import { History, Sprout, CloudRain, Wrench, AlertTriangle, ArrowRight, ArrowDown } from 'lucide-react';

export const Slide2Challenge: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-neutral-950 text-white p-8 md:p-14 select-none">
      {/* Background with farmer inspection visual */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src={SLIDE_IMAGES.challenge}
          alt="Farmer examining crops in field under unpredictable weather"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
      </div>

      {/* Top Header Zone */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
            <span>Problem Context</span>
            <span>·</span>
            <span>SSA025 Core Vulnerability</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight mt-1">
            The Challenge: Farming Under Uncertainty
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
          <div className="text-xs text-emerald-400/80 font-mono mt-0.5">SLIDE 02 / 06</div>
        </div>
      </div>

      {/* Core Visual Storytelling Center */}
      <div className="relative z-10 my-auto py-4 space-y-8">
        {/* 4 Major Information Sources */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Four Critical Farm Information Sources (Fragmented & Isolated)</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-900/80 border border-white/10 p-4 rounded-xl relative group hover:border-emerald-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <History className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base font-display">
                HISTORICAL CROP DATA
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Past season yields, variety performance, acreages, and historical crop rotations.
              </p>
            </div>

            <div className="bg-neutral-900/80 border border-white/10 p-4 rounded-xl relative group hover:border-emerald-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Sprout className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base font-display">
                SOIL CONDITIONS
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Soil type, soil pH levels, organic carbon, and dynamic N-P-K nutrient balances.
              </p>
            </div>

            <div className="bg-neutral-900/80 border border-white/10 p-4 rounded-xl relative group hover:border-emerald-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <CloudRain className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base font-display">
                WEATHER CONDITIONS
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Rainfall volume & timing, temperature swings, humidity spikes, and seasonal heat stress.
              </p>
            </div>

            <div className="bg-neutral-900/80 border border-white/10 p-4 rounded-xl relative group hover:border-emerald-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Wrench className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm md:text-base font-display">
                CULTIVATION PRACTICES
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Irrigation regimens, seed density, fertilizer dosage, and planting calendar dates.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Transition Sequence: SOURCES -> UNCERTAINTY -> DIFFICULT PLANNING */}
        <div className="bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            The Cascade of Farm Uncertainty
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Box 1 */}
            <div className="p-4 rounded-xl bg-neutral-950/70 border border-white/10">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">State 01</div>
              <div className="font-bold text-white text-base md:text-lg">
                MULTIPLE FARM DATA SOURCES
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Disparate variables across soil, weather, crop genetics and farming inputs.
              </p>
            </div>

            {/* Transition Arrow Desktop */}
            <div className="hidden md:flex flex-col items-center justify-center text-amber-400">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 mb-1">Interaction Complexity</span>
              <div className="w-full flex items-center justify-center gap-1">
                <div className="h-0.5 w-16 bg-gradient-to-r from-emerald-500 to-amber-500"></div>
                <ArrowRight className="w-5 h-5 text-amber-400 shrink-0" />
              </div>
            </div>

            {/* Box 2 (Uncertainty) */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">State 02</div>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="font-bold text-amber-200 text-base md:text-lg">
                UNCERTAINTY
              </div>
              <p className="text-xs text-amber-300/80 mt-1">
                Different factors influence crop production, making expected yield difficult to estimate before harvest.
              </p>
            </div>

            {/* Transition Arrow Mobile */}
            <div className="md:hidden flex justify-center text-amber-400">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Transition Arrow Desktop 2 */}
            <div className="hidden md:flex flex-col items-center justify-center text-rose-400 md:col-span-3 -my-2">
              <div className="w-full flex items-center justify-center gap-2">
                <div className="h-0.5 w-32 bg-gradient-to-r from-amber-500 to-rose-500"></div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300">Downstream Consequence</span>
                <ArrowDown className="w-4 h-4 text-rose-400" />
                <div className="h-0.5 w-32 bg-gradient-to-r from-rose-500 to-amber-500"></div>
              </div>
            </div>

            {/* Box 3 Full Width */}
            <div className="md:col-span-3 p-4 rounded-xl bg-neutral-950/90 border border-rose-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">State 03 / Consequence</div>
                <div className="font-bold text-white text-base md:text-xl font-display">
                  DIFFICULT PRODUCTION PLANNING
                </div>
                <p className="text-xs text-neutral-300 mt-1 max-w-2xl">
                  Unpredictable harvest volumes impair market commitments, seasonal credit repayment, post-harvest storage, and input budgeting.
                </p>
              </div>
              <div className="text-xs font-mono text-rose-300 bg-rose-950/50 border border-rose-500/20 px-3 py-2 rounded-lg shrink-0">
                High Risk · Lower Resilience
              </div>
            </div>
          </div>
        </div>

        {/* Human-Centered Quote Callout */}
        <div className="border-l-4 border-emerald-400 bg-emerald-950/20 py-3 px-5 rounded-r-xl">
          <p className="text-base md:text-lg text-emerald-100 font-medium italic">
            “Farmers need better information before making cultivation and production decisions.”
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-white/5">
        <div>Problem Statement: SSA025 — Crop-Yield Forecasting System</div>
        <div className="font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
      </div>
    </div>
  );
};
