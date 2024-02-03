import { describe, it, expect } from 'vitest';

import {
  getDiversifiedObject,
  getNewObject,
  getValueByKeyJohn,
  getValueByKeySecretPerson,
  getObjectWithValueWithKeyOleg,
  getJohnAndOlegValuesSum,
  getObjectClone,
  getMergedObjects,
} from '../11.objects';

describe('objects 2', () => {
  it('should return object with keys: a (string), b (number), c (object), d (boolean), e (undefined), f (null)', () => {
    expect(typeof getDiversifiedObject()?.a).equal('string');
    expect(typeof getDiversifiedObject()?.b).equal('number');
    expect(typeof getDiversifiedObject()?.c).equal('object');
    expect(typeof getDiversifiedObject()?.d).equal('boolean');
    expect(typeof getDiversifiedObject()?.e).equal('undefined');
    expect(getDiversifiedObject()?.f).null;
  });

  it('should return new object with keys "John"="100" and "Ann"=160 and "secret person"="1000"', () => {
    const newObject = getNewObject();
    expect(typeof newObject).equal('object');
    expect(newObject?.John).equal(100);
    expect(newObject?.Ann).equal(160);
    expect(newObject?.['secret person']).equal(1000);
  });

  it('should return the value by key "John"', () => {
    expect(getValueByKeyJohn({ ...getNewObject() })).equal(100);
  });

  it('should return the value by key "secret person"', () => {
    expect(getValueByKeySecretPerson({ ...getNewObject() })).equal(1000);
  });

  it('should return object with new key "Oleg" and passed value', () => {
    const object = { ...getNewObject() };
    expect(getObjectWithValueWithKeyOleg({ ...getNewObject() }, 1)).deep.equal({ ...object, Oleg: 1 });
    expect(getObjectWithValueWithKeyOleg({ ...getNewObject() }, 50)).deep.equal({ ...object, Oleg: 50 });
    expect(getObjectWithValueWithKeyOleg({ ...getNewObject() }, 777)).deep.equal({ ...object, Oleg: 777 });
  });

  it('should return sum of values with keys "John" and "Oleg"', () => {
    expect(getJohnAndOlegValuesSum(getObjectWithValueWithKeyOleg({ ...getNewObject() }, 1))).equal(101);
    expect(getJohnAndOlegValuesSum(getObjectWithValueWithKeyOleg({ ...getNewObject() }, 50))).equal(150);
    expect(getJohnAndOlegValuesSum(getObjectWithValueWithKeyOleg({ ...getNewObject() }, 777))).equal(877);
  });

  it('should return clone of the object', () => {
    const object1 = getObjectWithValueWithKeyOleg({ ...getNewObject() }, 1);
    expect(getObjectClone(object1)).not.equal(object1);
    expect(getObjectClone(object1)).deep.equal(object1);
    const object2 = getObjectWithValueWithKeyOleg({ ...getNewObject() }, 50);
    expect(getObjectClone(object2)).not.equal(object2);
    expect(getObjectClone(object2)).deep.equal(object2);
    const object3 = getObjectWithValueWithKeyOleg({ ...getNewObject() }, 777);
    expect(getObjectClone(object3)).not.equal(object3);
    expect(getObjectClone(object3)).deep.equal(object3);
  });

  it('should return merged object (with keys and values from both objects)', () => {
    expect(getMergedObjects(
        { ...getNewObject() },
        getObjectWithValueWithKeyOleg({ ...getNewObject() }, 50)
      )
    ).deep.equal({ ...getNewObject(), Oleg: 50 });
    expect(getMergedObjects(
        { ...getNewObject() },
        { Goga: 300 }
      )
    ).deep.equal({ ...getNewObject(), Goga: 300 });
    expect(getMergedObjects(
      { ...getNewObject() }, { ...getDiversifiedObject() })
    ).deep.equal({ ...getNewObject(), ...getDiversifiedObject() });
  });
});
