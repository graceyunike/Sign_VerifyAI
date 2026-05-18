import { IMAGE_URLS } from '../constants';
import { cn } from '../lib/utils';

import { View } from '../types';

interface ResultViewProps {
  onNavigate: (view: View) => void;
}

export function ResultView({ onNavigate }: ResultViewProps) {
  return (
    <div className="flex flex-col gap-section-gap">
      {/* Header */}
      <section className="flex flex-col gap-stack-sm">
        <div className="flex items-center gap-base text-on-surface-variant font-body-sm">
          <span 
            onClick={() => onNavigate('progress')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Progress
          </span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="font-semibold text-primary font-mono-label tracking-wide lowercase">session #012</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Feedback Result</h1>
      </section>

      {/* Status Banner */}
      <section className="bg-primary text-on-primary rounded-xl p-container-padding flex flex-col md:flex-row items-start md:items-center justify-between gap-gutter shadow-md">
        <div className="flex items-center gap-gutter">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md font-semibold">Human Verified</h2>
            <p className="font-body-sm text-primary-fixed opacity-90 mt-1 uppercase text-[11px] tracking-wider">Expert Review Completed by Dr. Sari Dewi</p>
          </div>
        </div>
        <div className="text-left md:text-right font-mono-label text-mono-label text-primary-fixed-dim">
          <p>Date: Oct 24, 2023</p>
          <p>Time: 14:30 WIB</p>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Score Card */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl p-container-padding shadow-sm border border-outline-variant flex flex-col items-center text-center">
            <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-stack-md">Final Expert Score</h3>
            <div className="relative w-40 h-40 flex items-center justify-center mb-stack-lg">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="transparent" stroke="#eff4ff" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="transparent" stroke="#1D7874" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset={282.7 * (1 - 0.79)} className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-display-lg text-primary text-[40px]">79<span className="text-[20px]">%</span></span>
              </div>
            </div>
            <div className="w-full bg-surface-container-low rounded-lg p-stack-md flex justify-between items-center text-left">
              <div>
                <p className="font-label-md text-on-surface-variant text-[10px]">Original AI Suggestion</p>
                <p className="font-body-lg text-primary font-semibold">82%</p>
              </div>
              <span className="material-symbols-outlined text-outline">smart_toy</span>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-container-padding border border-outline-variant flex flex-col gap-stack-md">
            <h3 className="font-label-md text-secondary uppercase tracking-wider flex items-center gap-base">
              <span className="material-symbols-outlined text-[18px]">edit_note</span>
              Trainer Notes
            </h3>
            <p className="font-body-md text-on-surface italic border-l-4 border-secondary pl-stack-md py-stack-sm">
              "Good effort on the vocabulary. However, the AI missed a slight hesitation in the transition movements. I adjusted the score down slightly because fluid motion is critical for clarity. Keep practicing the flow between signs."
            </p>
          </div>
        </div>

        {/* Breakdown */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl p-container-padding shadow-sm border border-outline-variant">
            <h3 className="font-headline-md text-primary mb-stack-lg">Metric Breakdown</h3>
            <div className="flex flex-col gap-stack-lg">
              <div className="flex flex-col gap-stack-sm">
                <div className="flex justify-between items-center">
                  <span className="font-body-sm text-on-surface font-medium">Hand Shape</span>
                  <span className="font-mono-label text-secondary">90%</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex flex-col gap-stack-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-base text-[12px]">
                    <span className="font-body-sm text-on-surface font-medium text-sm">Movement (Fluidity)</span>
                    <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Expert Corrected</span>
                  </div>
                  <div className="flex items-center gap-stack-md font-mono-label">
                    <span className="text-outline line-through text-[12px]">85%</span>
                    <span className="text-error text-sm">70%</span>
                  </div>
                </div>
                <div className="relative w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="absolute h-full bg-outline opacity-30 rounded-full" style={{ width: '85%' }}></div>
                  <div className="absolute h-full bg-error rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex flex-col gap-stack-sm">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-body-sm text-on-surface font-medium">Position</span>
                  <span className="font-mono-label text-[#f59e0b]">85%</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-container-padding shadow-sm border border-outline-variant">
            <h3 className="font-headline-md text-primary mb-stack-lg">Key Moments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter text-sm">
              <div className="relative rounded-lg overflow-hidden border border-outline-variant group">
                <div className="aspect-video relative">
                  <img alt="Moment 1" className="w-full h-full object-cover" src={IMAGE_URLS.moment1} />
                  <div className="absolute top-2 right-2 bg-error text-on-error px-2 py-1 rounded text-[10px] font-bold shadow-sm uppercase">Review</div>
                </div>
                <div className="p-stack-md bg-surface">
                  <p className="font-label-md text-on-surface-variant font-mono-label text-[11px]">00:14 - Frame 12</p>
                  <p className="font-body-sm text-on-surface mt-1">Transition hands slightly lower than ideal plane.</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-outline-variant group">
                <div className="aspect-video relative">
                  <img alt="Moment 2" className="w-full h-full object-cover" src={IMAGE_URLS.moment2} />
                  <div className="absolute top-2 right-2 bg-secondary text-on-secondary px-2 py-1 rounded text-[10px] font-bold shadow-sm uppercase">Excellent</div>
                </div>
                <div className="p-stack-md bg-surface">
                  <p className="font-label-md text-on-surface-variant font-mono-label text-[11px]">00:32 - Frame 28</p>
                  <p className="font-body-sm text-on-surface mt-1">Strong, clear facial expression matching the sign context.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <section className="flex flex-col md:flex-row gap-gutter items-stretch mb-8">
        <div className="flex-1 bg-surface-container-high rounded-xl p-container-padding flex flex-col justify-center border border-outline-variant/20">
          <h3 className="font-headline-md text-primary mb-stack-md flex items-center gap-base">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            Next Steps
          </h3>
          <ul className="flex flex-col gap-stack-sm font-body-md text-on-surface">
            <li className="flex items-start gap-base">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
              Practice fluid transitions in the "Family" vocabulary set.
            </li>
            <li className="flex items-start gap-base">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
              Watch Expert Reference Video for Module 4.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-stack-md justify-center w-full md:w-auto shrink-0">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="bg-secondary text-on-secondary py-3 px-8 rounded-lg font-label-md w-full shadow-sm cursor-pointer hover:opacity-90 active:scale-95 transition-all"
          >
            Start New Session
          </button>
          <button 
            onClick={() => onNavigate('progress')}
            className="border border-primary text-primary py-3 px-8 rounded-lg font-label-md w-full cursor-pointer hover:bg-surface-container active:scale-95 transition-all"
          >
            View Full Progress
          </button>
        </div>
      </section>
    </div>
  );
}
