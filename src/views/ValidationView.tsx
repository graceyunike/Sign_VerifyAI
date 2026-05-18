import { useState } from 'react';
import { IMAGE_URLS } from '../constants';
import { cn } from '../lib/utils';
import { View } from '../types';

interface ValidationViewProps {
  onNavigate: (view: View) => void;
}

export function ValidationView({ onNavigate }: ValidationViewProps) {
  const [score, setScore] = useState(62);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const tags = ["Needs Expression", "Timing Issue", "Handshape Error"];

  return (
    <div className="flex flex-col gap-section-gap">
      {/* Page Header (Subheader info) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-stack-md">
        <div 
          className="cursor-pointer group flex flex-col"
          onClick={() => onNavigate('dashboard')}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_back</span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider group-hover:text-primary transition-colors">Session Review #402-B</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1">Module 4: Professional Greetings</h1>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">person</span> Trainee: Alex Chen
            <span className="text-outline-variant">|</span>
            <span className="material-symbols-outlined text-[18px]">schedule</span> Submitted: 10 mins ago
          </p>
        </div>
        <div className="flex items-center gap-stack-md bg-tertiary-container text-on-tertiary px-4 py-3 rounded-lg shadow-sm border border-tertiary">
          <span className="material-symbols-outlined text-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
          <div>
            <div className="font-label-md text-label-md text-tertiary-fixed uppercase">Trainer View</div>
            <div className="font-body-sm text-body-sm">Expert Validation Mode</div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-[#FFF8E1] border border-[#FFC107] rounded-lg p-4 flex items-start gap-4 shadow-sm relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFC107]"></div>
        <span className="material-symbols-outlined text-[#FF8F00] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
        <div className="flex-1">
          <h3 className="font-label-md text-label-md text-[#FF8F00] uppercase mb-1">Human Validation Required</h3>
          <p className="font-body-md text-body-md text-on-surface">AI Confidence is Medium (62%). Discrepancies detected in non-manual markers (facial expression) during the sign for "Good Morning".</p>
        </div>
      </div>

      {/* Main Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Col: Videos & Analysis */}
        <div className="lg:col-span-8 space-y-stack-lg flex flex-col">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-4">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">compare</span> Reference vs. Trainee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Reference Video */}
              <div className="space-y-2">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase px-1">Expert Reference</span>
                <div className="relative bg-black rounded-lg aspect-video overflow-hidden group">
                  <img alt="Reference" className="w-full h-full object-cover opacity-80" src={IMAGE_URLS.expertReference} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/50">
                      <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Trainee Video */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <span className="font-label-md text-label-md text-primary uppercase">Trainee Submission</span>
                  <span className="bg-[#FFF8E1] text-[#FF8F00] text-[10px] px-2 py-0.5 rounded-full font-mono-label border border-[#FFC107]/30 font-bold">00:04 ISSUE DETECTED</span>
                </div>
                <div className="relative bg-black rounded-lg aspect-video overflow-hidden group border-2 border-[#FFC107]">
                  <img alt="Trainee" className="w-full h-full object-cover opacity-80" src={IMAGE_URLS.traineeFeed} />
                  <div className="absolute inset-0 pointer-events-none">
                    <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <circle cx="45" cy="50" fill="#FFC107" r="1.5" />
                      <circle cx="55" cy="50" fill="#FFC107" r="1.5" />
                      <circle cx="50" cy="30" fill="#FFC107" r="2" />
                      <path d="M45,50 L50,30 L55,50" fill="none" stroke="#FFC107" strokeDasharray="1,1" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline */}
            <div className="mt-6 flex items-center gap-4">
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              </button>
              <div className="flex-1 h-2 bg-surface-container-high rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-[40%] bg-primary"></div>
                <div className="absolute top-0 left-[38%] h-full w-2 bg-[#FFC107] shadow-[0_0_8px_#FFC107]"></div>
              </div>
              <span className="font-mono-label text-mono-label text-on-surface-variant">00:04 / 00:10</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex-1 flex flex-col">
            <div className="p-4 border-b border-outline-variant bg-surface-bright flex justify-between items-center">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase">XAI Confidence Breakdown</h3>
              <div className="flex items-center gap-2">
                <span className="font-headline-md text-headline-md text-on-surface">62%</span>
                <span className="text-on-surface-variant text-sm">Overall</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-body-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    Handshape (S)
                  </span>
                  <span className="font-mono-label text-secondary">95%</span>
                </div>
                <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-body-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    Movement
                  </span>
                  <span className="font-mono-label text-secondary">88%</span>
                </div>
                <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[88%]"></div>
                </div>
              </div>
              <div className="bg-[#FFF8E1]/30 p-2 -mx-2 rounded-lg border border-[#FFC107]/20">
                <div className="flex justify-between mb-1">
                  <span className="font-body-sm text-[#FF8F00] flex items-center gap-2 font-medium">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                    Facial Expression (NMM)
                  </span>
                  <span className="font-mono-label text-[#FF8F00]">34%</span>
                </div>
                <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFC107] w-[34%]"></div>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 ml-6">AI notes: Lack of appropriate eyebrow raise expected for this greeting context.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Form */}
        <div className="lg:col-span-4 space-y-stack-lg">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed"></div>
            <div className="p-6 border-b border-outline-variant bg-surface-bright">
              <h2 className="font-headline-md text-on-surface mb-2">Trainer Validation</h2>
              <p className="font-body-sm text-on-surface-variant">Review AI findings and submit final verdict for Trainee Alex Chen.</p>
            </div>
            <div className="p-6 flex-1 space-y-6">
              <div className="space-y-2">
                <label className="font-label-md text-on-surface block">Override Score (Optional)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-tertiary" 
                    min="0" 
                    max="100" 
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                  />
                  <input 
                    type="number" 
                    className="w-20 rounded-md border-outline-variant shadow-sm text-center font-mono-label outline-none focus:ring-1 focus:ring-tertiary" 
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                  />
                </div>
                <p className="text-xs text-outline italic">Adjust AI score based on expert judgment.</p>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface block">Feedback & Correction Notes</label>
                <textarea className="w-full rounded-md border-outline-variant shadow-sm text-body-sm p-3 focus:ring-1 focus:ring-tertiary outline-none" rows={4} placeholder="Provide specific feedback..." defaultValue="The handshape and movement were good, but remember to raise your eyebrows during the initial greeting to convey the correct non-manual marker." />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant block uppercase text-[10px]">Quick Tags</label>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <span 
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={cn(
                        "px-3 py-1 rounded-full border text-xs cursor-pointer transition-all active:scale-95",
                        selectedTags.includes(tag) 
                          ? "bg-tertiary text-on-tertiary border-tertiary shadow-sm font-medium" 
                          : "border-outline-variant text-on-surface-variant border-outline-variant hover:bg-surface-variant/30"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-outline-variant bg-surface-bright space-y-3 mt-auto">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="w-full bg-secondary text-on-secondary font-label-md py-3 rounded-lg shadow-sm flex justify-center items-center gap-2 cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                Approve with Notes
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="bg-surface-container-lowest border border-outline text-on-surface font-label-md py-2.5 rounded-lg flex justify-center items-center gap-2 cursor-pointer hover:bg-surface-container active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Save Draft
                </button>
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="bg-error-container text-on-error-container font-label-md py-2.5 rounded-lg flex justify-center items-center gap-2 cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">cancel</span>
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Trail */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-6">
        <h3 className="font-label-md text-on-surface-variant uppercase mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">history</span> Verification Audit Trail
        </h3>
        <div className="relative pl-6 border-l border-outline-variant space-y-6">
          <div className="relative">
            <div className="absolute -left-[31px] bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-surface-container-lowest shadow-sm">
              <span className="material-symbols-outlined text-[12px]">smart_toy</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-body-sm text-on-surface font-medium text-sm">Initial AI Processing</p>
                <p className="text-xs text-on-surface-variant">Automated analysis completed. Scored 62%. Flagged for human review due to Low NMM confidence.</p>
              </div>
              <span className="font-mono-label text-[11px] text-outline">Oct 12, 10:45 AM</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[31px] bg-tertiary-fixed text-tertiary w-6 h-6 rounded-full flex items-center justify-center border-2 border-surface-container-lowest shadow-sm">
              <span className="material-symbols-outlined text-[12px]">admin_panel_settings</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-body-sm text-on-surface font-medium text-sm">Session Claimed</p>
                <p className="text-xs text-on-surface-variant">Trainer (Current User) opened session for expert validation.</p>
              </div>
              <span className="font-mono-label text-[11px] text-outline">Oct 12, 10:52 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
