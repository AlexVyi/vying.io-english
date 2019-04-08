const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const node_mailer = require('nodemailer');
const cred = require('../lib/nodemailer');
const json2html = require('node-json2html');
const Recaptcha = require('express-recaptcha').Recaptcha;
//const secrets_of_recaptcha = require('../lib/recapcha');
const recaptcha = new Recaptcha('6LfMuIkUAAAAAFlx_PayuhNqOVqBJMdrJoeL6TOQ','6LfMuIkUAAAAANq6ZUUHXkyrfxKz5cluL_WME5a_');

/* GET users listing. */

router.post('/contact',[
	  // username must be an email
	  check('email').isEmail().normalizeEmail(),
	  check('full_name').not().isEmpty().trim().escape(),
	  check('contact_textarea').matches(/^[?!.,a-zA-Z0-9_]+( [?!.,a-zA-Z0-9_]+)*$/,"i")
  ],recaptcha.middleware.verify,
  function (req,res,next) {
	  let errors = validationResult(req);
	  if (!errors.isEmpty() || req.recaptcha.error) {
		  console.log(errors);
		  return res.redirect('/friendly-error')
	  }
	  else {
		  let email = req.body.email;
		  let full_name = req.body.full_name;
		  let contact_textarea = req.body.contact_textarea;
		  let ip = req.ip;

		  let data = {
			  email: req.body.email,
			  full_name: req.body.full_name,
			  contact_textarea: req.body.contact_textarea,
			  ip: req.header('X-Real-IP') || req.connection.remoteAddress
		  };
		  let transporter = node_mailer.createTransport({
			  host: 'mail.vying.ro',
			  port: 587,
			  secure: false,
			  requireTLS: true,
			  auth: {
				  user: cred.user,
				  pass: cred.pass
			  }
		  });
		  let transform = {
			  '<>': 'h3', 'html': function () {
				  return ('<h3>E-mail: </h3>' + this.email + '<h3>Numele: </h3>' + this.full_name  + '<h3>Mesajul dvs: </h3>' + this.contact_textarea + '<h3>Ip-ul user-ului este: </h3>' + this.ip);
			  }
		  };
		  let html = json2html.transform(data, transform);
		  let mailOptions = {
			  to: 'info@vying.io',
			  from: email,
			  subject: full_name,
			  html: html

		  };
		  transporter.sendMail(mailOptions, function (err, result) {
			  if (err) {
				  throw err;
			  }
			  else {

				  res.render('success')
			  }
		  })
	  }

  });
router.post('/personal-plan',[
	  // username must be an email
	  check('email').isEmail().normalizeEmail(),
	  check('full_name').not().isEmpty().trim().escape(),
	  check('company_textarea').matches(/^[?!.,a-zA-Z0-9_]+( [?!.,a-zA-Z0-9_]+)*$/,"i")
  ],recaptcha.middleware.verify,
  function (req,res,next) {
	  let errors = validationResult(req);
	  if (!errors.isEmpty() || req.recaptcha.error) {
		  console.log(errors);
		  return res.redirect('/friendly-error')
	  }
	  else {
		  let email = req.body.email;
		  let full_name = req.body.full_name;
		  let company_textarea = req.body.contact_textarea;
		  let personal_plan = req.body.personal_plan;

		  let data = {
			  email: req.body.email,
			  full_name: req.body.full_name,
			  company_textarea: req.body.company_textarea,
			  personal_plan:req.body.personal_plan,
			  ip: req.header('X-Real-IP') || req.connection.remoteAddress
		  };
		  let transporter = node_mailer.createTransport({
			  host: 'mail.vying.ro',
			  port: 587,
			  secure: false,
			  requireTLS: true,
			  auth: {
				  user: cred.user,
				  pass: cred.pass
			  }
		  });
		  let transform = {
			  '<>': 'h3', 'html': function () {
				  return ('<h3>E-mail: </h3>' + this.email + '<h3>Numele: </h3>' + this.full_name  + '<h3>Datele companiei: </h3>' + this.company_textarea + '<h3>Tipul de plan: </h3>' + this.personal_plan + '<h3>Ip-ul user-ului este: </h3>' + this.ip);
			  }
		  };
		  let html = json2html.transform(data, transform);
		  let mailOptions = {
			  to: 'info@vying.io',
			  from: email,
			  subject: full_name,
			  html: html

		  };
		  transporter.sendMail(mailOptions, function (err, result) {
			  if (err) {
				  throw err;
			  }
			  else {

				  res.render('success')
			  }
		  })
	  }

  });
