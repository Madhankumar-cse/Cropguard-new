import React, { useState } from 'react';
import { PROJECT_METADATA, HISTORICAL_CHART_DATA, INFLUENCING_FACTORS } from '../../data/presentationData';
import { Check, TrendingUp, DollarSign, ArrowUpDown, CloudSun, Sparkles, Layers } from 'lucide-react';

export const Slide5Intelligence: React.FC = () => {
  const [selectedFactor, setSelectedFactor] = useState<string | null>(null);

  // Chart coordinates mapping (Width 400, Height 160)
  // Min yield 3.5, Max yield 5.2
  const getY = (val: number) => {
    const min = 3.5;
    const max = 5.2;
    return 150 - ((val - min) / (max - min)) * 120;
  };

  const points = [
    { x: 50, y: getY(3.9), year: '2023', val: '3.9 t/ha', isForecast: false, label: 'Historical' },
    { x: 150, y: getY(4.2), year: '2024', val: '4.2 t/ha', isForecast: false, label: 'Historical' },
    { x: 250, y: getY(4.5), year: '2025', val: '4.5 t/ha', isForecast: false, label: 'Historical' },
    { x: 350, y: getY(4.8), year: '2026', val: '4.8 t/ha', isForecast: true, label: 'AI Forecast' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-neutral-950 text-white p-8 md:p-12 select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <span>Model Explainability & Supporting Analytics</span>
            <span>·</span>
            <span>Factor Attribution</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white font-display tracking-tight mt-1">
            More Than a Number — Understand the Forecast
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
          <div className="text-xs text-emerald-400/80 font-mono mt-0.5">SLIDE 05 / 06</div>
        </div>
      </div>

      {/* Main Section */}
      <div className="relative z-10 my-auto py-2 space-y-4">
        {/* Upper Two Columns: Chart + Factor Attribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Main Visual: Historical Yield -> AI Forecast (Line Chart) 7 cols */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>HISTORICAL YIELD → AI FORECAST</span>
                  </span>
                  <div className="text-xs text-neutral-400 mt-0.5">Multi-Year Trajectory & Pre-Harvest Yield Estimation</div>
                </div>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded font-medium">
                  Illustrative Demo Data
                </span>
              </div>

              {/* Responsive SVG Chart */}
              <div className="w-full h-44 relative mt-2 bg-neutral-950/60 rounded-xl p-2 border border-white/5 flex items-center justify-center">
                <svg viewBox="0 0 400 160" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="30" y1={getY(3.5)} x2="380" y2={getY(3.5)} stroke="#262626" strokeDasharray="3,3" />
                  <line x1="30" y1={getY(4.0)} x2="380" y2={getY(4.0)} stroke="#262626" strokeDasharray="3,3" />
                  <line x1="30" y1={getY(4.5)} x2="380" y2={getY(4.5)} stroke="#262626" strokeDasharray="3,3" />
                  <line x1="30" y1={getY(5.0)} x2="380" y2={getY(5.0)} stroke="#262626" strokeDasharray="3,3" />

                  {/* Y Axis Labels */}
                  <text x="5" y={getY(3.5) + 3} fill="#737373" fontSize="9" fontFamily="monospace">3.5</text>
                  <text x="5" y={getY(4.0) + 3} fill="#737373" fontSize="9" fontFamily="monospace">4.0</text>
                  <text x="5" y={getY(4.5) + 3} fill="#737373" fontSize="9" fontFamily="monospace">4.5</text>
                  <text x="5" y={getY(5.0) + 3} fill="#737373" fontSize="9" fontFamily="monospace">5.0</text>

                  {/* Historical Solid Line (2023 to 2025) */}
                  <path
                    d={`M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y}`}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Forecast Dashed Line (2025 to 2026) */}
                  <path
                    d={`M ${points[2].x} ${points[2].y} L ${points[3].x} ${points[3].y}`}
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="3.5"
                    strokeDasharray="6,4"
                    strokeLinecap="round"
                  />

                  {/* Confidence Envelope around 2026 Forecast */}
                  <circle cx={points[3].x} cy={points[3].y} r="18" fill="#10b981" fillOpacity="0.15" />
                  <circle cx={points[3].x} cy={points[3].y} r="28" fill="#10b981" fillOpacity="0.08" />

                  {/* Data Points and Callouts */}
                  {points.map((pt, i) => (
                    <g key={pt.year}>
                      {/* Node Circle */}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={pt.isForecast ? 6 : 5}
                        fill={pt.isForecast ? '#34d399' : '#10b981'}
                        stroke="#050505"
                        strokeWidth="2"
                      />
                      {/* Metric Value */}
                      <text
                        x={pt.x}
                        y={pt.y - 12}
                        fill={pt.isForecast ? '#34d399' : '#ffffff'}
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {pt.val}
                      </text>
                      {/* Year Label */}
                      <text
                        x={pt.x}
                        y="152"
                        fill="#a3a3a3"
                        fontSize="10"
                        fontWeight={pt.isForecast ? 'bold' : 'normal'}
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {pt.year}
                      </text>
                      {/* Type Label */}
                      <text
                        x={pt.x}
                        y="162"
                        fill={pt.isForecast ? '#34d399' : '#525252'}
                        fontSize="8"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {pt.isForecast ? 'Forecast' : 'Actual'}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Chart Summary Bar */}
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Baseline: <strong className="text-white font-mono">3.9 → 4.5 t/ha</strong> historical trend</span>
              </div>
              <div className="font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                2026 Forecast: 4.8 t/ha
              </div>
            </div>
          </div>

          {/* Beside the Chart: FACTORS INFLUENCING THE FORECAST 5 cols */}
          <div className="lg:col-span-5 bg-neutral-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                  FACTORS INFLUENCING THE FORECAST
                </span>
                <span className="text-[10px] font-mono text-neutral-400">Explainable Weights</span>
              </div>

              {/* 6 Key Influencing Factors with Checkmarks */}
              <div className="space-y-2">
                {INFLUENCING_FACTORS.map((factor) => (
                  <div
                    key={factor.id}
                    onClick={() => setSelectedFactor(selectedFactor === factor.id ? null : factor.id)}
                    className="p-2 rounded-lg bg-neutral-950/70 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-xs font-medium text-white group-hover:text-emerald-300 transition-colors">
                          {factor.name.split(' (')[0]}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        {factor.impactPercentage}%
                      </span>
                    </div>
                    {selectedFactor === factor.id && (
                      <p className="text-[11px] text-neutral-400 mt-1 pl-6 leading-tight">
                        {factor.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-neutral-400 mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
              <span>Attribution Method: Shapley Additive Explanations</span>
              <span className="text-emerald-400 font-mono">100% Accounted</span>
            </div>
          </div>
        </div>

        {/* Supporting Section: BEYOND YIELD FORECASTING */}
        <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                BEYOND YIELD FORECASTING
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded">
                Supporting Ecosystem Features
              </span>
            </div>
            <span className="text-[11px] text-neutral-400 italic">
              Yield forecasting remains the core solution; supporting modules augment farmer planning.
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-neutral-950/80 border border-white/5 p-3 rounded-xl hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Market Demand</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Regional commodity demand curves to align harvest timelines with buyer requisitions.
              </p>
            </div>

            <div className="bg-neutral-950/80 border border-white/5 p-3 rounded-xl hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>Price Trends</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Historical mandi price seasonality to optimize pre-booking and avoid distress sales.
              </p>
            </div>

            <div className="bg-neutral-950/80 border border-white/5 p-3 rounded-xl hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <ArrowUpDown className="w-3.5 h-3.5 text-emerald-400" />
                <span>Crop Comparison</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Comparative yield and input cost modeling across alternate crops for pre-sowing decisions.
              </p>
            </div>

            <div className="bg-neutral-950/80 border border-white/5 p-3 rounded-xl hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <CloudSun className="w-3.5 h-3.5 text-emerald-400" />
                <span>Weather Insights</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Localized medium-range agro-meteorological advisories for targeted irrigation intervals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-white/5">
        <div>Problem Code: SSA025 · Transparent Multi-Variable Predictive Modeling</div>
        <div className="font-mono text-neutral-400">{PROJECT_METADATA.teamId}</div>
      </div>
    </div>
  );
};
