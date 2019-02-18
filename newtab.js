const PAGES = [
{
	quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
	person: "Maya Angelou",
	image: "url('images/nyc.jpg')"
}, 
{
	quote: "Move fast and break things.",
	person: "Mark Zuckerberg",
	image: "url('images/citynights.jpg')"
},
{
	quote: "You are braver than you believe, stronger than you seem, and smarter than you think.",
	person: "Christopher Robin",
	image: "url('images/beijing.jpg')"
},
{
	quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
	person: "Henry David Thoreau",
	image: "url('images/nycheli.jpg')"
},
{
	quote: "Courage is grace under pressure.",
	person: "Ernest Hemingway",
	image: "url('images/sydney.jpg')"
},
{
	quote: "No bird soars too high if he soars with his own wings.",
	person: "William Blake",
	image: "url('images/moscow.jpg')"
},
{
	quote: "We don't stop playing because we grow old; we grow old because we stop playing.",
	person: "George Bernard Shaw",
	image: "url('images/nycbw.jpg')"
},
{
	quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	person: "Ralph Waldo Emerson",
	image: "url('images/taipei.jpg')"
},
{
	quote: "The future belongs to those who believe in the beauty of their dreams.",
	person: "Eleanor Roosevelt",
	image: "url('images/seattle.jpg')"
},
{
	quote: "It is during our darkest moments that we must focus to see the light.",
	person: "Aristotle",
	image: "url('images/gray.jpg')"
},
{
	quote: "Keep your eyes on the stars, and your feet on the ground.",
	person: "Theodore Roosevelt",
	image: "url('images/highrise.jpg')"
},
{
	quote: "Start where you are. Use what you have. Do what you can.",
	person: "Arthur Ashe",
	image: "url('images/willis.jpg')"
},
{
	quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
	person: "Confucius",
	image: "url('images/shanghai.jpg')"
},
{
	quote: "All our dreams can come true, if we have the courage to pursue them.",
	person: "Walt Disney",
	image: "url('images/redcity.jpg')"
},
{
	quote: "Success is not final; failure is not fatal. It is the courage to continue that counts.",
	person: "Winston Churchill",
	image: "url('images/reflection.jpg')"
},
{
	quote: "You can waste your lives drawing lines. Or you can live your life crossing them.",
	person: "Shonda Rhimes",
	image: "url('images/daynyc.jpg')"
},
{
	quote: "Someday is not a day of the week.",
	person: "Denise Brennan-Nelson",
	image: "url('images/hkday.jpg')"
},
{
	quote: "Don't be afraid to give up the good and go for the great.",
	person: "Steve Prefontaine",
	image: "url('images/black.jpg')"
},
{
	quote: "The world is full of magical things patiently waiting for our wits to grow sharper.",
	person: "Eden Phillpotts",
	image: "url('images/bluecity.jpg')"
},
{
	quote: "Do not let making a living prevent you from making a life.",
	person: "John Wooden",
	image: "url('images/toronto.jpg')"
},
{
	quote: "Be yourself, everyone else is already taken.",
	person: "Oscar Wilde",
	image: "url('images/seattleaerial.jpg')"
},
{
	quote: 	"Feet, what do I need them for if I have wings to fly.",
	person: "Frida Kahlo",
	image: "url('images/goldengate.jpg')"
},
{
	quote: "The two most important days in your life are the day you are born and the day you find out why.",
	person: "Mark Twain",
	image: "url('images/pier14.jpg')"
}
];

const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

function isLeapYear() {
	let d = new Date();
	let year = date.getFullYear();
	if ((year % 4) != 0) {
		return false;
	} else {
		return ((year % 100) != 0 || (year % 400) == 0);
	}
}

function getDayOfYear() {
	let today = new Date();
	let mm = today.getMonth();
	let dd = today.getDate();
	let dayOfYear = dayCount[mm] + dd;
	alert(dayOfYear);
	if (mm > 1 && isLeapYear()) {
		return dayOfYear + 1;
	} else {
		return dayOfYear;
	}
}

function choosePage() {
	let today = new Date();
	let page = (getDayOfYear() + today.getFullYear()) % PAGES.length;
	document.getElementById("page").style.backgroundImage = PAGES[page].image;
	document.getElementById("quote").innerHTML = PAGES[page].quote;
	document.getElementById("person").innerHTML = PAGES[page].person;
	/*document.getElementById("credit").innerHTML = PAGES[page].;
	document.getElementById"")*/
};

choosePage();