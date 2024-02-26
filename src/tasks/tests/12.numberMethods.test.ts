import { describe, it, expect } from 'vitest';

import {
  round,
  roundUp,
  roundDown,
  removeDecimal,
  fixedDecimalDigits,
  getPrice,
  getRandomDecimalNumber,
  getRandomInteger,
} from '../12.numberMethods';

describe('number methods', () => {
  it('should round to the nearest integer', () => {
    expect(round(3.1)).equal(3);
    expect(round(3.6)).equal(4);
    expect(round(-1.1)).equal(-1);
    expect(round(-1.6)).equal(-2);
  });

  it('round up', () => {
    expect(roundUp(3.1)).equal(4);
    expect(roundUp(3.6)).equal(4);
    expect(roundUp(-1.1)).equal(-1);
    expect(roundUp(-1.6)).equal(-1);
  });

  it('round down', () => {
    expect(roundDown(3.1)).equal(3);
    expect(roundDown(3.6)).equal(3);
    expect(roundDown(-1.1)).equal(-2);
    expect(roundDown(-1.6)).equal(-2);
  });

  it('should remove anything after the decimal point without rounding', () => {
    expect(removeDecimal(3.1)).equal(3);
    expect(removeDecimal(3.6)).equal(3);
    expect(removeDecimal(-1.1)).equal(-1);
    expect(removeDecimal(-1.6)).equal(-1);
  });

  it('should return string with fixed digits after the decimal point', () => {
    expect(fixedDecimalDigits(1.666, 1)).equal('1.7');
    expect(fixedDecimalDigits(1.666, 2)).equal('1.67');
    expect(fixedDecimalDigits(1.666, 3)).equal('1.666');
    expect(fixedDecimalDigits(1.666, 4)).equal('1.6660');
  });

  it('should return string with 2 digits after the decimal point and currency', () => {
    expect(getPrice(1.666, '₽')).equal('1.67 ₽');
    expect(getPrice(100, '$')).equal('100.00 $');
    expect(getPrice(10.5, '€')).equal('10.50 €');
    expect(getPrice(3800, 'RM')).equal('3800.00 RM');
  });

  it('should return random decimal number', () => {
    Math.random = () => 0.123456789
    expect(getRandomDecimalNumber()).equal(0.123456789);
    Math.random = () => 0.1111111111
    expect(getRandomDecimalNumber()).equal(0.1111111111);
    Math.random = () => 0.987654321
    expect(getRandomDecimalNumber()).equal(0.987654321);
  });

  it('should return one random integer', () => {
    Math.random = () => 0.123456789
    expect(getRandomInteger()).equal(1);
    Math.random = () => 0.1111111111
    expect(getRandomInteger()).equal(1);
    Math.random = () => 0.987654321
    expect(getRandomInteger()).equal(9);
  });
});
