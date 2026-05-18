import { Session, View } from './types';

export const NAVIGATION_ITEMS: { id: View; label: string; icon: string; trainerOnly?: boolean }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'training', label: 'Training', icon: 'school' },
  { id: 'xai-feedback', label: 'XAI Feedback', icon: 'psychology' },
  { id: 'validation', label: 'Validation (Trainer only)', icon: 'verified_user', trainerOnly: true },
  { id: 'result', label: 'Result', icon: 'assignment_turned_in' },
  { id: 'progress', label: 'Progress', icon: 'trending_up' },
];

export const MOCK_TRAINEE = {
  name: 'Alex Chen',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXpgxEbNoq8Jlxb23AAlSeXRbEtS1XtIDAJL_nDewoM2qWfDMdWGxKGfLql97WQC-5QAto36BcRm0RWKQbY-5zlhMnnW6MEYLQvbo-dW6g-ShQltfJ05ogsba-N8W8cAM5s3svenodXAdJoKEBTxqpB-1v1IJ7cdzfPSH9N-c03i2Xfi3nBXnip2_LKSVHQ9MWrdKeOMcmjKAa6jfa-JchpFjM2vPykb_F8dFLUxeFIbdU-AcWOHTg9CZPKO0Ivenjo37cujseOuhL',
};

export const MOCK_SESSIONS: Session[] = [
  {
    id: 'S-1042',
    sign: 'Thank You',
    date: 'Oct 24, 10:30 AM',
    aiScore: 92,
    confidence: 'High',
    status: 'Awaiting HITL',
  },
  {
    id: 'S-1041',
    sign: 'Emergency',
    date: 'Oct 23, 14:15 PM',
    aiScore: 65,
    humanScore: 40,
    confidence: 'Medium',
    status: 'Feedback Ready',
    trainerAction: 'Corrected',
  },
  {
    id: 'S-1040',
    sign: 'Help',
    date: 'Oct 22, 09:45 AM',
    aiScore: 88,
    humanScore: 88,
    confidence: 'High',
    status: 'Human Verified',
    trainerAction: 'Approved',
  },
];

export const IMAGE_URLS = {
  traineeFeed: 'https://hackmd.io/_uploads/BJxm6r_JMg.png',
  expertReference: 'https://hackmd.io/_uploads/B1MbJIuyMe.png',
  targetSign: 'https://hackmd.io/_uploads/B1MbJIuyMe.png',
  moment1: 'https://hackmd.io/_uploads/Hy8-M8_kGl.png',
  moment2: 'https://hackmd.io/_uploads/Hkr2fIdyzl.png',
};
