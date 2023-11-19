import { describe, it, expect } from 'vitest';

import { transformToString, transformToNumber, transformToBoolean } from '../2.transformTypes';

describe('transform types', () => {
  it ('should transform any type to string', () => {
    expect(transformToString(123)).equal('123');
    expect(transformToString(true)).equal('true');
    expect(transformToString(undefined)).equal('undefined');
  });

  it ('should transform any type to number', () => {
    expect(transformToNumber('123')).equal(123);
    expect(transformToNumber('   123   ')).equal(123);
    expect(transformToNumber('1.23')).equal(1.23);
    expect(transformToNumber(true)).equal(1);
    expect(transformToNumber('string')).NaN;
  });

  it ('should transform any type to boolean', () => {
    expect(transformToBoolean('0')).equal(true);
    expect(transformToBoolean(' ')).equal(true);
    expect(transformToBoolean('')).equal(false);
  });
});
