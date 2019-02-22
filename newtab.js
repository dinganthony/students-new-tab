/*
	Cityscapes New Tab
	Built by Anthony Ding
	http://anthonyding.com
	Copyright 2019 by Anthony Ding.
*/

function setPage() {
	document.getElementById("quote").innerHTML = PAGES[page].quote;
	document.getElementById("person").innerHTML = PAGES[page].person;
};

setPage();