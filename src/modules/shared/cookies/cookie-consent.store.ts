import { proxy, subscribe } from 'valtio';

const state = proxy(
  JSON.parse(localStorage.getItem('instead-consent') as string) || {
    consentValue: `neutral`,
  },
);

subscribe(state, () => {
  localStorage.setItem('instead-consent', JSON.stringify(state));
});

export const setConsentValue = (value: string) => {
  state.consentValue = value;
};
