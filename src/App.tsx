import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { DashboardView } from './views/DashboardView';
import { TrainingView } from './views/TrainingView';
import { XAIFeedbackView } from './views/XAIFeedbackView';
import { ValidationView } from './views/ValidationView';
import { ResultView } from './views/ResultView';
import { ProgressView } from './views/ProgressView';
import { View } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView onNavigate={(view) => setCurrentView(view)} />;
      case 'training':
        return <TrainingView onNavigate={(view) => setCurrentView(view)} />;
      case 'xai-feedback':
        return <XAIFeedbackView onNavigate={(view) => setCurrentView(view)} />;
      case 'validation':
        return <ValidationView onNavigate={(view) => setCurrentView(view)} />;
      case 'result':
        return <ResultView onNavigate={(view) => setCurrentView(view)} />;
      case 'progress':
        return <ProgressView />;
      default:
        return <DashboardView onNavigate={(view) => setCurrentView(view)} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Side Navigation */}
      <Sidebar 
        currentView={currentView} 
        onViewChange={(view) => setCurrentView(view)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto relative bg-surface-container-low/20">
        <TopBar currentView={currentView} />
        
        {/* Scrollable Canvas */}
        <div className="p-container-padding md:p-section-gap flex-1">
          <div className="max-w-7xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                id={`view-${currentView}`}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
