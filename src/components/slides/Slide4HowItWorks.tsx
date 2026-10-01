import React, { useState } from 'react';
import { PROJECT_METADATA, DEMO_FORECASTS } from '../../data/presentationData';
import { ArrowRight, CheckCircle, Info, ShieldCheck, Gauge, TrendingUp, AlertTriangle } from 'lucide-react';

export const Slide4HowItWorks: React.FC = () => {
  const [selectedCropIndex, setSelectedCropIndex] = useState<number>(0);
  const currentDemo = DEMO_FORECASTS[selectedCropIndex];

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-neutral-950 text-white p-8 md:p-12 select-none">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <span>Operational Workflow & Methodology</span>
            <span>·</span>
            <span>Input to Output</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white font-display tracking-tight mt-1">
            From Farm Inputs to an Explainable Forecast
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
          <div className="text-xs text-emerald-400/80 font-mono mt-0.5">SLIDE 04 / 06</div>
        </div>
      </div>

      {/* Main Content Area: Left side 5-step process + Right side sample result */}
      <div className="relative z-10 my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Clean 5-Step Process (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>5-Step Deterministic to Explainable Machine Learning Pipeline</span>
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Step 01 */}
            <div className="bg-neutral-900/80 border border-white/10 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center shrink-0">
                <span className="text-[9px] font-mono text-emerald-400">STEP</span>
                <span className="text-xs font-bold text-white font-mono">01</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-white font-display tracking-wide uppercase">FARM DATA</div>
                <div className="text-xs text-neutral-300 flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Crop Variety</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Field Area (Hectares)</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Previous Yield Baseline</span>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-neutral-900/80 border border-white/10 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center shrink-0">
                <span className="text-[9px] font-mono text-emerald-400">STEP</span>
                <span className="text-xs font-bold text-white font-mono">02</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-white font-display tracking-wide uppercase">SOIL DATA</div>
                <div className="text-xs text-neutral-300 flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Soil Type & Texture</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">pH Level</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">NPK Ratio (N-P-K)</span>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-neutral-900/80 border border-white/10 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center shrink-0">
                <span className="text-[9px] font-mono text-emerald-400">STEP</span>
                <span className="text-xs font-bold text-white font-mono">03</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-white font-display tracking-wide uppercase">WEATHER + CULTIVATION</div>
                <div className="text-xs text-neutral-300 flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Rainfall</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Temperature</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Humidity</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Irrigation Practices</span>
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className="bg-emerald-950/40 border border-emerald-500/40 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex flex-col items-center justify-center shrink-0">
                <span className="text-[9px] font-mono text-emerald-400">STEP</span>
                <span className="text-xs font-bold text-white font-mono">04</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-emerald-300 font-display tracking-wide uppercase flex items-center gap-2">
                  <span>AI FORECAST ENGINE</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">Machine Learning</span>
                </div>
                <div className="text-xs text-neutral-300 flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-emerald-200 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-emerald-500/20">Expected Yield (t/ha)</span>
                  <span className="text-emerald-200 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-emerald-500/20">Production Estimate (Tons)</span>
                  <span className="text-emerald-200 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-emerald-500/20">Model Confidence %</span>
                </div>
              </div>
            </div>

            {/* Step 05 */}
            <div className="bg-neutral-900/80 border border-white/10 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center shrink-0">
                <span className="text-[9px] font-mono text-emerald-400">STEP</span>
                <span className="text-xs font-bold text-white font-mono">05</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-white font-display tracking-wide uppercase">EXPLAINABLE RESULT</div>
                <div className="text-xs text-neutral-300 flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Risk Profiling</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Influencing Factors</span>
                  <span className="text-emerald-300 font-mono text-[11px] bg-neutral-950 px-2 py-0.5 rounded border border-white/5">Decision Support Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Realistic Sample Result Card (5 Columns) */}
        <div className="lg:col-span-5">
          <div className="bg-neutral-900 border-2 border-emerald-500/40 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
            {/* Prominent Demo Output Banner */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded font-bold">
                  ILLUSTRATIVE DEMO OUTPUT
                </span>
                <h3 className="text-base md:text-lg font-black text-white font-display mt-1">
                  AI YIELD FORECAST
                </h3>
              </div>
              <Gauge className="w-5 h-5 text-emerald-400" />
            </div>

            {/* Crop Selector Tabs for interactive judge review */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-lg mb-4 border border-white/5">
              {DEMO_FORECASTS.map((demo, idx) => (
                <button
                  key={demo.crop}
                  onClick={() => setSelectedCropIndex(idx)}
                  className={`flex-1 py-1 px-2 text-xs font-medium rounded transition-all text-center ${
                    selectedCropIndex === idx
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {demo.crop.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Core Metrics Grid */}
            <div className="space-y-3">
              <div className="bg-neutral-950 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-neutral-400 font-mono uppercase">Target Crop</div>
                  <div className="text-lg font-bold text-white font-display">{currentDemo.crop}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-neutral-400 font-mono uppercase">Plot Size</div>
                  <div className="text-sm font-semibold text-emerald-400 font-mono">{currentDemo.areaHa} Hectares</div>
                </div>
              </div>

              {/* Yield & Production Highlight */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-gradient-to-b from-emerald-950/40 to-neutral-950 p-3 rounded-xl border border-emerald-500/30">
                  <div className="text-[10px] text-emerald-400 font-mono uppercase font-semibold">Expected Yield</div>
                  <div className="text-2xl md:text-3xl font-black text-white font-display font-mono mt-0.5">
                    {currentDemo.expectedYield}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Metric tons / hectare</div>
                </div>

                <div className="bg-gradient-to-b from-emerald-950/40 to-neutral-950 p-3 rounded-xl border border-emerald-500/30">
                  <div className="text-[10px] text-emerald-400 font-mono uppercase font-semibold">Expected Production</div>
                  <div className="text-2xl md:text-3xl font-black text-white font-display font-mono mt-0.5">
                    {currentDemo.expectedProduction}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Estimated total harvest</div>
                </div>
              </div>

              {/* Confidence & Risk */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-neutral-950 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] text-neutral-400 font-mono uppercase flex items-center justify-between">
                    <span>Confidence</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xl font-bold text-emerald-400 font-mono mt-1">
                    {currentDemo.confidence}%
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-1.5 mt-1.5 overflow-hidden">
                    <div
                      className="bg-emerald-400 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${currentDemo.confidence}%` }}
                    />
                  </div>
                </div>

                <div className="bg-neutral-950 p-3 rounded-xl border border-amber-500/20">
                  <div className="text-[10px] text-amber-400 font-mono uppercase flex items-center justify-between">
                    <span>Risk Profile</span>
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-xl font-bold text-amber-300 font-mono mt-1">
                    {currentDemo.risk}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5 truncate">
                    {currentDemo.riskDetails}
                  </div>
                </div>
              </div>

              {/* Explanatory Demo Output Disclaimer */}
              <div className="bg-neutral-950/80 p-2.5 rounded-lg border border-white/5 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <p className="text-[10px] text-neutral-400 leading-snug">
                  <span className="text-neutral-300 font-medium">Demonstration Notice:</span> The above parameters illustrate output formatting for Problem Statement SSA025 and are not presented as real-world field measured results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-white/5">
        <div>Problem Statement: SSA025 · End-to-End Pipeline Verification</div>
        <div className="font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
      </div>
    </div>
  );
};
