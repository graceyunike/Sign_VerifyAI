import { IMAGE_URLS } from '../constants';
import { cn } from '../lib/utils';
import { View } from '../types';

interface XAIFeedbackViewProps {
  onNavigate: (view: View) => void;
}

export function XAIFeedbackView({ onNavigate }: XAIFeedbackViewProps) {
  return (
    <div className="flex flex-col gap-section-gap">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
        <div>
          <div className="flex items-center gap-stack-sm mb-stack-sm">
            <span className="font-mono-label text-mono-label text-secondary tracking-widest uppercase">Session Evaluation</span>
            <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
            <span className="font-mono-label text-mono-label text-on-surface-variant">Task #402-B</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Explainable AI (XAI) Feedback</h2>
        </div>
        <div className="flex items-center gap-stack-md">
          <div className="inline-flex items-center gap-stack-sm px-gutter py-stack-sm rounded-full bg-surface-variant border border-outline-variant/50">
            <span className="w-2 h-2 rounded-full bg-[#eab308]"></span>
            <span className="font-label-md text-label-md text-on-surface-variant">Medium Confidence (0.65)</span>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-container-padding">
        {/* Left Column: Video & Timeline */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-stack-md">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-[32px] relative overflow-hidden group">
            <div className="absolute inset-0 border border-dashed border-outline-variant/20 m-[16px] pointer-events-none rounded-lg"></div>
            <div className="relative w-full aspect-video bg-surface-variant rounded-lg overflow-hidden border border-outline-variant/50">
              {/* Simulated skeletal lines */}
              <div className="absolute inset-0 z-10 opacity-60 mix-blend-screen pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline points="30,60 40,40 50,30 60,42 70,56" fill="none" stroke="#00ffcc" strokeWidth="0.5" strokeDasharray="1 1" />
                  <circle cx="40" cy="40" r="1" fill="#00ffcc" />
                  <circle cx="50" cy="30" r="1.5" fill="#ff3333" />
                </svg>
              </div>
              <img 
                alt="XAI Frame Analysis" 
                className="w-full h-full object-cover grayscale opacity-90" 
                src={IMAGE_URLS.traineeFeed} 
              />
              <div className="absolute top-stack-md left-stack-md z-20 flex gap-stack-sm">
                <span className="px-2 py-1 bg-surface-container-lowest/80 backdrop-blur-sm rounded text-[10px] font-mono-label text-on-surface shadow-sm border border-outline-variant/30 uppercase">frame: 00:04:23</span>
                <span className="px-2 py-1 bg-error/90 backdrop-blur-sm rounded text-[10px] font-mono-label text-on-error shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">warning</span> OCCLUSION DETECTED
                </span>
              </div>
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-on-surface/10 backdrop-blur-[2px]">
                <button className="w-16 h-16 rounded-full bg-white text-primary shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[40px] ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
            </div>
          </div>

          {/* Error Timeline */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-container-padding flex flex-col gap-stack-md">
            <div className="flex justify-between items-center">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Error Timeline Analysis</h3>
              <span className="font-mono-label text-[11px] text-outline">00:00 - 00:15</span>
            </div>
            <div className="relative w-full h-8 bg-surface-container rounded-md overflow-hidden flex shadow-inner border border-outline-variant/20">
              <div className="h-full w-[20%] bg-secondary opacity-80" />
              <div className="h-full w-[15%] bg-secondary-fixed-dim" />
              <div className="h-full w-[10%] bg-error opacity-90" />
              <div className="h-full w-[35%] bg-secondary opacity-80" />
              <div className="h-full w-[5%] bg-error opacity-90" />
              <div className="h-full flex-1 bg-secondary opacity-80" />
              <div className="absolute top-0 bottom-0 left-[28%] w-[2px] bg-primary shadow-[0_0_8px_rgba(0,30,55,0.5)] z-10">
                <div className="absolute -top-1 -translate-x-1/2 w-3 h-3 rotate-45 bg-primary"></div>
              </div>
            </div>
            <div className="flex gap-stack-lg text-[10px] font-mono-label text-outline mt-1 uppercase">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-secondary"></span> Optimal</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-secondary-fixed-dim"></span> Warning</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-error"></span> Critical Error</span>
            </div>
          </div>
        </div>

        {/* Right Column: XAI Details */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-stack-lg">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-6 flex flex-col gap-stack-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary-fixed-dim"></div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md-mobile text-on-surface mb-1">Evaluation Rationale</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">System explanation for confidence score</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-display-lg text-[32px] font-bold text-on-surface leading-none">0.65</span>
                <span className="font-label-md text-[10px] text-outline uppercase tracking-wide">Confidence</span>
              </div>
            </div>
            <div className="p-4 bg-surface-variant/30 rounded-lg border border-outline-variant/20 mt-2">
              <p className="font-body-md text-body-md text-on-surface leading-relaxed text-sm">
                The AI detected significant <strong className="text-error font-medium">occlusion</strong> during the core movement phase (00:04-00:06). The primary hand shape was partially obscured by the torso, reducing structural certainty.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-6 flex flex-col gap-stack-lg">
            <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/20 pb-stack-sm">AI Decision Factors & Weights</h3>
            <div className="flex flex-col gap-stack-lg">
              <div>
                <div className="flex justify-between items-center mb-1 text-[13px]">
                  <span className="font-body-sm text-on-surface font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-outline">pan_tool</span> Hand Position
                  </span>
                  <span className="font-mono-label text-on-surface-variant">35% Weight</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-error rounded-full" style={{ width: '42%' }}></div>
                </div>
                <p className="text-[11px] text-error mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">warning</span> High variance detected
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1 text-[13px]">
                  <span className="font-body-sm text-on-surface font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-outline">speed</span> Movement Speed
                  </span>
                  <span className="font-mono-label text-on-surface-variant">28% Weight</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1 text-[13px]">
                  <span className="font-body-sm text-on-surface font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-outline">face</span> Facial Expression
                  </span>
                  <span className="font-mono-label text-on-surface-variant">20% Weight</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-fixed-dim rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Bar */}
      <div className="flex justify-end items-center gap-stack-md pt-4 border-t border-outline-variant/30 mt-auto mb-8">
        <button 
          onClick={() => onNavigate('training')}
          className="px-6 py-2.5 rounded-lg border border-primary text-primary font-label-md hover:bg-surface-container transition-all cursor-pointer active:scale-95"
        >
          Back to Training
        </button>
        <button 
          onClick={() => onNavigate('dashboard')}
          className="px-6 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md hover:bg-on-secondary-container transition-all cursor-pointer active:scale-95 shadow-sm flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">engineering</span>
          Submit for Human Review
        </button>
      </div>
    </div>
  );
}
