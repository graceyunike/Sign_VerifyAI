import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { cn } from '../lib/utils';

const ACCURACY_DATA = [
  { name: 'S1', ai: 55, human: 45 },
  { name: 'S2', ai: 65, human: 60 },
  { name: 'S3', ai: 60, human: 55 },
  { name: 'S4', ai: 75, human: 70 },
  { name: 'S5', ai: 85, human: 80 },
  { name: 'S6', ai: 80, human: 75 },
  { name: 'S7', ai: 85, human: 80 },
  { name: 'S8', ai: 90, human: 85 },
  { name: 'S9', ai: 95, human: 95 },
  { name: 'S10', ai: 90, human: 85 },
  { name: 'S11', ai: 85, human: 80 },
  { name: 'S12', ai: 79, human: 79 },
];

const SKILL_DATA = [
  { subject: 'Hand Shape', A: 70, B: 88, fullMark: 100 },
  { subject: 'Movement', A: 55, B: 68, fullMark: 100 },
  { subject: 'Expression', A: 42, B: 55, fullMark: 100 },
  { subject: 'Position', A: 48, B: 62, fullMark: 100 },
  { subject: 'Orientation', A: 75, B: 91, fullMark: 100 },
];

const CONFIDENCE_DATA = [
  { name: 'S1', value: 0.5 },
  { name: 'S2', value: 0.55 },
  { name: 'S3', value: 0.6 },
  { name: 'S4', value: 0.65 },
  { name: 'S5', value: 0.68 },
  { name: 'S6', value: 0.72 },
  { name: 'S7', value: 0.75 },
  { name: 'S8', value: 0.78 },
  { name: 'S9', value: 0.8 },
  { name: 'S10', value: 0.82 },
  { name: 'S11', value: 0.85 },
  { name: 'S12', value: 0.75 },
];

export function ProgressView() {
  return (
    <div className="flex flex-col gap-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-md">
        <div>
          <h1 className="font-headline-lg text-primary">Your Progress</h1>
          <p className="font-body-lg text-on-surface-variant mt-1">Review your BISINDO training metrics and AI verification scores.</p>
        </div>
        <div className="flex gap-stack-md">
          <div className="flex items-center border border-outline-variant rounded-lg bg-surface px-4 py-2 shadow-sm">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">calendar_today</span>
            <select className="bg-transparent border-none text-body-md font-body-md text-on-surface focus:ring-0 cursor-pointer outline-none">
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          <button className="bg-secondary text-on-secondary px-gutter py-2 rounded-lg font-label-md flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">download</span>
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant text-[11px] uppercase tracking-wider">Current Accuracy</span>
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
            </div>
          </div>
          <div>
            <div className="font-display-lg text-primary text-[32px]">79%</div>
            <div className="flex items-center gap-1 mt-2 text-secondary">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="font-label-md text-[12px]">+4% vs last period</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant text-[11px] uppercase tracking-wider">Total Sessions</span>
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-lg">video_camera_front</span>
            </div>
          </div>
          <div>
            <div className="font-display-lg text-primary text-[32px]">12</div>
            <div className="flex items-center gap-1 mt-2 text-on-surface-variant">
              <span className="font-label-md text-[11px]">Active training phase</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant text-[11px] uppercase tracking-wider">Avg AI Confidence</span>
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[#45a3ce] text-lg">psychology</span>
            </div>
          </div>
          <div>
            <div className="font-display-lg text-primary text-[32px]">0.65</div>
            <div className="flex items-center gap-1 mt-2 text-error">
              <span className="material-symbols-outlined text-sm">warning</span>
              <span className="font-label-md text-[12px]">Requires improvement</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant text-[11px] uppercase tracking-wider">Pending Review</span>
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[#e57373] text-lg">pending_actions</span>
            </div>
          </div>
          <div>
            <div className="font-display-lg text-primary text-[32px]">4</div>
            <div className="flex items-center gap-1 mt-2 text-on-surface-variant">
              <span className="font-label-md text-[11px]">Awaiting HITL verification</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col min-h-[400px]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline-sm text-primary">Accuracy Over Time</h3>
              <p className="font-body-sm text-on-surface-variant mt-1">AI score vs Human-verified score per session</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0 border-b-2 border-dashed border-gray-400"></div>
                <span>AI Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0 border-b-2 border-secondary"></div>
                <span>Human Verified</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ACCURACY_DATA} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis domain={[40, 100]} fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="ai" stroke="#9ca3af" strokeDasharray="5 5" strokeWidth={2} dot={{ fill: 'white', stroke: '#9ca3af', r: 3 }} />
                <Line type="monotone" dataKey="human" stroke="#1D7874" strokeWidth={3} dot={{ fill: '#1D7874', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center gap-2 text-on-surface-variant bg-surface-container-low p-2 rounded-lg text-xs">
            <span className="material-symbols-outlined text-sm text-[#8b5cf6]">info</span>
            <p>Human Verified score reflects trainer corrections (HITL process).</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col">
          <div className="mb-6">
            <h3 className="font-headline-sm text-primary">AI Confidence Trend</h3>
            <p className="font-body-sm text-on-surface-variant mt-1">Higher = less need for human review</p>
          </div>
          <div className="flex-1 min-h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CONFIDENCE_DATA} margin={{ top: 5, right: 10, left: -30, bottom: 0 }}>
                <XAxis dataKey="name" hide />
                <YAxis domain={[0, 1]} hide />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#d97706" strokeWidth={2} dot={{ fill: '#d97706', r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 border-t border-outline-variant pt-4 space-y-2 text-[12px]">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#10b981]"></div><span className="text-on-surface-variant">High (0.80+)</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div><span className="text-on-surface-variant">Medium (0.50–0.79)</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#ef4444]"></div><span className="text-on-surface-variant">Low (&lt; 0.50)</span></div>
            <div className="mt-4 font-bold text-[#d97706]">Current: 0.65 — Medium</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-8">
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline-sm text-primary">Skill Breakdown</h3>
              <p className="font-body-sm text-on-surface-variant mt-1">Current vs previous performance</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span>Previous</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span>Current</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SKILL_DATA} margin={{ top: 5, right: 30, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="subject" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="A" fill="#d1d5db" radius={[2, 2, 0, 0]} barSize={20} />
                <Bar dataKey="B" fill="#1D7874" radius={[2, 2, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {SKILL_DATA.map(skill => (
              <div key={skill.subject} className="flex items-center gap-4 text-xs">
                <span className="w-24 text-on-surface-variant font-medium">{skill.subject}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-full transition-all" style={{ width: `${skill.B}%` }}></div>
                </div>
                <span className="w-8 font-bold">{skill.B}%</span>
                <span className="text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-bold">+{skill.B - skill.A}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center justify-center">
          <div className="w-full mb-4">
            <h3 className="font-headline-sm text-primary text-center">Skill Radar</h3>
            <p className="font-body-sm text-on-surface-variant mt-1 text-center">Current skill distribution</p>
          </div>
          <div className="flex-1 w-full h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_DATA}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" fontSize={10} />
                <Radar name="Skills" dataKey="B" stroke="#1D7874" fill="#1D7874" fillOpacity={0.2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center w-full mt-4">
            <p className="font-label-md text-secondary font-bold">Strongest: Orientation (91%)</p>
            <p className="font-body-sm text-[#d97706] mt-1 text-xs">Focus area: Expression (55%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
