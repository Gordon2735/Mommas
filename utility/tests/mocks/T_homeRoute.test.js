'use strict';

import request from 'supertest';
import { baseURL } from '../../../bin/T_mommas_CRUD.test.js';

const T_homeRoute = url => {
	describe('Initial homepage endpoint', () => {
		it(`a status code of 200 should be returned`, () => {
			async () => {
				const response = await request(url).get('/');
				expect(response.statusCode).toBe(200);
			};
		});
	});

	it(`this initial render should have the proper response headers`, async () => {
		const response = await request(url)
			.get('home')
			.set('Accept', 'text/html');

		const responseHeader = expect(
			response.headers['content-type']
		).toContain('text/html');
		const responseStatus = expect(response.statusCode).toBe(200);
		console.log(`${responseHeader} and ${responseStatus}
		The response headers are: ${response.headers}
		The response status is: ${response.statusCode}
		The Homepage route has been tested
		`);
	});
};

export default T_homeRoute;
