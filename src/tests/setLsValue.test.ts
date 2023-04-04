import { test } from 'vitest';
import setLSValue from '../components/setLSValue';

test('setLSValue sets a value in localStorage', () => {
  const name = 'testName';
  const value = 'testValue';

  setLSValue(name, value);

  const storedValue = localStorage.getItem(name);
  expect(storedValue).toBe(value);
});

test('setLSValue removes existing value before setting a new one', () => {
  const name = 'testName';
  const value1 = 'testValue1';
  const value2 = 'testValue2';

  localStorage.setItem(name, value1);
  setLSValue(name, value2);

  const storedValue = localStorage.getItem(name);
  expect(storedValue).toBe(value2);
});
