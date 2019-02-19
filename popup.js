function setPopup() {
	page = choosePage();
	document.getElementById("credit").innerHTML = PAGES[page].credit;
}

setPopup();