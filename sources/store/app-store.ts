import create from 'zustand';
import { version } from '@utils/version';
interface Application {
  insteadVersion: string;
  spacesVersion: string;
}

export const useAppStore = create<Application>(() => ({
  spacesVersion: version,
  insteadVersion: `${version}-DS`,
}));
