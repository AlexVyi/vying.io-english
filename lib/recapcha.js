"use strict";
require('dotenv').load();
//here you have the server key for other needs.in the browser you have directly the browser key restricted per project
module.exports = {
	key: process.env.RECAPCHA_SITE_KEY,
	secret: process.env.RECAPCHA_SECRET_KEY
};
