const PAGES = [
{
	quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
	person: "Maya Angelou",
	image: "url('images/nyc.jpg')"
}, 
{
	quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
	person: "Mark Zuckerberg",
	image: "url('images/birdseye.jpg')"
},
{
	quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
	person: "Confucius",
	image: "url('images/bluecity.jpg')"
},
{
	quote: "All our dreams can come true, if we have the courage to pursue them.",
	person: "Walt Disney",
	image: "url('images/redcity.jpg')"
}
];

function choosePage() {
	let today = new Date();
	let dd = today.getDate();
	let page = Math.floor(dd/15);
	page = Math.floor(Math.random() * 4);
	document.getElementById("page").style.backgroundImage = PAGES[page].image;
	document.getElementById("quote").innerHTML = PAGES[page].quote;
	document.getElementById("person").innerHTML = PAGES[page].person;
	
};
	
choosePage();