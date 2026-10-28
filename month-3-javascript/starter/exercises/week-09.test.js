import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  max, isEven, sumTo, factorial, fizzBuzz, reverse,
  isPalindrome, countVowels, celsiusToFahrenheit, makeCounter,
} from './week-09.js';

test('max', () => {
  assert.equal(max(3, 7), 7);
  assert.equal(max(-1, -5), -1);
  assert.equal(max(4, 4), 4);
});

test('isEven', () => {
  assert.equal(isEven(4), true);
  assert.equal(isEven(7), false);
  assert.equal(isEven(0), true);
});

test('sumTo', () => {
  assert.equal(sumTo(1), 1);
  assert.equal(sumTo(5), 15);
  assert.equal(sumTo(100), 5050);
});

test('factorial', () => {
  assert.equal(factorial(0), 1);
  assert.equal(factorial(5), 120);
});

test('fizzBuzz', () => {
  assert.equal(fizzBuzz(3), 'Fizz');
  assert.equal(fizzBuzz(10), 'Buzz');
  assert.equal(fizzBuzz(15), 'FizzBuzz');
  assert.equal(fizzBuzz(7), '7');
});

test('reverse', () => {
  assert.equal(reverse('abc'), 'cba');
  assert.equal(reverse(''), '');
});

test('isPalindrome', () => {
  assert.equal(isPalindrome('Racecar'), true);
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
  assert.equal(isPalindrome('hello'), false);
});

test('countVowels', () => {
  assert.equal(countVowels('Hello World'), 3);
  assert.equal(countVowels('rhythm'), 0);
});

test('celsiusToFahrenheit', () => {
  assert.equal(celsiusToFahrenheit(0), 32);
  assert.equal(celsiusToFahrenheit(100), 212);
  assert.equal(celsiusToFahrenheit(-40), -40);
});

test('makeCounter', () => {
  const a = makeCounter();
  const b = makeCounter();
  assert.equal(a(), 1);
  assert.equal(a(), 2);
  assert.equal(b(), 1);
  assert.equal(a(), 3);
});
