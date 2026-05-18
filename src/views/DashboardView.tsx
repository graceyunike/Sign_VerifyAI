import { MOCK_SESSIONS } from '../constants';
import { cn } from '../lib/utils';
import { View } from '../types';

interface DashboardViewProps {
  onNavigate: (view: View) => void;
}

export function DashboardView({ onNavigate }: DashboardViewProps) {
  return (
    <div className="flex flex-col gap-section-gap">
      {/* Hero Section */}
      <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(0,30,55,0.05)] p-container-padding md:p-section-gap flex flex-col md:flex-row items-center justify-between gap-stack-lg border border-outline-variant/30">
        <div className="flex-1">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary mb-stack-sm">Welcome back, Trainee</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl">
            Continue your BISINDO verification training. The AI has analyzed your recent submissions and expert feedback is ready for review.
          </p>
          <div className="flex flex-wrap gap-gutter">
            <button 
              onClick={() => onNavigate('training')}
              className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-label-md hover:bg-on-secondary-fixed-variant transition-colors flex items-center gap-2 shadow-[0_2px_8px_rgba(0,106,102,0.2)]"
            >
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
              Start Training
            </button>
            <button 
              onClick={() => onNavigate('progress')}
              className="border border-primary text-primary px-6 py-3 rounded-lg font-label-md hover:bg-surface-container transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">analytics</span>
              View Progress
            </button>
          </div>
        </div>
        <div className="hidden md:block w-48 h-48 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center border-8 border-surface-container-lowest shadow-inner relative">
          <div className="absolute inset-0 rounded-full border-4 border-secondary border-t-transparent animate-[spin_10s_linear_infinite] opacity-30"></div>
          <span className="material-symbols-outlined text-[80px] text-primary opacity-80">model_training</span>
        </div>
      </section>

      {/* Overview Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-surface-container-lowest p-container-padding rounded-xl shadow-[0_2px_12px_rgba(0,30,55,0.03)] border border-outline-variant/30 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-stack-md">
            <div className="p-2 bg-primary-fixed rounded-lg text-on-primary-fixed">
              <span className="material-symbols-outlined">task_alt</span>
            </div>
            <span className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-mono-label text-[10px]">THIS WEEK</span>
          </div>
          <div>
            <p className="font-label-md text-on-surface-variant mb-1">Sessions Completed</p>
            <div className="flex items-baseline gap-2">
              <h3 className="font-display-lg text-[32px] font-bold text-primary">24</h3>
              <span className="text-secondary font-label-md text-[12px] flex items-center">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-container-padding rounded-xl shadow-[0_2px_12px_rgba(0,30,55,0.03)] border border-outline-variant/30 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-stack-md">
            <div className="p-2 bg-secondary-fixed rounded-lg text-on-secondary-container">
              <span className="material-symbols-outlined">percent</span>
            </div>
            <span className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-mono-label text-[10px]">ALL TIME</span>
          </div>
          <div>
            <p className="font-label-md text-on-surface-variant mb-1">Avg Accuracy Score</p>
            <div className="flex items-baseline gap-2">
              <h3 className="font-display-lg text-[32px] font-bold text-primary">88%</h3>
              <span className="text-secondary font-label-md text-[12px] flex items-center">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 3%
              </span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => onNavigate('result')}
          className="bg-primary text-on-primary p-container-padding rounded-xl shadow-[0_4px_16px_rgba(0,30,55,0.15)] flex flex-col justify-between relative overflow-hidden group text-left transition-colors hover:bg-tertiary"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container rounded-bl-full opacity-50 -z-0"></div>
          <div className="flex justify-between items-start mb-stack-md relative z-10">
            <div className="p-2 bg-on-primary/10 rounded-lg text-on-primary">
              <span className="material-symbols-outlined">forum</span>
            </div>
            <span className="bg-error px-2 py-1 rounded text-on-error font-mono-label text-[10px] animate-pulse">NEW</span>
          </div>
          <div className="relative z-10 w-full">
            <p className="font-label-md text-on-primary/80 mb-1">Last Performance Feedback</p>
            <h3 className="font-headline-md text-headline-md font-semibold text-on-primary flex items-center justify-between">
              Expert Review Ready
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </h3>
          </div>
        </button>
      </section>

      {/* System Workflow */}
      <section className="bg-surface-container-lowest p-container-padding md:p-stack-lg rounded-xl shadow-[0_2px_12px_rgba(0,30,55,0.03)] border border-outline-variant/30">
        <div className="mb-stack-lg">
          <h3 className="font-headline-md text-[20px] font-semibold text-primary">System Workflow</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Understanding the Human-in-the-Loop (HITL) process.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-stack-md relative pt-stack-sm pb-stack-sm">
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-outline-variant/50 -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-col items-center text-center relative z-10 bg-surface-container-lowest p-2 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface flex items-center justify-center border-2 border-surface-container-lowest shadow-sm mb-stack-sm">
              <span className="material-symbols-outlined text-[20px]">videocam</span>
            </div>
            <p className="font-label-md text-primary">Record</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10 bg-surface-container-lowest p-2 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center border-2 border-surface-container-lowest shadow-sm mb-stack-sm">
              <span className="material-symbols-outlined text-[20px]">psychology</span>
            </div>
            <p className="font-label-md text-primary">AI Eval</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10 bg-surface-container-lowest p-2 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-container flex items-center justify-center border-2 border-surface-container-lowest shadow-sm mb-stack-sm ring-4 ring-secondary-fixed/20">
              <span className="material-symbols-outlined text-[20px]">person_check</span>
            </div>
            <p className="font-label-md text-primary font-bold">Expert Review</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10 bg-surface-container-lowest p-2 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface flex items-center justify-center border-2 border-surface-container-lowest shadow-sm mb-stack-sm">
              <span className="material-symbols-outlined text-[20px]">rate_review</span>
            </div>
            <p className="font-label-md text-primary">Feedback</p>
          </div>
        </div>
      </section>

      {/* Recent Sessions */}
      <section className="bg-surface-container-lowest rounded-xl shadow-[0_2px_12px_rgba(0,30,55,0.03)] border border-outline-variant/30 overflow-hidden mb-8">
        <div className="p-container-padding border-b border-outline-variant/30 flex justify-between items-center bg-surface-bright">
          <h3 className="font-headline-md text-[20px] font-semibold text-primary">Recent Training Sessions</h3>
          <button className="text-secondary font-label-md hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-mono-label text-[11px] uppercase tracking-wider border-b border-outline-variant/50">
                <th className="p-4 font-medium">Session ID & Sign</th>
                <th className="p-4 font-medium">AI Score</th>
                <th className="p-4 font-medium">Human Score (HITL)</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-body-sm font-body-sm text-on-surface divide-y divide-outline-variant/30">
              {MOCK_SESSIONS.map((session) => (
                <tr key={session.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-[20px]">sign_language</span>
                      </div>
                      <div>
                        <p className="font-label-md text-primary">{session.id}: "{session.sign}"</p>
                        <p className="text-[12px] text-on-surface-variant">{session.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-label">{session.aiScore}%</span>
                      <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full",
                            session.aiScore > 75 ? "bg-secondary" : session.aiScore > 50 ? "bg-[#f59e0b]" : "bg-error"
                          )} 
                          style={{ width: `${session.aiScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    {session.humanScore !== undefined ? (
                      <div className="flex items-center gap-2">
                        <span className={cn("font-mono-label", session.humanScore < session.aiScore && "text-error")}>
                          {session.humanScore}%
                        </span>
                        <span className="material-symbols-outlined text-[14px] text-primary" title="Expert Adjusted">verified_user</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px]">pending</span>
                        <span className="text-[12px] italic">Pending Review</span>
                      </div>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={cn(
                      "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-label-md border",
                      session.status === 'Awaiting HITL' && "bg-surface-container text-on-surface-variant",
                      session.status === 'Feedback Ready' && "bg-[#fef2f2] text-[#991b1b] border-[#fecaca]",
                      session.status === 'Human Verified' && "bg-secondary-container text-on-secondary-container border-secondary/20"
                    )}>
                      {session.status === 'Feedback Ready' && <span className="material-symbols-outlined text-[12px]">warning</span>}
                      {session.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => {
                        if (session.status === 'Feedback Ready' || session.status === 'Human Verified') {
                          onNavigate('result');
                        } else {
                          onNavigate('validation');
                        }
                      }}
                      className="text-primary hover:text-secondary p-2 rounded-lg hover:bg-surface-container transition-colors border border-outline-variant/30"
                    >
                      {session.status === 'Awaiting HITL' ? 'Review' : 'View'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
