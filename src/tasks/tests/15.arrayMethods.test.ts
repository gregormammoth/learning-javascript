import { describe, it, vi, expect } from 'vitest';

import {
  findById,
  sortById,
  filterGabelen,
  filterByNameOrSurname,
  stringToArray,
  arrayToString,
  isPalindrome,
  sumWithForEach,
  sumWithReduce,
} from '../15.arrayMethods';

describe('array methods 2', () => {
  it('should return item with equal id', () => {
    const array1 = [
      {id: 1, name: "John"},
      {id: 2, name: "Pete"},
      {id: 3, name: "Mary"},
    ];
    const array2 = [
      {id: 4, name: "Oleg"},
      {id: 5, name: "Ruben"},
      {id: '6', name: "Gabelen"},
    ];
    expect(findById(0, array1)).deep.equal(undefined);
    expect(findById(1, array1)).deep.equal({id: 1, name: "John"});
    expect(findById(2, array1)).deep.equal({id: 2, name: "Pete"});
    expect(findById(3, array1)).deep.equal({id: 3, name: "Mary"});
    expect(findById(3, array2)).deep.equal(undefined);
    expect(findById(4, array2)).deep.equal({id: 4, name: "Oleg"});
    expect(findById(5, array2)).deep.equal({id: 5, name: "Ruben"});
    expect(findById(6, array2)).deep.equal(undefined);
    expect(findById('6', array2)).deep.equal({id: '6', name: "Gabelen"});
  });

  it('should sort array of items by id', () => {
    expect(sortById([
      {id: 3, name: "Mary"},
      {id: 2, name: "Pete"},
      {id: 1, name: "John"},
    ])).deep.equal([
      {id: 1, name: "John"},
      {id: 2, name: "Pete"},
      {id: 3, name: "Mary"},
    ]);

    expect(sortById([
      {id: 4, name: "Oleg"},
      {id: '666', name: "Gabelen"},
      {id: 6, name: "Halogen"},
      {id: 5, name: "Ruben"},
    ])).deep.equal([
      {id: 4, name: "Oleg"},
      {id: 5, name: "Ruben"},
      {id: 6, name: "Halogen"},
      {id: '666', name: "Gabelen"},
    ])
  });

  it ('should return array without Gabelen', () => {
    expect(filterGabelen([
      {id: 1, name: "John"},
      {id: 2, name: "Pete"},
      {id: 3, name: "Mary"},
    ])).deep.equal([
      {id: 1, name: "John"},
      {id: 2, name: "Pete"},
      {id: 3, name: "Mary"},
    ]);
    expect(filterGabelen([
      {id: 4, name: "Oleg"},
      {id: '666', name: "Gabelen"},
      {id: 6, name: "Halogen"},
      {id: 5, name: "Ruben"},
    ])).deep.equal([
      {id: 4, name: "Oleg"},
      {id: 6, name: "Halogen"},
      {id: 5, name: "Ruben"},
    ])
  });

  it ('should return array with items which contain substring in the name or surname', () => {
    const array1 = [
      {id: 1, name: "Johny", surname: 'Silverhand' },
      {id: 2, name: "Peter", surname: 'Pen' },
      {id: 3, name: "Mary", surname: 'Jane' },
    ];
    const array2 = [
      {id: 4, name: "Oleg"},
      {id: '666', name: "Gabelen", surname: 'Galichev'},
      {id: 6, name: "Halogen", surname: 'Mendeleev'},
      {id: 5, name: "Ruben"},
    ];
    expect(filterByNameOrSurname(array1, 'John')).deep.equal([
      {id: 1, name: "Johny", surname: 'Silverhand' },
    ]);
    expect(filterByNameOrSurname(array1, 'an')).deep.equal([
      {id: 1, name: "Johny", surname: 'Silverhand' },
      {id: 3, name: "Mary", surname: 'Jane' },
    ]);
    expect(filterByNameOrSurname(array2, 'en')).deep.equal([
      {id: '666', name: "Gabelen", surname: 'Galichev'},
      {id: 6, name: "Halogen", surname: 'Mendeleev'},
      {id: 5, name: "Ruben"},
    ])
    expect(filterByNameOrSurname(array2, 'ev')).deep.equal([
      {id: '666', name: "Gabelen", surname: 'Galichev'},
      {id: 6, name: "Halogen", surname: 'Mendeleev'},
    ])
  });

  it('should return array transformed from string', () => {
    expect(stringToArray('Oleg')).deep.equal(['O', 'l', 'e', 'g']);
    expect(stringToArray('John')).deep.equal(['J', 'o', 'h', 'n']);
    expect(stringToArray('Gabelen')).deep.equal(['G', 'a', 'b', 'e', 'l', 'e', 'n']);
  });

  it('should return string transformed from array', () => {
    expect(arrayToString(['O', 'l', 'e', 'g'])).deep.equal('Oleg');
    expect(arrayToString(['J', 'o', 'h', 'n'])).deep.equal('John');
    expect(arrayToString(['G', 'a', 'b', 'e', 'l', 'e', 'n'])).deep.equal('Gabelen');
  });

  it('should return true if string is palindrome and false if not', () => {
    expect(isPalindrome('palindrome')).equal(false);
    expect(isPalindrome('Oleg')).equal(false);
    expect(isPalindrome('false')).equal(false);
    expect(isPalindrome('goose')).equal(false);
    expect(isPalindrome('12345')).equal(false);
    expect(isPalindrome('123321')).equal(true);
    expect(isPalindrome('madam')).equal(true);
    expect(isPalindrome('Madam')).equal(true);
    expect(isPalindrome('noon')).equal(true);
    expect(isPalindrome('kayak')).equal(true);
    expect(isPalindrome('Kayak')).equal(true);
  });

  it('should return the sum of the array elements using forEach method', () => {
    let array1 = [1];
    let array2 = [1, 2, 3];
    let array3 = [177, 460, 617, 138, 118, 209, 1072, 365];
    const reduceSpy1 = vi.spyOn(array1, 'reduce');
    const forEachSpy1 = vi.spyOn(array1, 'forEach');
    const reduceSpy2 = vi.spyOn(array2, 'reduce');
    const forEachSpy2 = vi.spyOn(array2, 'forEach');
    const reduceSpy3 = vi.spyOn(array2, 'reduce');
    const forEachSpy3 = vi.spyOn(array2, 'forEach');
    expect(sumWithForEach(array1)).equal(1);
    expect(sumWithForEach(array2)).equal(6);
    expect(sumWithForEach(array3)).equal(3156);
    expect(reduceSpy1).toHaveBeenCalledTimes(0);
    expect(forEachSpy1).toHaveBeenCalledTimes(1);
    expect(reduceSpy2).toHaveBeenCalledTimes(0);
    expect(forEachSpy2).toHaveBeenCalledTimes(1);
    expect(reduceSpy3).toHaveBeenCalledTimes(0);
    expect(forEachSpy3).toHaveBeenCalledTimes(1);
  });

  it('should return the sum of the array elements using reduce method', () => {
    let array1 = [1];
    let array2 = [1, 2, 3];
    let array3 = [177, 460, 617, 138, 118, 209, 1072, 365];
    const reduceSpy1 = vi.spyOn(array1, 'reduce');
    const forEachSpy1 = vi.spyOn(array1, 'forEach');
    const reduceSpy2 = vi.spyOn(array2, 'reduce');
    const forEachSpy2 = vi.spyOn(array2, 'forEach');
    const reduceSpy3 = vi.spyOn(array2, 'reduce');
    const forEachSpy3 = vi.spyOn(array2, 'forEach');
    expect(sumWithReduce(array1)).equal(1);
    expect(sumWithReduce(array2)).equal(6);
    expect(sumWithReduce(array3)).equal(3156);
    expect(reduceSpy1).toHaveBeenCalledTimes(1);
    expect(forEachSpy1).toHaveBeenCalledTimes(0);
    expect(reduceSpy2).toHaveBeenCalledTimes(1);
    expect(forEachSpy2).toHaveBeenCalledTimes(0);
    expect(reduceSpy3).toHaveBeenCalledTimes(1);
    expect(forEachSpy3).toHaveBeenCalledTimes(0);
  });
});
