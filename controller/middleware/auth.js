'use strict';

export const ensureAuth = function (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
};

export const ensureGuest = function (req, res, next) {
	if (!req.isAuthenticated()) {
		return next();
	}
	res.redirect('/dashboard');
};

// export default ensureGuest;
