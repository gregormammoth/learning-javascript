import { sum, multiply, exponentiation } from './3.mathematicalOperators';

export function sumUsingSum (a, b) {
  return a + b;
}

export function multiplyUsingMultiply (a, b) {
  return a * b;
}

export function aPlusBMultiplyC (a,b,c) {
  const aPlusB = a + b;
  return aPlusB * c;
}

export function aMultiplyBPlusC (a,b,c) {
  const aPlusB = a + b;
  return aPlusB * c;
}

export function mc2 (m, c) {
  const c2 = c**2;
  return m * c2;
}

export function aX2PlusBXPlusC(a,b,c,x) {
  const x2 = x**2;
  const ax2 = a * x2;
  const bx = b * x;
  const aX2PlusBXP = ax2 + bx;
  return aX2PlusBXP + c;
}
