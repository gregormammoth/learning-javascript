import { describe, it, expect } from 'vitest';

import {
  or,
  orBoolean,
  orThreeArguments,
  orThreeArgumentsBoolean,
  orFourArguments,
  and,
  andBoolean,
  andThreeArguments,
  andThreeArgumentsBoolean,
  andFourArguments,
  not
} from '../5.logicalOperators';

describe('logical operators', () => {
  it('first or second argument', () => {
    expect(or(true, false)).equal(true);
    expect(or(true, true)).equal(true);
    expect(or(false, true)).equal(true);
    expect(or(false, false)).equal(false);
    expect(or(1, 0)).equal(1);
    expect(or(null, 1)).equal(1);
    expect(or(null, 0)).equal(0);
  });

  it('first or second argument, always boolean result', () => {
    expect(orBoolean(true, false)).equal(true);
    expect(orBoolean(true, true)).equal(true);
    expect(orBoolean(false, true)).equal(true);
    expect(orBoolean(false, false)).equal(false);
    expect(orBoolean(1, 0)).equal(true);
    expect(orBoolean(null, 1)).equal(true);
    expect(orBoolean(null, 0)).equal(false);
  });

  it('first or second or third argument', () => {
    expect(orThreeArguments(true, false, false)).equal(true);
    expect(orThreeArguments(true, true, false)).equal(true);
    expect(orThreeArguments(false, true, false)).equal(true);
    expect(orThreeArguments(false, false, true)).equal(true);
    expect(orThreeArguments(false, false, false)).equal(false);
    expect(orThreeArguments(1, 0, false)).equal(1);
    expect(orThreeArguments(null, 0, 1)).equal(1);
    expect(orThreeArguments(undefined, null, 0)).equal(0);
    expect(orThreeArguments('', '', 'SuperCoder')).equal('SuperCoder');
  });

  it('first or second or third argument', () => {
    expect(orThreeArgumentsBoolean(true, false, false)).equal(true);
    expect(orThreeArgumentsBoolean(true, true, false)).equal(true);
    expect(orThreeArgumentsBoolean(false, true, false)).equal(true);
    expect(orThreeArgumentsBoolean(false, false, true)).equal(true);
    expect(orThreeArgumentsBoolean(false, false, false)).equal(false);
    expect(orThreeArgumentsBoolean(1, 0, false)).equal(true);
    expect(orThreeArgumentsBoolean(null, 0, 1)).equal(true);
    expect(orThreeArgumentsBoolean(undefined, null, 0)).equal(false);
    expect(orThreeArgumentsBoolean('', '', 'SuperCoder')).equal(true);
  });

  it('first or second or third or fourth argument', () => {
    expect(orFourArguments(true, false, false, false)).equal(true);
    expect(orFourArguments(true, true, false, false)).equal(true);
    expect(orFourArguments(false, true, false, false)).equal(true);
    expect(orFourArguments(false, false, true, false)).equal(true);
    expect(orFourArguments(false, false, false, true)).equal(true);
    expect(orFourArguments(false, false, false, false)).equal(false);
  });

  it('first and second argument', () => {
    expect(and(true, false)).equal(false);
    expect(and(true, true)).equal(true);
    expect(and(false, true)).equal(false);
    expect(and(false, false)).equal(false);
    expect(and(1, 0)).equal(0);
    expect(and(1, 2)).equal(2);
    expect(and(null, 1)).equal(null);
    expect(and(null, 0)).equal(null);
  });

  it('first and second argument, always boolean result', () => {
    expect(andBoolean(true, false)).equal(false);
    expect(andBoolean(true, true)).equal(true);
    expect(andBoolean(false, true)).equal(false);
    expect(andBoolean(false, false)).equal(false);
    expect(andBoolean(1, 0)).equal(false);
    expect(andBoolean(1, 2)).equal(true);
    expect(andBoolean(null, 1)).equal(false);
    expect(andBoolean(null, 0)).equal(false);
  });

  it('first and second and third argument', () => {
    expect(andThreeArguments(true, false, false)).equal(false);
    expect(andThreeArguments(true, true, false)).equal(false);
    expect(andThreeArguments(false, true, false)).equal(false);
    expect(andThreeArguments(false, false, true)).equal(false);
    expect(andThreeArguments(false, false, false)).equal(false);
    expect(andThreeArguments(true, true, true)).equal(true);
    expect(andThreeArguments(1, 0, false)).equal(0);
    expect(andThreeArguments(null, 0, 1)).equal(null);
    expect(andThreeArguments(undefined, null, 0)).equal(undefined);
    expect(andThreeArguments('', '', 'SuperCoder')).equal('');
  });

  it('first and second and third argument', () => {
    expect(andThreeArgumentsBoolean(true, false, false)).equal(false);
    expect(andThreeArgumentsBoolean(true, true, false)).equal(false);
    expect(andThreeArgumentsBoolean(false, true, false)).equal(false);
    expect(andThreeArgumentsBoolean(false, false, true)).equal(false);
    expect(andThreeArgumentsBoolean(false, false, false)).equal(false);
    expect(andThreeArgumentsBoolean(true, true, true)).equal(true);
    expect(andThreeArgumentsBoolean(1, 0, false)).equal(false);
    expect(andThreeArgumentsBoolean(null, 0, 1)).equal(false);
    expect(andThreeArgumentsBoolean(undefined, null, 0)).equal(false);
    expect(andThreeArgumentsBoolean('', '', 'SuperCoder')).equal(false);
  });

  it('first and second and third and fourth argument', () => {
    expect(andFourArguments(true, false, false, false)).equal(false);
    expect(andFourArguments(true, true, false, false)).equal(false);
    expect(andFourArguments(false, true, false, false)).equal(false);
    expect(andFourArguments(false, false, true, false)).equal(false);
    expect(andFourArguments(false, false, false, true)).equal(false);
    expect(andFourArguments(false, false, false, false)).equal(false);
    expect(andFourArguments(true, true, true, false)).equal(false);
    expect(andFourArguments(true, true, true, true)).equal(true);
  });

  it('not first argument', () => {
    expect(not(true)).equal(false);
    expect(not(false)).equal(true);
    expect(not(0)).equal(true);
    expect(not(1)).equal(false);
    expect(not('SuperCoder')).equal(false);
    expect(not('')).equal(true);
  });
});
