import create from 'zustand';

type NavigationSheetState = {
  showNavigationSheets: boolean;
};

type NavigationSheetAction = {
  toggleNavigationSheet: () => void;
  closeNavigationSheet: () => void;
};

const initialState: NavigationSheetState = {
  showNavigationSheets: false,
};

export const useNavigationSheet = create<
  NavigationSheetState & NavigationSheetAction
>((set) => ({
  showNavigationSheets: initialState.showNavigationSheets,
  toggleNavigationSheet: () =>
    set((state) => ({
      showNavigationSheets: !state.showNavigationSheets,
    })),
  closeNavigationSheet: () =>
    set((state) => ({
      showNavigationSheets: false,
    })),
}));
