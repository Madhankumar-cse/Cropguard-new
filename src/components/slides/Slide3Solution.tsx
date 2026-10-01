import React, { useState } from 'react';
import { PROJECT_METADATA } from '../../data/presentationData';
import { Database, Cpu, ArrowDown, BarChart3, PieChart, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export const Slide3Solution: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('all');

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-neutral-950 text-white p-8 md:p-12 select-none">
      {/* Subtle tech background matrix */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <span>Core System Architecture</span>
            <span>·</span>
            <span>End-to-End Pipeline</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white font-display tracking-tight mt-1">
            CropGuard AI Pro — Turning Farm Data into Forecasts
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
          <div className="text-xs text-emerald-400/80 font-mono mt-0.5">SLIDE 03 / 06</div>
        </div>
      </div>

      {/* Technical Architecture Canvas */}
      <div className="relative z-10 my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Large Central Architecture Diagram (Left/Center 7 cols) */}
        <div className="lg:col-span-7 bg-neutral-900/90 border border-emerald-500/20 rounded-2xl p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
            <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Multi-Source Predictive Pipeline</span>
            </span>
            <span className="text-[11px] font-mono text-neutral-400">Deterministic + ML Fusion</span>
          </div>

          <div className="space-y-3">
            {/* Level 1: Four Input Streams */}
            <div>
              <div className="text-[11px] font-mono uppercase text-neutral-400 mb-1.5 flex items-center justify-between">
                <span>Multi-Modal Farm Data Ingestion</span>
                <span className="text-emerald-400 font-bold">4 Feeds</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-neutral-950/80 border border-white/10 p-2 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-400">INPUT 01</div>
                  <div className="text-xs font-bold text-white mt-0.5 truncate">Historical Crop</div>
                  <div className="text-[10px] text-neutral-400">Past yields & trends</div>
                </div>
                <div className="bg-neutral-950/80 border border-white/10 p-2 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-400">INPUT 02</div>
                  <div className="text-xs font-bold text-white mt-0.5 truncate">Soil Data</div>
                  <div className="text-[10px] text-neutral-400">pH, NPK, type</div>
                </div>
                <div className="bg-neutral-950/80 border border-white/10 p-2 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-400">INPUT 03</div>
                  <div className="text-xs font-bold text-white mt-0.5 truncate">Weather Data</div>
                  <div className="text-[10px] text-neutral-400">Rain, temp, humidity</div>
                </div>
                <div className="bg-neutral-950/80 border border-white/10 p-2 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-400">INPUT 04</div>
                  <div className="text-xs font-bold text-white mt-0.5 truncate">Cultivation</div>
                  <div className="text-[10px] text-neutral-400">Irrigation & inputs</div>
                </div>
              </div>
            </div>

            {/* Central Down Arrow */}
            <div className="flex items-center justify-center my-0.5">
              <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                <ArrowDown className="w-3 h-3 animate-bounce" />
                <span>Feature Normalization & Spatial Alignment</span>
              </div>
            </div>

            {/* Level 2: AI YIELD FORECASTING ENGINE */}
            <div className="bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-emerald-950/90 border-2 border-emerald-400/70 p-3.5 rounded-xl shadow-lg relative">
              <div className="absolute top-2 right-3 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase text-emerald-300 font-bold">CORE ENGINE</span>
              </div>
              <div className="text-base md:text-lg font-black text-white font-display flex items-center gap-2">
                <span>AI YIELD FORECASTING ENGINE</span>
              </div>
              <p className="text-xs text-emerald-200/90 mt-1 max-w-xl">
                Ensemble gradient boosting + agro-climatic feature attribution models computing localized yield projections and uncertainty envelopes.
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-[10px] font-mono text-emerald-300/80">
                <span className="bg-neutral-950/60 px-2 py-0.5 rounded border border-emerald-400/20">Non-Linear Feature Interaction</span>
                <span className="bg-neutral-950/60 px-2 py-0.5 rounded border border-emerald-400/20">SHAP Factor Isolation</span>
                <span className="bg-neutral-950/60 px-2 py-0.5 rounded border border-emerald-400/20">Confidence Bounds</span>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex items-center justify-center my-0.5">
              <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                <ArrowDown className="w-3 h-3" />
                <span>Probabilistic Inference Output</span>
              </div>
            </div>

            {/* Level 3: Four Core Deliverables */}
            <div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-neutral-950 border border-emerald-500/40 p-2 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">Yield</div>
                  <div className="text-xs font-bold text-white mt-0.5">Expected Yield</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Metric t/ha</div>
                </div>
                <div className="bg-neutral-950 border border-emerald-500/40 p-2 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">Production</div>
                  <div className="text-xs font-bold text-white mt-0.5">Total Tonnage</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Based on Area</div>
                </div>
                <div className="bg-neutral-950 border border-emerald-500/40 p-2 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">Metric</div>
                  <div className="text-xs font-bold text-white mt-0.5">Confidence</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Statistical %</div>
                </div>
                <div className="bg-neutral-950 border border-amber-500/40 p-2 rounded-lg">
                  <div className="text-[10px] font-mono text-amber-400 uppercase">Profile</div>
                  <div className="text-xs font-bold text-white mt-0.5">Risk</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Vulnerability</div>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex items-center justify-center my-0.5">
              <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-mono">
                <ArrowDown className="w-3 h-3" />
                <span>Translating Metrics into Action</span>
              </div>
            </div>

            {/* Level 4: Farmer Decision Support */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-neutral-950 via-emerald-950/40 to-neutral-950 border border-emerald-500/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-display">Farmer Decision Support</div>
                  <div className="text-xs text-neutral-400">Input optimization · Harvest timing · Market & storage planning</div>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2 py-1 rounded">
                Actionable Output
              </span>
            </div>
          </div>
        </div>

        {/* Four Compact Feature Cards (Right 5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Core Functional Capabilities</span>
          </div>

          {/* Card 01 */}
          <div className="bg-neutral-900/80 border border-white/10 hover:border-emerald-500/50 p-3.5 rounded-xl transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">YIELD FORECAST</h4>
                  <div className="text-[11px] text-emerald-400 font-mono">Primary Core Innovation</div>
                </div>
              </div>
              <BarChart3 className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-neutral-300 mt-2 pl-10 leading-relaxed">
              Estimate expected crop yield before harvest with granular confidence intervals.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-neutral-900/80 border border-white/10 hover:border-emerald-500/50 p-3.5 rounded-xl transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">FACTOR ANALYSIS</h4>
                  <div className="text-[11px] text-emerald-400 font-mono">Explainable AI Attribution</div>
                </div>
              </div>
              <PieChart className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-neutral-300 mt-2 pl-10 leading-relaxed">
              Understand the major factors influencing the forecast (historical, soil, weather, cultivation).
            </p>
          </div>

          {/* Card 03 */}
          <div className="bg-neutral-900/80 border border-white/10 hover:border-amber-500/50 p-3.5 rounded-xl transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-mono font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">RISK INSIGHTS</h4>
                  <div className="text-[11px] text-amber-400 font-mono">Vulnerability Detection</div>
                </div>
              </div>
              <ShieldAlert className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-xs text-neutral-300 mt-2 pl-10 leading-relaxed">
              Identify potential soil deficiencies, weather anomalies, and cultivation risks early.
            </p>
          </div>

          {/* Card 04 */}
          <div className="bg-neutral-900/80 border border-white/10 hover:border-emerald-500/50 p-3.5 rounded-xl transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                  04
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">DECISION SUPPORT</h4>
                  <div className="text-[11px] text-emerald-400 font-mono">Agronomic & Market Action</div>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-neutral-300 mt-2 pl-10 leading-relaxed">
              Use forecast insights to support farming decisions, resource management, and sales.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-white/5">
        <div>Problem Code: SSA025 · High Precision Crop Yield Forecasting Engine</div>
        <div className="font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
      </div>
    </div>
  );
};
