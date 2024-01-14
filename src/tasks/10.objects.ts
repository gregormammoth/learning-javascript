export function getUserObject() {
  const object = {};
  return object;
}

export function addIsAdminKey(userObject) {
  return userObject;
}

export function addNewKeyAndValue(userObject, newKey, value) {
  return userObject;
}

export function getUserObjectWithGreetings() {
  const object = {
    name: 'John',
    sayHi() {

    },
    sayHiWithName: null
  };
  return object;
}

export function getUserObjectWithFullName() {
  const object = {
    name: 'William',
    surname: 'Golding',
    getFullName: null,
  };
  return object;
}

export function getUserObjectWithSubObject(weight, fat, muscles) {
  const object = {
    name: 'Arnold',
    surname: 'Schwarzenegger',
    condition: null,
  };
  return object;
}
