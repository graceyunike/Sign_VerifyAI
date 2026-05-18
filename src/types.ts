export type View = 'dashboard' | 'training' | 'xai-feedback' | 'validation' | 'result' | 'progress';

export interface Trainee {
  name: string;
  avatar: string;
}

export interface Session {
  id: string;
  sign: string;
  date: string;
  aiScore: number;
  humanScore?: number;
  confidence: 'High' | 'Medium' | 'Low';
  status: 'Awaiting HITL' | 'Feedback Ready' | 'Human Verified' | 'AI Approved';
  trainerAction?: 'Corrected' | 'Edited' | 'Approved';
}

export interface Metric {
  label: string;
  value: number;
  weight?: string;
  correctedValue?: number;
}
