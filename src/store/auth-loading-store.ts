import create from 'zustand';

interface AuthLoading {
  isLoading: boolean;
  toggleLoading: () => void;
}

export const useAuthLoading = create<AuthLoading>((set) => ({
  isLoading: false,
  toggleLoading: () =>
    set((state: AuthLoading) => ({
      isLoading: !state.isLoading,
    })),
}));
