'use strict';

import mathOperations from '../functions/T_calculator.js';

describe('Calculator tests', () => {
	test('add two numbers', () => {
		const value = mathOperations.sum(3, 4);
		expect(value).toBe(7);
	});
	test('divide two numbers', () => {
		const value = mathOperations.divide(10, 2);
		expect(value).toBe(5);
	});
	test('multiply two numbers', () => {
		const value = mathOperations.multiply(10, 2);
		expect(value).toBe(20);
	});
});
