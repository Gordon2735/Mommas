'use strict';

import express from 'express';
import { ensureAuth, ensureGuest } from '../middleware/auth.js';
import Story from '../../models/schemas/Story.js';

export const router = express.Router();

// @desc  Login/Landing page
// @route GET /
router.get('/login', ensureGuest, (req, res) => {
	res.render('login', {
		layout: 'login'
	});
});

// @desc  Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
	try {
		const stories = await Story.find({ user: req.user.id }).lean();
		res.render('dashboard', {
			name: req.user.firstName,
			stories
		});
	} catch (err) {
		console.error(err);
		res.render('error/500');
	}
});

export default function ogMosh2() {
	console.log('oh no, lets figure this out');
}
ogMosh2();
