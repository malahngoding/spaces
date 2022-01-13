import create from 'zustand';

type statusColor = 'green' | 'yellow' | 'red';

interface Status {
  isFilamentsUp: statusColor;
  isMicrosUp: statusColor;
  setFilamentsStatus: (state: statusColor) => void;
  setMicrosStatus: (state: statusColor) => void;
}

export const useStatusStore = create<Status>((set) => ({
  isFilamentsUp: 'yellow',
  isMicrosUp: 'yellow',
  setFilamentsStatus: async (state) => set({ isFilamentsUp: state }),
  setMicrosStatus: async (state) => set({ isMicrosUp: state }),
}));
