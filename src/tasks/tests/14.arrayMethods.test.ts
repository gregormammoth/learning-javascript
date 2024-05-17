import { describe, it, expect } from 'vitest';

import {
  getFirstItem,
  getLastItem,
  removeFirstElement,
  removeLastElement,
  addElementToBeginning,
  addElementToEnd,
  mergeElementWithArray,
  mergeArrayWithElement,
} from '../14.arrayMethods';

describe('array methods', () => {
  it('should return fist element of array without changing array', () => {
    const array1 = [1, 2, 3];
    const array2 = ['Apple', 'Orange', 'Plum'];
    const array3 = [{ order: 1 }, { order: 2 }, { order: 3 }];
    expect(getFirstItem(array1)).equal(1);
    expect(array1).deep.equal([1, 2, 3]);
    expect(getFirstItem(array2)).equal('Apple');
    expect(array2).deep.equal(['Apple', 'Orange', 'Plum']);
    expect(getFirstItem(array3)).deep.equal({ order: 1 });
    expect(array3).deep.equal([{ order: 1 }, { order: 2 }, { order: 3 }]);
  });

  it('should return last element of array without changing array', () => {
    const array1 = [1, 2, 3];
    const array2 = ['Apple', 'Orange', 'Plum'];
    const array3 = [{ order: 1 }, { order: 2 }, { order: 3 }];
    expect(getLastItem(array1)).equal(3);
    expect(array1).deep.equal([1, 2, 3]);
    expect(getLastItem(array2)).equal('Plum');
    expect(array2).deep.equal(['Apple', 'Orange', 'Plum']);
    expect(getLastItem(array3)).deep.equal({ order: 3 });
    expect(array3).deep.equal([{ order: 1 }, { order: 2 }, { order: 3 }]);
  });

  it('should remove first element from array and return it', () => {
    const array1 = [1, 2, 3];
    const array2 = ['Apple', 'Orange', 'Plum'];
    const array3 = [{ order: 1 }, { order: 2 }, { order: 3 }];
    expect(removeFirstElement(array1)).equal(1);
    expect(array1).deep.equal([2, 3]);
    expect(removeFirstElement(array2)).equal('Apple');
    expect(array2).deep.equal(['Orange', 'Plum']);
    expect(removeFirstElement(array3)).deep.equal({ order: 1 });
    expect(array3).deep.equal([{ order: 2 }, { order: 3 }]);
  });

  it('should return last element of array without changing array', () => {
    const array1 = [1, 2, 3];
    const array2 = ['Apple', 'Orange', 'Plum'];
    const array3 = [{ order: 1 }, { order: 2 }, { order: 3 }];
    expect(removeLastElement(array1)).equal(3);
    expect(array1).deep.equal([1, 2]);
    expect(removeLastElement(array2)).equal('Plum');
    expect(array2).deep.equal(['Apple', 'Orange']);
    expect(removeLastElement(array3)).deep.equal({ order: 3 });
    expect(array3).deep.equal([{ order: 1 }, { order: 2 }]);
  });

  it('should add element to the beginning of the array', () => {
    const array1 = [1, 2, 3];
    const array2 = ['Apple', 'Orange', 'Plum'];
    const array3 = [{ order: 1 }, { order: 2 }, { order: 3 }];
    addElementToBeginning(array1, 0);
    expect(array1).deep.equal([0, 1, 2, 3]);
    addElementToBeginning(array2, 'Durian');
    expect(array2).deep.equal(['Durian', 'Apple', 'Orange', 'Plum']);
    addElementToBeginning(array3, { order: 0 });
    expect(array3).deep.equal([{ order: 0 }, { order: 1 }, { order: 2 }, { order: 3 }]);
  });

  it('should add element to the end of the array', () => {
    const array1 = [1, 2, 3];
    const array2 = ['Apple', 'Orange', 'Plum'];
    const array3 = [{ order: 1 }, { order: 2 }, { order: 3 }];
    addElementToEnd(array1, 4);
    expect(array1).deep.equal([1, 2, 3, 4]);
    addElementToEnd(array2, 'Durian');
    expect(array2).deep.equal(['Apple', 'Orange', 'Plum', 'Durian']);
    addElementToEnd(array3, { order: 4 });
    expect(array3).deep.equal([{ order: 1 }, { order: 2 }, { order: 3 }, { order: 4 }]);
  });

  it('should add element to the beginning of the array and return result without mutation of initial array', () => {
    const array1 = [1, 2, 3];
    const array2 = ['Apple', 'Orange', 'Plum'];
    const array3 = [{ order: 1 }, { order: 2 }, { order: 3 }];
    expect(mergeElementWithArray(array1, 0)).deep.equal([0, 1, 2, 3]);
    expect(array1).deep.equal([1, 2, 3]);
    expect(mergeElementWithArray(array2, 'Durian')).deep.equal(['Durian', 'Apple', 'Orange', 'Plum']);
    expect(array2).deep.equal(['Apple', 'Orange', 'Plum']);
    expect(mergeElementWithArray(array3, { order: 0 })).deep.equal([{ order: 0 }, { order: 1 }, { order: 2 }, { order: 3 }]);
    expect(array3).deep.equal([{ order: 1 }, { order: 2 }, { order: 3 }]);
  });

  it('should add element to the end of the array', () => {
    const array1 = [1, 2, 3];
    const array2 = ['Apple', 'Orange', 'Plum'];
    const array3 = [{ order: 1 }, { order: 2 }, { order: 3 }];
    expect(mergeArrayWithElement(array1, 4)).deep.equal([1, 2, 3, 4]);
    expect(array1).deep.equal([1, 2, 3]);
    expect(mergeArrayWithElement(array2, 'Durian')).deep.equal(['Apple', 'Orange', 'Plum', 'Durian']);
    expect(array2).deep.equal(['Apple', 'Orange', 'Plum']);
    expect(mergeArrayWithElement(array3, { order: 4 })).deep.equal([{ order: 1 }, { order: 2 }, { order: 3 }, { order: 4 }]);
    expect(array3).deep.equal([{ order: 1 }, { order: 2 }, { order: 3 }]);
  });
});
