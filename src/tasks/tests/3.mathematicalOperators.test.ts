import { describe, it, expect } from 'vitest';

import {
  negative,
  sum,
  subtract,
  multiply,
  divide,
  remainder,
  exponentiation,
  increment,
  decrement
} from '../3.mathematicalOperators';

describe('mathematical operators', () => {
  it('should return negative value', () => {
    expect(negative(1)).equal(-1);
    expect(negative(123)).equal(-123);
    expect(negative(-1)).equal(1);
    expect(negative(-123)).equal(123);
  });

  it('should return sum of two values', () => {
    expect(sum(2, 2)).equal(4);
    expect(sum(2, -2)).equal(0);
    expect(sum(2, '2')).equal(4);
    expect(sum('2', 2)).equal(4);
  });

  it('Should subtract second argument from first', () => {
    expect(subtract(2, 2)).equal(0);
    expect(subtract(2, -2)).equal(4);
    expect(subtract(2, '2')).equal(0);
    expect(subtract('2', 2)).equal(0);
  });

  it('Should multiply the first argument by the second', () => {
    expect(multiply(2, 2)).equal(4);
    expect(multiply(2, -2)).equal(-4);
    expect(multiply(-2, -2)).equal(4);
  });

  it('Should return the result of division', () => {
    expect(divide(2, 2)).equal(1);
    expect(divide(5, 2)).equal(2.5);
    expect(divide(8, 3)).equal(2.6666666666666665);
    expect(divide(8, 4)).equal(2);
  });

  it('Should return the remainder of division', () => {
    expect(remainder(2, 2)).equal(0);
    expect(remainder(5, 2)).equal(1);
    expect(remainder(8, 3)).equal(2);
    expect(remainder(8, 4)).equal(0);
  });

  it('Should return exponentiation result', () => {
    expect(exponentiation(2, 0)).equal(1);
    expect(exponentiation(2, 2)).equal(4);
    expect(exponentiation(2, 3)).equal(8);
    expect(exponentiation(2, 4)).equal(16);
    expect(exponentiation(2, 10)).equal(1024);
    expect(exponentiation(4, 1 / 2)).equal(2);
    expect(exponentiation(9, 1 / 2)).equal(3);
  });

  it ('Should increment argument', () => {
    let value = 1;
    expect(increment(value)).equal(2);
  })

  it ('Should decrement argument', () => {
    let value = 1;
    expect(decrement(value)).equal(0);
  })
});
