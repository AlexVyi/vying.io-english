const express = require('express');
const router = express.Router();

/* GET robots page.DON'T USE DUPLICATE CONTENT ON CDN*/
/*router.get('/robots.txt', function (req, res,next) {
	res.type('text/plain');
	res.send("User-agent: *\nDisallow: /");
});*/
router.get('/', function(req, res, next) {
	let userIp = req.header('X-Real-IP') || req.connection.remoteAddress; //in n_gin_x request this header also.
	res.setHeader('X-Link', 'https://vying.io ; rel="canonical"');
    res.render('index', {ip:userIp});
});
router.get('/dns', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/dns ; rel="canonical"');
	res.render('dns');
});

router.get('/web-development', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/web-development ; rel="canonical"');
	res.render('web-development');
});
router.get('/faq', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/faq ; rel="canonical"');
	res.render('faq');
});

router.get('/vyingpedia', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/vyingpedia ; rel="canonical"');
	res.render('vyingpedia')
});

router.get('/contact', function(req, res, next) {
	let userIp = req.header('X-Real-IP') || req.connection.remoteAddress; //in n_gin_x request this header also.
	res.setHeader('X-Link', 'https://vying.io/contact ; rel="canonical"');
	res.render('contact', {ip:userIp});
});
router.get('/about', function(req, res, next) {
	let userIp = req.header('X-Real-IP') || req.connection.remoteAddress; //in n_gin_x request this header also.
	res.setHeader('X-Link', 'https://vying.io/about ; rel="canonical"');
	res.render('about',{ip:userIp});
});
router.get('/policy', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/policy ; rel="canonical"');
	res.render('policy');
});
router.get('/cookies', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/cookies ; rel="canonical"');
	res.render('cookies');
});
router.get('/friendly-error', function(req, res, next) {
	res.render('friendly-error');
});
router.get('/success', function(req, res, next) {
	let userIp = req.header('X-Real-IP') || req.connection.remoteAddress; //in n_gin_x request this header also.
	res.setHeader('X-Link', 'https://vying.io/success ; rel="canonical"');
	res.render('success',{ip:userIp});
});
router.get('/personal-plan', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/personal-plan ; rel="canonical"');
	res.render('personal-plan');
});
router.get('/professional-plan', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/professional-plan ; rel="canonical"');
	res.render('professional-plan');
});
router.get('/business-plan', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/business ; rel="canonical"');
	res.render('business-plan');
});
router.get('/anycast-plan', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/business ; rel="canonical"');
	res.render('anycast-plan');
});
router.get('/unicast-plan', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/business ; rel="canonical"');
	res.render('unicast-plan');
});


router.get('/wordpress-plan', function(req, res, next) {
	res.setHeader('X-Link', 'https://vying.io/wordpress-plan ; rel="canonical"');
	res.render('wordpress-plan');
});






module.exports = router;
