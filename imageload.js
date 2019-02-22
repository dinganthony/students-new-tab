/*
	Cityscapes New Tab
	Built by Anthony Ding
	http://anthonyding.com
	Copyright 2019 by Anthony Ding.
*/

function getImageUrl() {
	let urlFront = "url('https://d1y1vwjvd9e87.cloudfront.net/";
	let urlBack = "')";
	urlFront = urlFront + PAGES[page].image + urlBack;
	return urlFront;
}

function setBackgroundImage() {
	let url = "#page { background-image: " + getImageUrl() + "; }";
	var sheet = document.styleSheets[0];
	sheet.insertRule(url, sheet.cssRules.length);
}

setBackgroundImage();