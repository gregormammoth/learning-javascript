import { describe, it, expect, vi, beforeEach } from 'vitest';

import { whileLessThen, whileGreaterThen, forFromTo } from '../7.loops';

describe('loops', () => {
  const alertSpy = vi.spyOn(window, 'alert');
  beforeEach(() => {
    alertSpy.mockClear();
  });
  it ('Should call alert in the loop and pass iteration number as argument while less than first argument starting from 0', () => {
    whileLessThen(0);
    expect(alertSpy).toHaveBeenCalledTimes(0);
    whileLessThen(1);
    expect(alertSpy).toHaveBeenCalledWith(0);

    whileLessThen(10);
    expect(alertSpy).toHaveBeenCalledWith(0);
    expect(alertSpy).toHaveBeenCalledWith(1);
    expect(alertSpy).toHaveBeenCalledWith(2);
    expect(alertSpy).toHaveBeenCalledWith(3);
    expect(alertSpy).toHaveBeenCalledWith(4);
    expect(alertSpy).toHaveBeenCalledWith(5);
    expect(alertSpy).toHaveBeenCalledWith(6);
    expect(alertSpy).toHaveBeenCalledWith(7);
    expect(alertSpy).toHaveBeenCalledWith(8);
    expect(alertSpy).toHaveBeenCalledWith(9);
  });


  it ('Should call alert in the loop and pass iteration number as argument while greater than 0 starting from first argument', () => {
    whileGreaterThen(0);
    expect(alertSpy).toHaveBeenCalledTimes(0);

    whileGreaterThen(1);
    expect(alertSpy).toHaveBeenCalledWith(1);

    whileGreaterThen(10);
    expect(alertSpy).toHaveBeenCalledWith(10);
    expect(alertSpy).toHaveBeenCalledWith(9);
    expect(alertSpy).toHaveBeenCalledWith(8);
    expect(alertSpy).toHaveBeenCalledWith(7);
    expect(alertSpy).toHaveBeenCalledWith(6);
    expect(alertSpy).toHaveBeenCalledWith(5);
    expect(alertSpy).toHaveBeenCalledWith(4);
    expect(alertSpy).toHaveBeenCalledWith(3);
    expect(alertSpy).toHaveBeenCalledWith(2);
    expect(alertSpy).toHaveBeenCalledWith(1);
  });

  it('Should call alert in the loop and pass iteration number as argument greater than first argument and less than second', () => {
    forFromTo(0, 0);
    expect(alertSpy).toHaveBeenCalledTimes(0);

    forFromTo(0, 1);
    expect(alertSpy).toHaveBeenCalledWith(0);

    forFromTo(3, 7);
    expect(alertSpy).toHaveBeenCalledWith(3);
    expect(alertSpy).toHaveBeenCalledWith(4);
    expect(alertSpy).toHaveBeenCalledWith(5);
    expect(alertSpy).toHaveBeenCalledWith(6);

    forFromTo(10, 13);
    expect(alertSpy).toHaveBeenCalledWith(10);
    expect(alertSpy).toHaveBeenCalledWith(11);
    expect(alertSpy).toHaveBeenCalledWith(12);
  });
});
