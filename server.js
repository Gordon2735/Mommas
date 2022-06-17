'use strict';

import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { create } from 'express-handlebars';
import MongoStore from 'connect-mongo';
import mommasDB from './controller/database/mommasDB.js';
import morgan from 'morgan';
import cors from 'cors';
import { EventEmitter } from 'events';
import passport from 'passport';
import passportConfig from './config/passport.js';
import session from 'express-session';
import methodOverride from 'method-override';
import favicon from 'serve-favicon';
import open from 'open';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {
	truncate,
	stripTags,
	formatDate,
	select,
	editIcon
} from './views/helpers/hbs.js';
import logEvents from './logEvents.js';
import { router as homeRouter } from './controller/routes/home.js';
import { router as routes } from './controller/routes/routes.js';
import { router as authRoutes } from './controller/routes/auth.js';
import { router as storiesRoutes } from './controller/routes/stories.js';

// Config loaders
dotenv.config({ path: './config/config.env' });
passportConfig(passport);
mommasDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// body-parser...
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Method-override
app.use(
	methodOverride(function (req, res) {
		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
			// look in urlencoded POST bodies and delete it
			let method = req.body._method;
			delete req.body._method;
			return method;
		}
	})
);

// Logging Middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Handlebars Template Middleware
const handlebars = create({
	extname: 'hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials'),
	helpersDir: path.join(__dirname, 'views/helpers'),
	helpers: {
		formatDate,
		stripTags,
		truncate,
		editIcon,
		select
	}
});
app.engine('hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', './views');
app.enable('view cache');

// Session Middleware
app.use(
	session({
		secret: 'hoot session',
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URI
		})
	})
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// set Global Variables
app.use(function (req, res, next) {
	res.locals.user = req.user || null;
	next();
});

// static folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'controller')));

// favicon
app.use(favicon(path.join(__dirname, 'public/src/img', 'favicon.ico')));

// Routes
app.use('/', homeRouter);
app.use('/login', routes);
app.use('/', routes);
app.use('/auth', authRoutes);
app.use('/stories', storiesRoutes);

const PORT = process.env.PORT || 9080;
const HOST = process.env.HOST || `127.0.0.1`;

app.listen(PORT, () => {
	console.info(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	);
});

const openBrowser = async () => {
	await open(`${HOST}:${PORT}`, {
		app: { name: open.apps.chrome }
	}).catch((error, code) => {
		console.error(error, code);
	});
};
openBrowser();

// Logging Events
class TrackEmitter extends EventEmitter {}
const trackEmitter = new TrackEmitter();
trackEmitter.on('log', message => {
	logEvents(message);
});
setTimeout(() => {
	trackEmitter.emit(
		'log',
		'Nodemon Server Logging initiated: "EVENT EMITTED"'
	);
	console.log(new Date());
});

// Create a write stream (in append mode)(morgan)
const accessLogStream = fs.createWriteStream(
	path.join(__dirname, 'logs', 'access.log'),
	{ flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));
app.get('/', (req, res) => {
	res.send('HOOT Webelistics Logger Tracker');
});
