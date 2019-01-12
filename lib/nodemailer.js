//add this file to .gitignore
"use strict";
require('dotenv').load();

module.exports = {
	user:'smtp@vying.ro',
	pass: process.env.VYING_KEY
};
