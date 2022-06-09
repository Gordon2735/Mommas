'use strict';

import { T_sum as T_sumCheck } from '../utility/tests/test-units/T_sum.test.js';
import { T_calculator as T_calculatorCheck } from '../utility/tests/test-units/T_calculator.test.js';
import { T_logDate as T_logDateCheck } from '../utility/tests/test-units/T_logDate.test.js';

const testMommasCRUD = () => {
	console.info('testMommasCRUD');
	T_sumCheck();
	T_calculatorCheck();
	T_logDateCheck();
};
console.log(
	`\u001b[31;1mTDD :::: TEST DRIVEN DEVELOPMENT on ${new Date()}:: 
		\u001b[33;1m:::: testMommasCRUD.test.js ::::`
);
console.log("\u001b[33;1mMomma's Dress Retail Site by Donna G. Mullen");
export default testMommasCRUD;
