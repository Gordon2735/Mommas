'use strict';

export const { ensureAuth, ensureGuest } = {
	ensureAuth: function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/');
		}
	},
	ensureGuest: function (req, res, next) {
		if (!req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/dashboard');
		}
	}
};

export default function ogMosh2() {
	console.log('oh no, lets figure this out');
}
ogMosh2();
