'use strict';

import express from 'express';
import passport from 'passport';

export const router = express.Router();

// @desc  Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc  Google auth callback
// @route GET /auth/google/callback
router.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/' }),
	(req, res) => {
		res.redirect('/dashboard');
	}
);

// @desc  Logout user
// @route GET /auth/logout
router.get('/logout', (req, res) => {
	req.logout(() => res.redirect('/'));
});
