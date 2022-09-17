import create from 'zustand';

type NaviState = {
  showNaviModal: boolean;
};

type NaviAction = {
  toggleNavi: () => void;
};

const initialState: NaviState = {
  showNaviModal: false,
};

export const useNavi = create<NaviState & NaviAction>((set, get) => ({
  showNaviModal: initialState.showNaviModal,
  toggleNavi: () => {
    set({ showNaviModal: !get().showNaviModal });
  },
}));
