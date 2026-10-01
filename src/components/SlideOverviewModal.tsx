import React from 'react';
import { SLIDES, PROJECT_METADATA } from '../data/presentationData';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

interface SlideOverviewModalProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  currentSlide,
  isOpen,
  onClose,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-neutral-950/90 backdrop-blur-md">
      <div className="bg-neutral-900 border border-white/10 w-full max-w-5xl rounded-2xl p-6 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <span>National Hackathon 6-Slide Pitch Deck</span>
              <span>·</span>
              <span>{PROJECT_METADATA.problemCode}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white font-display mt-0.5">
              Deck Navigation & Slide Overview
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded">
              {PROJECT_METADATA.teamId}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6-Slide Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SLIDES.map((slide) => {
            const isCurrent = currentSlide === slide.id;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`group cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between h-48 ${
                  isCurrent
                    ? 'bg-neutral-950 border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500'
                    : 'bg-neutral-950/70 border-white/10 hover:border-emerald-500/40 hover:bg-neutral-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded font-bold ${
                        isCurrent
                          ? 'bg-emerald-500 text-neutral-950'
                          : 'bg-neutral-800 text-neutral-400 group-hover:text-emerald-400'
                      }`}
                    >
                      SLIDE 0{slide.id}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {slide.durationSeconds}s
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {slide.title}
                  </h4>
                  <div className="text-[11px] text-emerald-400/80 font-mono mt-1">
                    {slide.category}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {slide.speakerNotes.keyMessage}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-neutral-400 group-hover:text-white transition-colors">
                  <span>Click to Present</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
          <div>Keyboard shortcuts: <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">←</kbd> <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">→</kbd> to navigate, <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">1-6</kbd> for direct slide, <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-200">F</kbd> for fullscreen</div>
          <div className="font-mono text-emerald-400">{PROJECT_METADATA.teamId}</div>
        </div>
      </div>
    </div>
  );
};