router.post('/professional-plan',[
	  // username must be an email
	  check('email').isEmail().normalizeEmail(),
	  check('full_name').not().isEmpty().trim().escape(),
	  check('company_textarea').matches(/^[?!.,a-zA-Z0-9_]+( [?!.,a-zA-Z0-9_]+)*$/,"i")
  ],recaptcha.middleware.verify,
  function (req,res,next) {
	  let errors = validationResult(req);
	  if (!errors.isEmpty() || req.recaptcha.error) {
		  console.log(errors);
		  return res.redirect('/friendly-error')
	  }
	  else {
		  let email = req.body.email;
		  let full_name = req.body.full_name;
		  let company_textarea = req.body.contact_textarea;
		  let professional_plan = req.body.professional_plan;

		  let data = {
			  email: req.body.email,
			  full_name: req.body.full_name,
			  company_textarea: req.body.company_textarea,
			  professional_plan:req.body.professional_plan,
			  ip: req.header('X-Real-IP') || req.connection.remoteAddress
		  };
		  let transporter = node_mailer.createTransport({
			  host: 'mail.vying.ro',
			  port: 587,
			  secure: false,
			  requireTLS: true,
			  auth: {
				  user: cred.user,
				  pass: cred.pass
			  }
		  });
		  let transform = {
			  '<>': 'h3', 'html': function () {
				  return ('<h3>E-mail: </h3>' + this.email + '<h3>Numele: </h3>' + this.full_name  + '<h3>Datele companiei: </h3>' + this.company_textarea + '<h3>Tipul de plan: </h3>' + this.professional_plan + '<h3>Ip-ul user-ului este: </h3>' + this.ip);
			  }
		  };
		  let html = json2html.transform(data, transform);
		  let mailOptions = {
			  to: 'info@vying.io',
			  from: email,
			  subject: full_name,
			  html: html

		  };
		  transporter.sendMail(mailOptions, function (err, result) {
			  if (err) {
				  throw err;
			  }
			  else {

				  res.render('success')
			  }
		  })
	  }

  });
router.post('/business-plan',[
	  // username must be an email
	  check('email').isEmail().normalizeEmail(),
	  check('full_name').not().isEmpty().trim().escape(),
	  check('company_textarea').matches(/^[?!.,a-zA-Z0-9_]+( [?!.,a-zA-Z0-9_]+)*$/,"i")
  ],recaptcha.middleware.verify,
  function (req,res,next) {
	  let errors = validationResult(req);
	  if (!errors.isEmpty() || req.recaptcha.error) {
		  console.log(errors);
		  return res.redirect('/friendly-error')
	  }
	  else {
		  let email = req.body.email;
		  let full_name = req.body.full_name;
		  let company_textarea = req.body.contact_textarea;
		  let business_plan = req.body.business_plan;

		  let data = {
			  email: req.body.email,
			  full_name: req.body.full_name,
			  company_textarea: req.body.company_textarea,
			  business_plan:req.body.business_plan,
			  ip: req.header('X-Real-IP') || req.connection.remoteAddress
		  };
		  let transporter = node_mailer.createTransport({
			  host: 'mail.vying.ro',
			  port: 587,
			  secure: false,
			  requireTLS: true,
			  auth: {
				  user: cred.user,
				  pass: cred.pass
			  }
		  });
		  let transform = {
			  '<>': 'h3', 'html': function () {
				  return ('<h3>E-mail: </h3>' + this.email + '<h3>Numele: </h3>' + this.full_name  + '<h3>Datele companiei: </h3>' + this.company_textarea + '<h3>Tipul de plan: </h3>' + this.business_plan + '<h3>Ip-ul user-ului este: </h3>' + this.ip);
			  }
		  };
		  let html = json2html.transform(data, transform);
		  let mailOptions = {
			  to: 'info@vying.io',
			  from: email,
			  subject: full_name,
			  html: html

		  };
		  transporter.sendMail(mailOptions, function (err, result) {
			  if (err) {
				  throw err;
			  }
			  else {

				  res.render('success')
			  }
		  })
	  }

  });
router.post('/wordpress-plan',[
	  // username must be an email
	  check('email').isEmail().normalizeEmail(),
	  check('full_name').not().isEmpty().trim().escape(),
	  check('company_textarea').matches(/^[?!.,a-zA-Z0-9_]+( [?!.,a-zA-Z0-9_]+)*$/,"i")
  ],recaptcha.middleware.verify,
  function (req,res,next) {
	  let errors = validationResult(req);
	  if (!errors.isEmpty() || req.recaptcha.error) {
		  console.log(errors);
		  return res.redirect('/friendly-error')
	  }
	  else {
		  let email = req.body.email;
		  let full_name = req.body.full_name;
		  let company_textarea = req.body.contact_textarea;
		  let wordpress_plan = req.body.wordpress_plan;

		  let data = {
			  email: req.body.email,
			  full_name: req.body.full_name,
			  company_textarea: req.body.company_textarea,
			  wordpress_plan:req.body.wordpress_plan,
			  ip: req.header('X-Real-IP') || req.connection.remoteAddress
		  };
		  let transporter = node_mailer.createTransport({
			  host: 'mail.vying.ro',
			  port: 587,
			  secure: false,
			  requireTLS: true,
			  auth: {
				  user: cred.user,
				  pass: cred.pass
			  }
		  });
		  let transform = {
			  '<>': 'h3', 'html': function () {
				  return ('<h3>E-mail: </h3>' + this.email + '<h3>Numele: </h3>' + this.full_name  + '<h3>Datele companiei: </h3>' + this.company_textarea + '<h3>Tipul de plan: </h3>' + this.wordpress_plan + '<h3>Ip-ul user-ului este: </h3>' + this.ip);
			  }
		  };
		  let html = json2html.transform(data, transform);
		  let mailOptions = {
			  to: 'info@vying.io',
			  from: email,
			  subject: full_name,
			  html: html

		  };
		  transporter.sendMail(mailOptions, function (err, result) {
			  if (err) {
				  throw err;
			  }
			  else {

				  res.render('success')
			  }
		  })
	  }

  });





module.exports = router;
