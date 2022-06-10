'use strict';

import { T_sum as T_sumCheck } from '../utility/tests/test-units/T_sum.test.js';
import { T_calculator as T_calculatorCheck } from '../utility/tests/test-units/T_calculator.test.js';
import { T_logDate as T_logDateCheck } from '../utility/tests/test-units/T_logDate.test.js';
import { T_homeRoute as T_homeRouteCheck } from '../utility/tests/mocks/T_homeRoute.test.js';

export const baseURL = `http://127.0.0.1:9080/`;
const testMommasCRUD = () => {
	console.info('testMommasCRUD');
	T_sumCheck();
	T_calculatorCheck();
	T_logDateCheck();
	T_homeRouteCheck(baseURL);
};
console.log(
	`\u001b[31;1mTDD :::: TEST DRIVEN DEVELOPMENT on ${new Date()}:: 
		\u001b[33;1m:::: testMommasCRUD.test.js ::::`
);
console.info(`The URL: ${baseURL} for the Homepage is being tested.`);
console.log("\u001b[33;1mMomma's Dress Retail Site by Donna G. Mullen");
export default testMommasCRUD;
