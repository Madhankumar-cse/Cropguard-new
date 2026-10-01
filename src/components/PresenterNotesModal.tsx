import React from 'react';
import { SLIDES, PROJECT_METADATA } from '../data/presentationData';
import { X, Clock, HelpCircle, MessageSquareQuote } from 'lucide-react';

interface PresenterNotesModalProps {
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (slide: number) => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  currentSlide,
  isOpen,
  onClose,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  const activeSlideData = SLIDES.find((s) => s.id === currentSlide) || SLIDES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-emerald-500/30 w-full max-w-2xl rounded-2xl p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
              0{activeSlideData.id}
            </div>
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Presenter Pitch Guide · {activeSlideData.category}
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                {activeSlideData.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Time allocation & Key Takeaway */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-neutral-950 p-3 rounded-xl border border-white/5 flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="text-[10px] text-neutral-400 uppercase font-mono">Suggested Pace</div>
              <div className="text-white font-semibold font-mono">{activeSlideData.durationSeconds} Seconds</div>
            </div>
          </div>
          <div className="bg-neutral-950 p-3 rounded-xl border border-white/5 flex items-center gap-2">
            <div className="text-[10px] text-emerald-400 font-mono uppercase">Team Code</div>
            <div className="text-white font-semibold font-mono">{PROJECT_METADATA.teamId}</div>
          </div>
        </div>

        {/* Core Message */}
        <div className="bg-emerald-950/30 border border-emerald-500/30 p-3.5 rounded-xl">
          <div className="text-[11px] font-mono uppercase text-emerald-400 font-bold mb-1">
            Slide Anchor Message (Remember This)
          </div>
          <p className="text-sm text-emerald-100 font-medium">
            {activeSlideData.speakerNotes.keyMessage}
          </p>
        </div>

        {/* Verbatim Pitch Script */}
        <div>
          <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2 flex items-center gap-2">
            <MessageSquareQuote className="w-4 h-4 text-emerald-400" />
            <span>Recommended Spoken Script (4-Minute Pitch)</span>
          </div>
          <div className="space-y-2">
            {activeSlideData.speakerNotes.pitchScript.map((paragraph, idx) => (
              <div
                key={idx}
                className="bg-neutral-950/70 border border-white/5 p-3 rounded-lg text-xs md:text-sm text-neutral-200 leading-relaxed"
              >
                {paragraph}
              </div>
            ))}
          </div>
        </div>

        {/* Anticipated Judge Inquiries */}
        <div>
          <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Judge Q&A Defense Point</span>
          </div>
          {activeSlideData.speakerNotes.judgeAnticipatedQuestions.map((qa, idx) => (
            <div
              key={idx}
              className="bg-amber-950/20 border border-amber-500/20 p-3 rounded-lg text-xs text-amber-200/90 leading-relaxed"
            >
              {qa}
            </div>
          ))}
        </div>

        {/* Quick Slide Switcher in Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-neutral-400 font-mono">Jump slide:</span>
          <div className="flex gap-1.5">
            {SLIDES.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectSlide(s.id)}
                className={`w-7 h-7 rounded text-xs font-mono font-bold transition-all ${
                  currentSlide === s.id
                    ? 'bg-emerald-500 text-neutral-950'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {s.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
