import { describe, it, expect } from 'vitest';

import { getString, getNumber, getObject, getBoolean, getNull, getUndefined } from '../1.types';

describe('types', () => {
  it('should be string', () => {
    expect(typeof getString()).equal('string');
  });

  it('should be number', () => {
    expect(typeof getNumber()).equal('number');
  });

  it('should be object', () => {
    expect(typeof getObject()).equal('object');
  });

  it('should be boolean', () => {
    expect(typeof getBoolean()).equal('boolean');
  });

  it('should be undefined', () => {
    expect(typeof getUndefined()).equal('undefined');
  });

  it('should be null', () => {
    expect(typeof getNull()).equal('null');
  });
});
