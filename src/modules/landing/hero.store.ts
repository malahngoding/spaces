import { enableLegendStateReact } from '@legendapp/state/react';
import { observable } from '@legendapp/state';

export const count = observable<number>(0);

type CountActionType = {
  increment: () => void;
  decrement: () => void;
};
export const countAction: CountActionType = {
  increment: () => {
    console.log(`increment`);
    count.set(count.get() + 1);
  },
  decrement: () => {
    count.set(count.get() - 1);
  },
};

count.onChange((text) => console.log('text changed to', text));
enableLegendStateReact();
