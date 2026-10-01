import React from 'react';
import { SLIDE_IMAGES, PROJECT_METADATA } from '../../data/presentationData';
import { Sparkles, TrendingUp, Cpu, Compass, Layers } from 'lucide-react';

export const Slide1Opening: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-neutral-950 text-white p-8 md:p-14 select-none">
      {/* Cinematic Background Image with measured contrast scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={SLIDE_IMAGES.hero}
          alt="Indian agricultural field with AI data telemetry"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Deep forest scrim overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/85 to-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
        {/* Subtle AI Precision Mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      {/* Slide Top Metadata Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs md:text-sm font-semibold tracking-widest text-emerald-400 uppercase font-mono">
            {PROJECT_METADATA.problemDomain} | {PROJECT_METADATA.problemCode}
          </span>
        </div>
        <div className="text-xs md:text-sm text-neutral-400 font-mono tracking-wider">
          NATIONAL HACKATHON PITCH
        </div>
      </div>

      {/* Main Title & Hero Messaging */}
      <div className="relative z-10 max-w-4xl space-y-6 my-auto">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-300/80 bg-emerald-950/60 border border-emerald-500/20 px-3 py-1 rounded-md">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>Problem Code SSA025 Solution</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-display">
            CropGuard <span className="text-emerald-400">AI Pro</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-200 font-display tracking-tight">
            AI-Powered Crop Yield Forecasting
          </p>
        </div>

        <div className="pt-2">
          <p className="text-lg md:text-2xl font-medium text-emerald-300 italic border-l-2 border-emerald-400 pl-4 py-1">
            "{PROJECT_METADATA.tagline}"
          </p>
        </div>

        {/* Core Pillars preview */}
        <div className="pt-4 grid grid-cols-3 gap-3 max-w-2xl text-xs md:text-sm text-neutral-300">
          <div className="flex items-center gap-2 bg-neutral-900/60 border border-white/5 p-3 rounded-lg backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-white">Pre-Harvest Yield</div>
              <div className="text-[11px] text-neutral-400">Tons per hectare estimate</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-neutral-900/60 border border-white/5 p-3 rounded-lg backdrop-blur-sm">
            <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-white">Factor Attribution</div>
              <div className="text-[11px] text-neutral-400">Explainable AI weights</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-neutral-900/60 border border-white/5 p-3 rounded-lg backdrop-blur-sm">
            <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-white">Risk Intelligence</div>
              <div className="text-[11px] text-neutral-400">Soil, climate & inputs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar with strict Team ID */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 mt-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400">Innovation Track:</span>
          <span className="text-xs font-semibold text-white tracking-wide">{PROJECT_METADATA.primaryInnovation}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400">Pitch Identification:</span>
          <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-400/40 rounded text-emerald-400 text-xs md:text-sm font-mono font-bold tracking-wider">
            {PROJECT_METADATA.teamId}
          </div>
        </div>
      </div>
    </div>
  );
};
