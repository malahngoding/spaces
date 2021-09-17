import create from 'zustand';

interface Application {
  insteadVersion: string;
  spacesVersion: string;
}

export const useAppStore = create<Application>(() => ({
  insteadVersion: `0.0.5`,
  spacesVersion: `0.0.1`,
}));
