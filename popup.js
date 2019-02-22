/*
	Cityscapes New Tab
	Built by Anthony Ding
	http://anthonyding.com
	Copyright 2019 by Anthony Ding.
*/
function setPopup() {
	document.getElementById("city").innerHTML = PAGES[page].city;
	document.getElementById("credit").innerHTML = PAGES[page].credit;
}

setPopup();