import create from 'zustand';

interface FlashCardStreak {
  activeQuestion: number;
  correctAnswer: number;
  counter: number[];
  nextQuestion: () => void;
  answeringCorrect: () => void;
  timePunch: (time: number) => void;
  resetStreak: () => void;
}

export const useFlashCard = create<FlashCardStreak>((set) => ({
  activeQuestion: 0,
  correctAnswer: 0,
  counter: [],
  nextQuestion: () =>
    set((state: FlashCardStreak) => ({
      activeQuestion: state.activeQuestion + 1,
    })),
  answeringCorrect: () =>
    set((state: FlashCardStreak) => ({
      correctAnswer: state.correctAnswer + 1,
    })),
  timePunch: (time: number) =>
    set((state: FlashCardStreak) => ({
      counter: [...state.counter, time],
    })),
  resetStreak: () =>
    set((state: FlashCardStreak) => ({
      activeQuestion: 0,
      correctAnswer: 0,
      counter: [],
    })),
}));
