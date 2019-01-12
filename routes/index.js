const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let userIp = req.header('X-Real-IP') || req.connection.remoteAddress; //in n_gin_x request this header also.
  res.render('index', {ip:userIp});
});
router.get('/dns', function(req, res, next) {
	res.render('dns');
});

router.get('/web-development', function(req, res, next) {
	res.render('web-development');
});
router.get('/faq', function(req, res, next) {
	res.render('faq');
});

router.get('/vyingpedia', function(req, res, next) {
	res.render('vyingpedia')
});

router.get('/contact', function(req, res, next) {
	let userIp = req.header('X-Real-IP') || req.connection.remoteAddress; //in n_gin_x request this header also.
	res.render('contact', {ip:userIp});
});
router.get('/about', function(req, res, next) {
	let userIp = req.header('X-Real-IP') || req.connection.remoteAddress; //in n_gin_x request this header also.
	res.render('about',{ip:userIp});
});
router.get('/policy', function(req, res, next) {
	res.render('policy');
});
router.get('/cookies', function(req, res, next) {
	res.render('cookies');
});
router.get('/friendly-error', function(req, res, next) {
	res.render('friendly-error');
});
router.get('/success', function(req, res, next) {
	let userIp = req.header('X-Real-IP') || req.connection.remoteAddress; //in n_gin_x request this header also.
	res.render('success',{ip:userIp});
});
router.get('/personal-plan', function(req, res, next) {
	res.render('personal-plan');
});
router.get('/professional-plan', function(req, res, next) {
	res.render('professional-plan');
});
router.get('/business-plan', function(req, res, next) {
	res.render('business-plan');
});
router.get('/wordpress-plan', function(req, res, next) {
	res.render('wordpress-plan');
});






module.exports = router;
