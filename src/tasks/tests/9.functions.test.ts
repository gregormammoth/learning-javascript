import { describe, it, expect, beforeEach, vi } from 'vitest';

import * as mathematicalOperators from '../3.mathematicalOperators';
import {
  sumUsingSum, multiplyUsingMultiply, aPlusBMultiplyC, aMultiplyBPlusC, mc2, aX2PlusBXPlusC
} from '../9.functions';

describe('functions', () => {
  const sumSpy = vi.spyOn(mathematicalOperators, 'sum');
  const multiplySpy = vi.spyOn(mathematicalOperators, 'multiply');
  const exponentiationSpy = vi.spyOn(mathematicalOperators, 'exponentiation');
  beforeEach(() => {
    sumSpy.mockClear();
    multiplySpy.mockClear();
    exponentiationSpy.mockClear();
  });

  it('should return sum of two values using sum function', () => {
    expect(sumUsingSum(2, 2)).equal(4);
    expect(sumUsingSum(2, -2)).equal(0);
    expect(sumUsingSum(2, '2')).equal(4);
    expect(sumUsingSum('2', 2)).equal(4);
    expect(sumSpy).toHaveBeenCalledTimes(4);
  });

  it('Should multiply the first argument by the second using multiply function', () => {
    expect(multiplyUsingMultiply(2, 2)).equal(4);
    expect(multiplyUsingMultiply(2, -2)).equal(-4);
    expect(multiplyUsingMultiply(-2, -2)).equal(4);
    expect(multiplySpy).toHaveBeenCalledTimes(3);
  });

  it('Should return sum a and b multiplied by c ((a + b) * c) using sum and multiply function', () => {
    expect(aPlusBMultiplyC(1, 2, 3)).equal(9);
    expect(aPlusBMultiplyC(2, 3, 2)).equal(10);
    expect(aPlusBMultiplyC(10, 2, 2)).equal(24);
    expect(aPlusBMultiplyC(10, 10, 10)).equal(200);
    expect(sumSpy).toHaveBeenCalledTimes(4);
    expect(multiplySpy).toHaveBeenCalledTimes(4);
  });

  it('Should return result of ((a * b) + c) using sum and multiply function', () => {
    expect(aMultiplyBPlusC(1, 2, 3)).equal(5);
    expect(aMultiplyBPlusC(2, 3, 2)).equal(8);
    expect(aMultiplyBPlusC(10, 2, 2)).equal(22);
    expect(aMultiplyBPlusC(10, 10, 10)).equal(110);
    expect(sumSpy).toHaveBeenCalledTimes(4);
    expect(multiplySpy).toHaveBeenCalledTimes(4);
  });

  it('Should return result of (mc^2) using multiply and exponentiation functions', () => {
    expect(mc2(1,299792458)).equal(89875517873681760);
    expect(mc2(10,299792458)).equal(898755178736817700);
    expect(mc2(82,299792458)).equal(7369792465641904000);
    expect(mc2(100,299792458)).equal(8987551787368176000);
    expect(multiplySpy).toHaveBeenCalledTimes(4);
    expect(exponentiationSpy).toHaveBeenCalledTimes(4);
  });

  it('Should return result of (ax^2 + bx + c) using multiply, exponentiation and sum functions', () => {
    expect(aX2PlusBXPlusC(1, 2, 3, 4)).equal(27);
    expect(aX2PlusBXPlusC(2, 2, 2, 2)).equal(14);
    expect(aX2PlusBXPlusC(4, 7, 6, 3)).equal(63);
    expect(aX2PlusBXPlusC(10, 10, 10, 10)).equal(1110);
    expect(sumSpy).toHaveBeenCalledTimes(8);
    expect(multiplySpy).toHaveBeenCalledTimes(8);
    expect(exponentiationSpy).toHaveBeenCalledTimes(4);
  });
});

