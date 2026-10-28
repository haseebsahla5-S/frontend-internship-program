import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  doubleAll, activeUsers, cartTotal, findById, groupBy,
  sortByAge, unique, updateObject, getCity, wordFrequency,
} from './week-10.js';

const users = [
  { id: 1, name: 'Ada', age: 36, active: true, address: { city: 'London' } },
  { id: 2, name: 'Linus', age: 28, active: false },
  { id: 3, name: 'Grace', age: 45, active: true, address: {} },
];

test('doubleAll', () => {
  assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
  assert.deepEqual(doubleAll([]), []);
});

test('activeUsers', () => {
  assert.deepEqual(activeUsers(users).map((u) => u.name), ['Ada', 'Grace']);
});

test('cartTotal', () => {
  assert.equal(cartTotal([{ price: 10, qty: 2 }, { price: 5, qty: 1 }]), 25);
  assert.equal(cartTotal([]), 0);
});

test('findById', () => {
  assert.equal(findById(users, 2).name, 'Linus');
  assert.equal(findById(users, 99), undefined);
});

test('groupBy', () => {
  const items = [{ type: 'a', n: 1 }, { type: 'b', n: 2 }, { type: 'a', n: 3 }];
  assert.deepEqual(groupBy(items, 'type'), {
    a: [{ type: 'a', n: 1 }, { type: 'a', n: 3 }],
    b: [{ type: 'b', n: 2 }],
  });
});

test('sortByAge does not mutate', () => {
  const copy = [...users];
  assert.deepEqual(sortByAge(users).map((u) => u.age), [28, 36, 45]);
  assert.deepEqual(users, copy);
});

test('unique', () => {
  assert.deepEqual(unique([1, 2, 1, 3, 2]), [1, 2, 3]);
});

test('updateObject does not mutate', () => {
  const original = { a: 1, b: 2 };
  const result = updateObject(original, { b: 3, c: 4 });
  assert.deepEqual(result, { a: 1, b: 3, c: 4 });
  assert.deepEqual(original, { a: 1, b: 2 });
  assert.notEqual(result, original);
});

test('getCity', () => {
  assert.equal(getCity(users[0]), 'London');
  assert.equal(getCity(users[1]), 'Unknown');
  assert.equal(getCity(users[2]), 'Unknown');
});

test('wordFrequency', () => {
  assert.deepEqual(wordFrequency('The cat and the hat'), { the: 2, cat: 1, and: 1, hat: 1 });
});
