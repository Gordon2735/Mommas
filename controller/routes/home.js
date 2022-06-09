'use strict';

import express from 'express';

export const router = express.Router();

// @desc  Home/Landing page
router.get('/', (req, res) => {
	res.render('home', {
		layout: 'main_secondary'
	});
});
