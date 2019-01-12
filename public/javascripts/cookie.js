'use strict';//vars at the top
// false disables the Cookie, allowing you to style the banner
var dropCookie = true;
// Number of days before the cookie expires, and the banner reappears
var cookieDuration = 0;
// Name of our cookie
var cookieName = 'complianceCookie';
// Value of cookie
var cookieValue = 'on';

//helper function for setting multiple attributes on an element
function setAttributes(el, attrs) {
	for(var key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
}
function createDiv(){

	var body_tag = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	setAttributes(div,{'class':'container', 'id':'cookie-ctx'});  /* ă â ș ț Î î µ */

	div.innerHTML = '<div class=row id="cookie-law-row">' + '<div class="col-lg-11 offset-lg-1 col-sm-12" id="cookie-law">Da, și site-ul nostru folosește cookie-uri. Prin continuarea navigării vă dați acordul ca acestea să fie instalat pe dispozitivul dvs.' +
	  ' Vă rugăm să citiți despre' + '<a  href="/cookies" rel="nofollow" title=""> politica de cookie-uri.</a> O să fie o lectură interesantă.</div> ' +
	  '<a id="close-cookie-banner" class="mx-auto d-block" href="javascript:void(0)" onclick="removeMe()" >Am înțeles!</a>'
	  + '</div>'// Be advised the Close Banner 'Am inteles' link requires jQuery


	body_tag.insertBefore(div,body_tag.lastChild); // Adds the Cookie Law Banner just after the opening <body> tag
	//document.getElementsByTagName('body')[0].className += ' cookie_banner'; //Adds a class to the <body> tag when the banner is visible
	createCookie(window.cookieName, window.cookieValue, window.cookieDuration);
	//createCookie("complianceCookie", "onUntilTheWindowCloses", 0); // Create the cookie with name, value and expires value, set to 0 so it can delete itself when the browser closes
}


function createCookie(name,value,days,path,domain) {

	var cookie = name + "=" + value  + "; path=/";

	if(window.dropCookie) {
		document.cookie = name + "=" + value + ";"  + "; path=/";
	}
	if (domain) {
		cookie += "domain=" + domain + ";";
	}
	if (path) {
		cookie += "path=" + path + ";";
	}

	document.cookie = cookie;
}

function checkCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)===' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

window.onload = function(){
	if(checkCookie(window.cookieName) !== window.cookieValue){
		createDiv();
	}
};

window.removeMe = function removeMe(){
	var element = document.getElementById('cookie-ctx');
	element.parentNode.removeChild(element);
};




