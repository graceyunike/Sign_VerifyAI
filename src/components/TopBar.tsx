import { MOCK_TRAINEE } from '../constants';
import { View } from '../types';

interface TopBarProps {
  currentView: View;
}

export function TopBar({ currentView }: TopBarProps) {
  const getViewTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Overview';
      case 'training': return 'Active Session';
      case 'xai-feedback': return 'XAI Feedback';
      case 'validation': return 'Trainer Validation';
      case 'result': return 'Feedback Result';
      case 'progress': return 'Your Progress';
      default: return 'SignVerify AI';
    }
  };

  return (
    <header className="bg-surface dark:bg-on-primary shadow-sm z-30 sticky top-0 border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-container-padding py-4 max-w-full">
        {/* Mobile Logo */}
        <div className="flex items-center gap-gutter md:hidden">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="font-display-lg text-headline-md font-bold text-primary">SignVerify AI</span>
        </div>

        {/* Desktop View Title */}
        <div className="hidden md:block">
          <span className="font-headline-md text-headline-md font-bold text-primary">{getViewTitle()}</span>
        </div>

        <div className="flex items-center gap-gutter">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full cursor-pointer active:scale-95 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant cursor-pointer active:scale-95 hover:bg-surface-container-high transition-colors overflow-hidden">
            <img 
              alt="Profile Avatar" 
              className="w-full h-full object-cover" 
              src={MOCK_TRAINEE.avatar} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
