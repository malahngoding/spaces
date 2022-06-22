import version from '../../version.json';
import create from 'zustand';

interface Application {
  insteadVersion: string;
  spacesVersion: string;
}

export const useAppStore = create<Application>(() => ({
  insteadVersion: version.instead,
  spacesVersion: version.spaces,
}));
