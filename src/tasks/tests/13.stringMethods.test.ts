import { describe, it, expect } from 'vitest';

import { getUpperCase, getLowerCase, getPartOfString, getIndexOfSubstring, getCapitalizedString, getTruncatedString } from '../13.stringMethods';

describe('string methods', () => {
  it('should return upper case string', () => {
    expect(getUpperCase('test')).equal('TEST');
    expect(getUpperCase('TEST')).equal('TEST');
    expect(getUpperCase('Oleg')).equal('OLEG');
  });

  it('should return lower case string', () => {
    expect(getLowerCase('test')).equal('test');
    expect(getLowerCase('TEST')).equal('test');
    expect(getLowerCase('Oleg')).equal('oleg');
  });

  it('should return string starting from start argument and ending with finish argument', () => {
    expect(getPartOfString('stringify', 0, 6)).equal('string');
    expect(getPartOfString('stringify', 2, 6)).equal('ring');
    expect(getPartOfString('stringify',5 ,8)).equal('gif');
  });

  it('should return starting index of substring in initial string', () => {
    expect(getIndexOfSubstring('stringify', 'string')).equal(0);
    expect(getIndexOfSubstring('stringify', 'ring')).equal(2);
    expect(getIndexOfSubstring('stringify', 'gif')).equal(5);
    expect(getIndexOfSubstring('stringify', 'fy')).equal(7);
  });

  it('should return lower case string with first capital letter', () => {
    expect(getCapitalizedString('test')).equal('Test');
    expect(getCapitalizedString('TEST')).equal('Test');
    expect(getCapitalizedString('Oleg')).equal('Oleg');
    expect(getCapitalizedString('john')).equal('John');
  });

  it('should return string with ... after limit', () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur lectus vel enim fermentum vulputate.'
    expect(getTruncatedString(text, 10)).equal('Lorem ipsu...')
    expect(getTruncatedString(text, 20)).equal('Lorem ipsum dolor si...')
    expect(getTruncatedString(text, 55)).equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit...')
    expect(getTruncatedString(text, 220)).equal(text)
  })
});
