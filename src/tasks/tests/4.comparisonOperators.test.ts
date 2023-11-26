import { describe, it, expect } from 'vitest';

import {
  greaterThan,
  greaterThanOrEqual,
  lessThan,
  lessThanOrEqual,
  equal,
  equalValueAndEqualType,
  notEqual,
  notEqualAndNotEqualType,
} from '../4.comparisonOperators';

describe('comparison operators', () => {
  it('is first argument greater than second', () => {
    expect(greaterThan(2, 1,)).equal(true);
    expect(greaterThan(10, 1,)).equal(true);
    expect(greaterThan(1, -1,)).equal(true);
    expect(greaterThan('b', 'a')).equal(true);
    expect(greaterThan(1, 2,)).equal(false);
    expect(greaterThan(-1, 1,)).equal(false);
    expect(greaterThan(1, 1,)).equal(false);
    expect(greaterThan('b', 'b')).equal(false);
    expect(greaterThan('b', 'c')).equal(false);
  });

  it('is first argument greater or equal than second', () => {
    expect(greaterThanOrEqual(2, 1,)).equal(true);
    expect(greaterThanOrEqual(10, 1,)).equal(true);
    expect(greaterThanOrEqual('b', 'a')).equal(true);
    expect(greaterThanOrEqual(1, -1,)).equal(true);
    expect(greaterThanOrEqual(1, 2,)).equal(false);
    expect(greaterThanOrEqual(-1, 1,)).equal(false);
    expect(greaterThanOrEqual('b', 'c')).equal(false);
    expect(greaterThanOrEqual(1, 1,)).equal(true);
    expect(greaterThanOrEqual('b', 'b')).equal(true);
  });

  it('is first argument less than second', () => {
    expect(lessThan(2, 1,)).equal(false);
    expect(lessThan(10, 1,)).equal(false);
    expect(lessThan(1, -1,)).equal(false);
    expect(lessThan('b', 'a',)).equal(false);
    expect(lessThan(1, 2,)).equal(true);
    expect(lessThan(-1, 1)).equal(true);
    expect(lessThan(1, 1,)).equal(false);
    expect(lessThan('b', 'b')).equal(false);
    expect(lessThan('b', 'c')).equal(true);
  });

  it('is first argument less or equal than second', () => {
    expect(lessThanOrEqual(2, 1,)).equal(false);
    expect(lessThanOrEqual(10, 1,)).equal(false);
    expect(lessThanOrEqual(1, -1,)).equal(false);
    expect(lessThanOrEqual('b', 'a')).equal(false);
    expect(lessThanOrEqual(1, 2,)).equal(true);
    expect(lessThanOrEqual(-1, 1,)).equal(true);
    expect(lessThanOrEqual(1, 1,)).equal(true);
    expect(lessThanOrEqual('b', 'b')).equal(true);
    expect(lessThanOrEqual('b', 'c')).equal(true);
  });

  it('is first argument equal to second', () => {
    expect(equal(2, 1,)).equal(false);
    expect(equal(10, 1,)).equal(false);
    expect(equal(1, -1)).equal(false);
    expect(equal(1, 2,)).equal(false);
    expect(equal(-1, 1,)).equal(false);
    expect(equal(1, 1,)).equal(true);
    expect(equal('1', 1,)).equal(true);
    expect(equal('b', 'a')).equal(false);
    expect(equal('b', 'b')).equal(true);
    expect(equal('b', 'c')).equal(false);
    expect(equal(null, undefined)).equal(true);
  });

  it('is first argument and its type equal to second argument and type', () => {
    expect(equalValueAndEqualType(2, 1)).equal(false);
    expect(equalValueAndEqualType(10, 1)).equal(false);
    expect(equalValueAndEqualType(1, -1)).equal(false);
    expect(equalValueAndEqualType(1, 2)).equal(false);
    expect(equalValueAndEqualType(-1, 1)).equal(false);
    expect(equalValueAndEqualType(1, 1)).equal(true);
    expect(equalValueAndEqualType('1', 1)).equal(false);
    expect(equalValueAndEqualType('b', 'a')).equal(false);
    expect(equalValueAndEqualType('b', 'b')).equal(true);
    expect(equalValueAndEqualType('b', 'c')).equal(false);
    expect(equalValueAndEqualType(null, undefined)).equal(false);
  });

  it('is first argument not equal to second', () => {
    expect(notEqual(2, 1)).equal(true);
    expect(notEqual(10, 1)).equal(true);
    expect(notEqual(1, -1)).equal(true);
    expect(notEqual(1, 2)).equal(true);
    expect(notEqual(-1, 1)).equal(true);
    expect(notEqual(1, 1)).equal(false);
    expect(notEqual('1', 1,)).equal(false);
    expect(notEqual('b', 'a')).equal(true);
    expect(notEqual('b', 'b')).equal(false);
    expect(notEqual('b', 'c')).equal(true);
    expect(notEqual(null, undefined)).equal(false);
  });

  it('is first argument and its type not equal to second argument and type', () => {
    expect(notEqualAndNotEqualType(2, 1)).equal(true);
    expect(notEqualAndNotEqualType(10, 1)).equal(true);
    expect(notEqualAndNotEqualType(1, -1)).equal(true);
    expect(notEqualAndNotEqualType(1, 2)).equal(true);
    expect(notEqualAndNotEqualType(-1, 1)).equal(true);
    expect(notEqualAndNotEqualType(1, 1)).equal(false);
    expect(notEqualAndNotEqualType('1', 1,)).equal(true);
    expect(notEqualAndNotEqualType('b', 'a')).equal(true);
    expect(notEqualAndNotEqualType('b', 'b')).equal(false);
    expect(notEqualAndNotEqualType('b', 'c')).equal(true);
    expect(notEqualAndNotEqualType(null, undefined)).equal(true);
  });
});
