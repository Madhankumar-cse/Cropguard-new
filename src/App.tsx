import React, { useState, useEffect, useRef } from 'react';
import { SLIDES, PROJECT_METADATA } from './data/presentationData';
import { Slide1Opening } from './components/slides/Slide1Opening';
import { Slide2Challenge } from './components/slides/Slide2Challenge';
import { Slide3Solution } from './components/slides/Slide3Solution';
import { Slide4HowItWorks } from './components/slides/Slide4HowItWorks';
import { Slide5Intelligence } from './components/slides/Slide5Intelligence';
import { Slide6Vision } from './components/slides/Slide6Vision';
import { PresentationNav } from './components/PresentationNav';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { SlideOverviewModal } from './components/SlideOverviewModal';
import { Printer, HelpCircle } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showKeyHelp, setShowKeyHelp] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = SLIDES.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const selectSlide = (slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      setCurrentSlide(slideNum);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fallback or permission blocked
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {});
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not trigger if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          prevSlide();
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          e.preventDefault();
          selectSlide(parseInt(e.key, 10));
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setShowNotes((prev) => !prev);
          break;
        case 'g':
        case 'G':
        case 'd':
        case 'D':
          e.preventDefault();
          setShowGrid((prev) => !prev);
          break;
        case '?':
          e.preventDefault();
          setShowKeyHelp((prev) => !prev);
          break;
        case 'Escape':
          setShowNotes(false);
          setShowGrid(false);
          setShowKeyHelp(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  // Render individual slide component
  const renderSlide = (slideId: number) => {
    switch (slideId) {
      case 1:
        return <Slide1Opening />;
      case 2:
        return <Slide2Challenge />;
      case 3:
        return <Slide3Solution />;
      case 4:
        return <Slide4HowItWorks />;
      case 5:
        return <Slide5Intelligence />;
      case 6:
        return <Slide6Vision />;
      default:
        return <Slide1Opening />;
    }
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full h-screen bg-neutral-950 flex flex-col justify-between overflow-hidden relative"
    >
      {/* Top Subtle Control Bar */}
      <div className="no-print bg-neutral-950/80 border-b border-white/5 px-6 py-2 flex items-center justify-between text-xs text-neutral-400 select-none">
        <div className="flex items-center gap-3">
          <span className="font-mono text-emerald-400 font-semibold tracking-wider">
            {PROJECT_METADATA.problemCode}
          </span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-300 font-medium hidden sm:inline">
            Smart Agriculture Yield Forecasting
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowKeyHelp(!showKeyHelp)}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-[11px]"
            title="Keyboard Shortcuts (?)"
          >
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Shortcuts</span>
          </button>

          <button
            onClick={handlePrint}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-[11px]"
            title="Print or Export Deck to PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export PDF</span>
          </button>

          <div className="font-mono text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
            {PROJECT_METADATA.teamId}
          </div>
        </div>
      </div>

      {/* Main Presentation Stage (16:9 Aspect Ratio Container) */}
      <main className="flex-1 w-full max-w-[1550px] mx-auto p-2 md:p-4 lg:p-6 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full max-h-[880px] aspect-[16/9] bg-neutral-950 rounded-2xl shadow-2xl overflow-hidden border border-white/10 relative transition-all duration-300 ease-in-out">
          {renderSlide(currentSlide)}
        </div>
      </main>

      {/* Bottom Presentation Navigation Dock */}
      <PresentationNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        onSelectSlide={selectSlide}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onToggleGrid={() => setShowGrid(!showGrid)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        showNotes={showNotes}
        showGrid={showGrid}
      />

      {/* Presenter Pitch Notes Modal */}
      <PresenterNotesModal
        currentSlide={currentSlide}
        isOpen={showNotes}
        onClose={() => setShowNotes(false)}
        onSelectSlide={selectSlide}
      />

      {/* Slide Overview / Grid Deck Modal */}
      <SlideOverviewModal
        currentSlide={currentSlide}
        isOpen={showGrid}
        onClose={() => setShowGrid(false)}
        onSelectSlide={selectSlide}
      />

      {/* Keyboard Shortcuts Helper Drawer */}
      {showKeyHelp && (
        <div className="fixed bottom-16 right-6 z-40 bg-neutral-900 border border-white/10 p-4 rounded-xl shadow-2xl text-xs space-y-2 max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="font-bold text-white font-display">Keyboard Navigation</span>
            <button
              onClick={() => setShowKeyHelp(false)}
              className="text-neutral-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-neutral-300">
            <div><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white">Space</kbd> / <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white">→</kbd></div>
            <div className="text-right">Next Slide</div>
            <div><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white">←</kbd> / <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white">Backspace</kbd></div>
            <div className="text-right">Prev Slide</div>
            <div><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white">1 - 6</kbd></div>
            <div className="text-right">Jump to Slide</div>
            <div><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white">F</kbd></div>
            <div className="text-right">Fullscreen</div>
            <div><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white">N</kbd></div>
            <div className="text-right">Pitch Script</div>
            <div><kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white">G</kbd></div>
            <div className="text-right">All Slides</div>
          </div>
        </div>
      )}

      {/* Hidden Print Container: Sequentially renders all 6 slides for clean print/PDF export */}
      <div className="hidden print:block">
        <div className="print-slide">{renderSlide(1)}</div>
        <div className="print-slide">{renderSlide(2)}</div>
        <div className="print-slide">{renderSlide(3)}</div>
        <div className="print-slide">{renderSlide(4)}</div>
        <div className="print-slide">{renderSlide(5)}</div>
        <div className="print-slide">{renderSlide(6)}</div>
      </div>
    </div>
  );
}
