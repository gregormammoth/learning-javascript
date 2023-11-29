import { describe, it, expect } from 'vitest';

import {
  greaterThanOrEqualMinAndLessThenOrEqualMax,
  greaterThanMinAndNotEqualExclude,
  isString,
  isNumberAndLessThenOrEqualMax,
  lessThanExcludeStartOrGreaterThanExcludeEnd
} from '../6.comparisonAndLogicalOperators';

describe('comparison and logical operators', () => {
  it('should return true if first argument greater than or equal min argument and less than or equal max argument', () => {
    expect(greaterThanOrEqualMinAndLessThenOrEqualMax(5, 1, 10)).equal(true);
    expect(greaterThanOrEqualMinAndLessThenOrEqualMax(20, 0, 31)).equal(true);
    expect(greaterThanOrEqualMinAndLessThenOrEqualMax(55, 10, 100)).equal(true);
    expect(greaterThanOrEqualMinAndLessThenOrEqualMax(1, 1, 10)).equal(true);
    expect(greaterThanOrEqualMinAndLessThenOrEqualMax(10, 1, 10)).equal(true);
    expect(greaterThanOrEqualMinAndLessThenOrEqualMax(11, 1, 10)).equal(false);
  });

  it('should return true if first argument greater than min argument and not equal exclude argument', () => {
    expect(greaterThanMinAndNotEqualExclude(5, 1, 10)).equal(true);
    expect(greaterThanMinAndNotEqualExclude(20, 0, 31)).equal(true);
    expect(greaterThanMinAndNotEqualExclude(55, 10, 100)).equal(true);
    expect(greaterThanMinAndNotEqualExclude(1, 1, 10)).equal(false);
    expect(greaterThanMinAndNotEqualExclude(0, 1, 10)).equal(false);
    expect(greaterThanMinAndNotEqualExclude(10, 1, 10)).equal(false);
    expect(greaterThanMinAndNotEqualExclude('10', 1, 10)).equal(false);
    expect(greaterThanMinAndNotEqualExclude(10, 1, '10')).equal(false);
    expect(greaterThanMinAndNotEqualExclude(11, 1, 10)).equal(true);
  });

  it ('should return true if first argument is type of string', () => {
    expect(isString('test')).equal(true);
    expect(isString('1')).equal(true);
    expect(isString('true')).equal(true);
    expect(isString(1)).equal(false);
    expect(isString(true)).equal(false);
    expect(isString([])).equal(false);
    expect(isString({})).equal(false);
  });

  it ('should return true if first argument less than or equal max and type of first argument is a number', () => {
    expect(isNumberAndLessThenOrEqualMax(5, 10)).equal(true);
    expect(isNumberAndLessThenOrEqualMax(10, 10)).equal(true);
    expect(isNumberAndLessThenOrEqualMax('5', 10)).equal(false);
    expect(isNumberAndLessThenOrEqualMax(100, 10)).equal(false);
  });

  it('should return true if first argument less than excludeStart or greater than excludeEnd ', () => {
    expect(lessThanExcludeStartOrGreaterThanExcludeEnd(0, 1, 10)).equal(true);
    expect(lessThanExcludeStartOrGreaterThanExcludeEnd(-11, 1, 10)).equal(true);
    expect(lessThanExcludeStartOrGreaterThanExcludeEnd(110, 1, 100)).equal(true);
    expect(lessThanExcludeStartOrGreaterThanExcludeEnd(1, 1, 10)).equal(false);
    expect(lessThanExcludeStartOrGreaterThanExcludeEnd(10, 1, 10)).equal(false);
    expect(lessThanExcludeStartOrGreaterThanExcludeEnd(5, 1, 10)).equal(false);
  });
});
