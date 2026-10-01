import React, { useState, useEffect } from 'react';
import { SLIDES, PROJECT_METADATA } from '../data/presentationData';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Maximize, Minimize, FileText, Grid, Timer } from 'lucide-react';

interface PresentationNavProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (slideNumber: number) => void;
  onToggleNotes: () => void;
  onToggleGrid: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showNotes: boolean;
  showGrid: boolean;
}

export const PresentationNav: React.FC<PresentationNavProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onSelectSlide,
  onToggleNotes,
  onToggleGrid,
  isFullscreen,
  onToggleFullscreen,
  showNotes,
  showGrid,
}) => {
  // 4-Minute Hackathon Pitch Timer (240 seconds)
  const TOTAL_TIMER_SECONDS = 240;
  const [secondsRemaining, setSecondsRemaining] = useState<number>(TOTAL_TIMER_SECONDS);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (secondsRemaining === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, secondsRemaining]);

  const resetTimer = () => {
    setIsTimerRunning(false);
    setSecondsRemaining(TOTAL_TIMER_SECONDS);
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const isWarning = secondsRemaining < 45 && secondsRemaining > 0;
  const isExpired = secondsRemaining === 0;

  return (
    <header className="no-print bg-neutral-950/90 border-t border-white/10 px-4 py-2.5 backdrop-blur-md flex items-center justify-between z-30 select-none">
      {/* Zone 1: Brand & Team ID */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold tracking-tight text-white font-display hidden sm:inline">
          CropGuard AI Pro
        </span>
        <span className="hidden sm:inline text-neutral-600">|</span>
        <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
          {PROJECT_METADATA.teamId}
        </div>
      </div>

      {/* Zone 2: Slide Navigation & Filmstrip Pills */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          aria-label="Previous slide"
          className="p-1.5 rounded-lg bg-neutral-900 border border-white/10 hover:border-emerald-500/40 text-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Numbers */}
        <div className="flex items-center gap-1">
          {SLIDES.map((slide) => (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(slide.id)}
              className={`h-7 px-2.5 rounded-md text-xs font-mono transition-all ${
                currentSlide === slide.id
                  ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              {slide.id}
            </button>
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          aria-label="Next slide"
          className="p-1.5 rounded-lg bg-neutral-900 border border-white/10 hover:border-emerald-500/40 text-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Zone 3: Presenter Tools (4-Min Pitch Timer, Notes, Grid, Fullscreen) */}
      <div className="flex items-center gap-2">
        {/* Hackathon 4-Minute Timer */}
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono transition-colors ${
            isExpired
              ? 'bg-rose-950/60 border-rose-500 text-rose-300'
              : isWarning
              ? 'bg-amber-950/60 border-amber-500 text-amber-300 animate-pulse'
              : 'bg-neutral-900 border-white/10 text-neutral-300'
          }`}
          title="4-Minute Hackathon Pitch Timer"
        >
          <Timer className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="font-bold">{formatTimer(secondsRemaining)}</span>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="hover:text-white transition-colors ml-0.5 p-0.5"
            aria-label={isTimerRunning ? 'Pause timer' : 'Start timer'}
          >
            {isTimerRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
          </button>
          <button
            onClick={resetTimer}
            className="hover:text-white transition-colors p-0.5 text-neutral-400"
            aria-label="Reset timer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        {/* Presenter Pitch Notes */}
        <button
          onClick={onToggleNotes}
          className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all ${
            showNotes
              ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
              : 'bg-neutral-900 border-white/10 text-neutral-300 hover:text-white'
          }`}
          title="Toggle Pitch Notes (N)"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden md:inline">Script</span>
        </button>

        {/* Slide Grid / Overview */}
        <button
          onClick={onToggleGrid}
          className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all ${
            showGrid
              ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
              : 'bg-neutral-900 border-white/10 text-neutral-300 hover:text-white'
          }`}
          title="View All Slides Grid (G)"
        >
          <Grid className="w-4 h-4" />
          <span className="hidden md:inline">Deck</span>
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white transition-all"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
