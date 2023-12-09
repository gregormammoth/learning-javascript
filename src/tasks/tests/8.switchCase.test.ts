import { describe, it, expect } from 'vitest';

import { getNumberName, getNumberGroupName } from '../8.switchCase';

describe('switch', () => {
  it ('Should return text name of the number from 0 to 9 and unknown by default', () => {
    expect(getNumberName(0)).equal('zero');
    expect(getNumberName(1)).equal('one');
    expect(getNumberName(2)).equal('two');
    expect(getNumberName(3)).equal('three');
    expect(getNumberName(4)).equal('four');
    expect(getNumberName(5)).equal('five');
    expect(getNumberName(6)).equal('six');
    expect(getNumberName(7)).equal('seven');
    expect(getNumberName(8)).equal('eight');
    expect(getNumberName(9)).equal('nine');
    expect(getNumberName(10)).equal('unknown');
    expect(getNumberName(99)).equal('unknown');
    expect(getNumberName(100)).equal('unknown');
    expect(getNumberName(-1)).equal('unknown');
  });

  it ('Should return text name of group zero/1 - 3/4-6/7-9/<0/>=10 and unknown if not a number', () => {
    expect(getNumberGroupName(0)).equal('zero');
    expect(getNumberGroupName(1)).equal('1-3');
    expect(getNumberGroupName(2)).equal('1-3');
    expect(getNumberGroupName(3)).equal('1-3');
    expect(getNumberGroupName(4)).equal('4-6');
    expect(getNumberGroupName(5)).equal('4-6');
    expect(getNumberGroupName(6)).equal('4-6');
    expect(getNumberGroupName(7)).equal('7-9');
    expect(getNumberGroupName(8)).equal('7-9');
    expect(getNumberGroupName(9)).equal('7-9');
    expect(getNumberGroupName(10)).equal('>=10');
    expect(getNumberGroupName(99)).equal('>=10');
    expect(getNumberGroupName(-1)).equal('<0');
    expect(getNumberGroupName(100)).equal('>=10');
    expect(getNumberGroupName('test')).equal('unknown');
  });
});
