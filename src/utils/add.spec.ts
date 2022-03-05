import * as actions from './add';

describe('Add', () => {
  it('it should return correct number, negative and positve', () => {
    expect(actions.add(-1, 2)).toEqual(1);
  });
  it('it should return correct number, positve and positve', () => {
    expect(actions.add(1, 5)).toEqual(6);
  });
  it('it should return correct number, negative and negative', () => {
    expect(actions.add(-1, -4)).toEqual(-5);
  });
  it('it should return correct number, positve and negative', () => {
    expect(actions.add(10, -4)).toEqual(6);
  });
});
