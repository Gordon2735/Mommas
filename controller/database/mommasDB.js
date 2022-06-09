'use strict';

import mongoose from 'mongoose';

const mommasDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log(`MommasDB connected to ${conn.connection.host}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

export default mommasDB;
