import core, { greet, tokens } from './core';

describe('Core', () => {
  it('should contain all core utilities', () => {
    expect(core).toStrictEqual({
      greet,
      tokens,
    });
  });

  it('should contain greet utility', () => {
    expect(typeof greet).toBe('function');
  });

  it('should contain tokens', () => {
    expect(typeof tokens).toBe('object');
  });
});
