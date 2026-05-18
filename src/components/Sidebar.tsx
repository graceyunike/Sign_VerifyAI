import { NAVIGATION_ITEMS } from '../constants';
import { View } from '../types';
import { cn } from '../lib/utils';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  return (
    <nav className="hidden md:flex flex-col h-screen w-64 left-0 top-0 border-r border-outline-variant bg-surface-container-low z-20 shadow-[4px_0_24px_rgba(0,30,55,0.05)] sticky">
      <div className="p-container-padding flex items-center gap-gutter border-b border-outline-variant">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined">domain</span>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md font-extrabold text-primary leading-tight">Training Portal</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">BISINDO Verification</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-stack-lg px-gutter flex flex-col gap-stack-sm">
        {NAVIGATION_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "group cursor-pointer flex items-center gap-gutter px-gutter py-base rounded-lg transition-all text-left",
              currentView === item.id
                ? "bg-secondary-container text-on-secondary-container font-semibold shadow-sm"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            )}
          >
            <span className={cn(
              "material-symbols-outlined",
              currentView === item.id && "fill"
            )} style={{ fontVariationSettings: currentView === item.id ? "'FILL' 1" : undefined }}>
              {item.icon}
            </span>
            <span className="font-body-md text-body-md whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="p-gutter border-t border-outline-variant flex flex-col gap-stack-sm">
        <button className="group cursor-pointer flex items-center gap-gutter px-gutter py-base rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all">
          <span className="material-symbols-outlined">help</span>
          <span className="font-body-md text-body-md">Support</span>
        </button>
        <button className="group cursor-pointer flex items-center gap-gutter px-gutter py-base rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-body-md text-body-md">Sign Out</span>
        </button>
      </div>
    </nav>
  );
}
