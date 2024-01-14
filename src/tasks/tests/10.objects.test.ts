import { describe, it, expect, beforeEach, vi } from 'vitest';

import {
  getUserObject,
  addIsAdminKey,
  addNewKeyAndValue,
  getUserObjectWithGreetings,
  getUserObjectWithFullName,
  getUserObjectWithSubObject
} from '../10.objects';

describe('objects', () => {
  const alertSpy = vi.spyOn(window, 'alert');
  beforeEach(() => {
    alertSpy.mockClear();
  });
  it('should return object with keys name=John and surname=Doe', () => {
    const userObject = getUserObject();
    expect(userObject.name).equal('John');
    expect(userObject.surname).equal('Doe');
  });

  it('should add key isAdmin=true and return object', () => {
    const userObject = addIsAdminKey({ ...getUserObject() });
    expect(userObject.isAdmin).equal(true);
  });

  it('should add key with value and return object', () => {
    expect(addNewKeyAndValue({}, 'test', 'test')?.test).equal('test');
    expect(addNewKeyAndValue({}, 'newKey', 'newValue')?.newKey).equal('newValue');
    expect(addNewKeyAndValue({}, 'bool', true)?.bool).equal(true);
    expect(addNewKeyAndValue({}, 'num', 1)?.num).equal(1);
    expect(addNewKeyAndValue({}, 'obj', {})?.obj).deep.equal({});
  });

  it('should return object with getHi and getHiWithName functions with calling alert', () => {
    const userObject = getUserObjectWithGreetings();
    expect(alertSpy).toHaveBeenCalledTimes(0);
    userObject.sayHi();
    expect(alertSpy).toHaveBeenCalledWith('Hello');
    alertSpy.mockClear();
    userObject.sayHiWithName();
    expect(alertSpy).toHaveBeenCalledWith('Hello John');
    alertSpy.mockClear();
    userObject.name = 'Bob'
    userObject.sayHiWithName();
    expect(alertSpy).toHaveBeenCalledWith('Hello Bob');
    alertSpy.mockClear();
    userObject.name = 'William'
    userObject.sayHiWithName();
    expect(alertSpy).toHaveBeenCalledWith('Hello William');
  });

  it('should return object with getFullName function with returns name and surname', () => {
    const userObject = getUserObjectWithFullName();
    expect(userObject.getFullName()).equal('William Golding');
    userObject.name = 'Bob';
    userObject.surname = 'Martin';
    expect(userObject.getFullName()).equal('Bob Martin');
  });

  it('should return object with sub object with keys weight, fat, muscles', () => {
    expect(getUserObjectWithSubObject(104, 7, 60).condition).deep.equal({
      weight: 104,
      fat: 7,
      muscles: 60,
    });
    expect(getUserObjectWithSubObject(82.5, 20.4, 41.5).condition).deep.equal({
      weight: 82.5,
      fat: 20.4,
      muscles: 41.5,
    });
    expect(getUserObjectWithSubObject(100, 30, 20).condition).deep.equal({
      weight: 100,
      fat: 30,
      muscles: 20,
    });
  });
});
