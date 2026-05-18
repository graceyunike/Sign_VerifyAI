import { IMAGE_URLS } from '../constants';
import { cn } from '../lib/utils';
import { View } from '../types';

interface TrainingViewProps {
  onNavigate: (view: View) => void;
}

export function TrainingView({ onNavigate }: TrainingViewProps) {
  return (
    <div className="flex flex-col gap-section-gap flex-1">
      {/* Page Header */}
      <div className="flex flex-col gap-stack-sm md:flex-row md:justify-between md:items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Active Session</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Module 2: Basic Greetings</p>
        </div>
        <div className="flex items-center gap-gutter bg-surface-container-lowest px-gutter py-base rounded-full shadow-sm border border-outline-variant">
          <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-label-md text-label-md text-on-surface">Camera Active</span>
        </div>
      </div>

      {/* Fluid Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-section-gap flex-1 min-h-0">
        {/* Center/Left Column: Camera & Evaluation (8 cols) */}
        <div className="xl:col-span-8 flex flex-col gap-stack-lg h-full">
          {/* Camera Container with Safe Zone */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-[32px] flex-1 min-h-[400px] flex flex-col relative overflow-hidden group">
            {/* Video Player Area */}
            <div className="relative w-full h-full bg-inverse-surface rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
              <img 
                alt="Live Camera Feed" 
                className="absolute inset-0 w-full h-full object-cover opacity-80" 
                src={IMAGE_URLS.traineeFeed} 
              />
              
              {/* Skeletal Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path className="drop-shadow-md" d="M 40,50 L 45,40 L 42,30" fill="none" stroke="#9ff1eb" strokeWidth="0.5" />
                  <path className="drop-shadow-md" d="M 45,40 L 50,35" fill="none" stroke="#9ff1eb" strokeWidth="0.5" />
                  <path className="drop-shadow-md" d="M 60,50 L 55,40 L 58,30" fill="none" stroke="#9ff1eb" strokeWidth="0.5" />
                  <circle cx="40" cy="50" fill="#006a66" r="1" />
                  <circle cx="45" cy="40" fill="#006a66" r="1.5" />
                  <circle cx="42" cy="30" fill="#006a66" r="1" />
                  <circle cx="50" cy="35" fill="#006a66" r="1.5" />
                  <circle cx="60" cy="50" fill="#006a66" r="1" />
                  <circle cx="55" cy="40" fill="#006a66" r="1.5" />
                  <circle cx="58" cy="30" fill="#006a66" r="1" />
                </svg>
              </div>

              {/* Guidance Message */}
              <div className="absolute bottom-stack-lg left-1/2 -translate-x-1/2 z-20 bg-primary/90 backdrop-blur-sm px-gutter py-base rounded-full shadow-lg flex items-center gap-base border border-outline-variant/30 transition-all duration-300">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-body-sm text-body-sm text-on-primary">Good positioning. Continue signing.</span>
              </div>
            </div>
          </div>

          {/* Real-time AI Evaluation Panel */}
          <div className="bg-surface-container-lowest p-container-padding rounded-xl shadow-sm border border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-container-padding">
            <div>
              <div className="flex items-center gap-base mb-stack-sm text-on-surface">
                <span className="material-symbols-outlined">analytics</span>
                <h3 className="font-headline-md text-[20px] font-semibold">Real-Time Evaluation</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Continuous XAI metrics analysis.</p>
            </div>
            <div className="flex flex-col gap-stack-md justify-center">
              <div>
                <div className="flex justify-between font-label-md text-label-md mb-stack-sm">
                  <span className="text-on-surface-variant uppercase tracking-wider">Confidence</span>
                  <span className="text-on-surface font-bold">0.92</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-secondary w-[92%] rounded-full shadow-[0_0_8px_rgba(0,106,102,0.4)] transition-all duration-500"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-label-md text-label-md mb-stack-sm">
                  <span className="text-on-surface-variant uppercase tracking-wider">Pose Accuracy</span>
                  <span className="text-on-surface font-bold">88%</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-primary w-[88%] rounded-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Reference & Controls (4 cols) */}
        <div className="xl:col-span-4 flex flex-col gap-stack-lg">
          <div className="bg-surface-container-lowest p-container-padding rounded-xl shadow-sm border border-outline-variant flex flex-col gap-stack-md">
            <div className="border-b border-outline-variant pb-stack-sm">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase">Target Sign</span>
              <h3 className="font-headline-md text-[24px] text-on-surface mt-1">Selamat Pagi</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">"Good Morning" in BISINDO.</p>
            </div>
            <div className="aspect-[4/3] bg-surface-variant rounded-lg overflow-hidden relative shadow-sm border border-outline-variant group cursor-pointer">
              <img 
                alt="Reference Sign" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={IMAGE_URLS.targetSign} 
              />
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-md text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
            </div>
            <div className="bg-surface p-gutter rounded-lg border border-outline-variant flex flex-col gap-stack-sm">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md text-on-surface-variant">Keyframes Required</span>
                <span className="font-mono-label text-mono-label text-primary">3</span>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="flex-1 h-1 bg-secondary rounded-full"></div>
                <div className="flex-1 h-1 bg-surface-variant rounded-full"></div>
                <div className="flex-1 h-1 bg-surface-variant rounded-full"></div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Match the initial hand position to begin tracking.</p>
            </div>
          </div>

          {/* Wizard Controls */}
          <div className="mt-auto bg-surface p-container-padding rounded-xl border border-outline-variant shadow-sm border-dashed">
            <div className="flex items-center gap-base mb-stack-md">
              <span className="material-symbols-outlined text-outline">manufacturing</span>
              <h4 className="font-label-md text-label-md text-outline uppercase tracking-wider">Wizard Controls</h4>
            </div>
            <div className="grid grid-cols-2 gap-gutter">
              <button 
                onClick={() => onNavigate('xai-feedback')}
                className="px-gutter py-base bg-secondary text-on-secondary rounded-lg font-body-sm hover:bg-on-secondary-fixed-variant transition-all cursor-pointer active:scale-95 text-center shadow-sm"
              >
                Normal
              </button>
              <button 
                onClick={() => onNavigate('xai-feedback')}
                className="px-gutter py-base bg-surface-container text-on-surface rounded-lg font-body-sm hover:bg-surface-variant transition-all cursor-pointer active:scale-95 border border-outline-variant text-center"
              >
                Invalid Input
              </button>
              <button 
                onClick={() => onNavigate('xai-feedback')}
                className="px-gutter py-base bg-surface-container text-on-surface rounded-lg font-body-sm hover:bg-surface-variant transition-all cursor-pointer active:scale-95 border border-outline-variant text-center"
              >
                Uncertainty
              </button>
              <button 
                onClick={() => onNavigate('xai-feedback')}
                className="px-gutter py-base bg-surface-container text-on-surface rounded-lg font-body-sm hover:bg-surface-variant transition-all cursor-pointer active:scale-95 border border-outline-variant text-center"
              >
                Offline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
