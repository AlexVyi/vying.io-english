"use strict";
require('dotenv').load();
//here you have the server key for other needs.in the browser you have directly the browser key restricted per project
module.exports = {
	_site_key: process.env._SITE_KEY,
	_secret_key: process.env._SECRET_KEY
};
