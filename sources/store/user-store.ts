import create from 'zustand';

interface UserStore {
  userName: string;
  setUserName: (value: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userName: '',
  setUserName: (value) =>
    set(() => ({
      userName: value,
    })),
}));
