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
	quote: "The world is full of magical things patiently waiting for our wits to grow sharper.",
	person: "Eden Phillpotts",
	image: "url('images/bluecity.jpg')"
},
{
	quote: "Be yourself, everyone else is already taken.",
	person: "Oscar Wilde",
	image: "url('images/daynyc.jpg')"
},
{
	quote: 	"Feet, what do I need them for if I have wings to fly.",
	person: "Frida Kahlo",
	image: "url('images/goldengate.jpg')"
},
{
	quote: "You are braver than you believe, stronger than you seem, and smarter than you think.",
	person: "Christopher Robin",
	image: "url('images/nycbw.jpg')"
},
{
	quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
	person: "Henry David Thoreau",
	image: "url('images/nycheli.jpg')"
},
{
	quote: "It is during our darkest moments that we must focus to see the light.",
	person: "Aristotle",
	image: "url('images/hknight.jpg')"
},
{
	quote: "Courage is grace under pressure.",
	person: "Ernest Hemingway",
	image: "url('images/sydney.jpg')"
},
{
	quote: "We don't stop playing because we grow old; we grow old because we stop playing.",
	person: "George Bernard Shaw",
	image: "url('images/seattle.jpg')"
},
{
	quote: "The two most important days in your life are the day you are born and the day you find out why.",
	person: "Mark Twain",
	image: "url('images/taipei.jpg')"
},
{
	quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	person: "Ralph Waldo Emerson",
	image: "url('images/seattleaerial.jpg')"
}
];

function choosePage() {
	let today = new Date();
	let dd = today.getDate();
	let page = (dd+1) % PAGES.length;
	page = Math.floor(Math.random() * PAGES.length);
	document.getElementById("page").style.backgroundImage = PAGES[page].image;
	document.getElementById("quote").innerHTML = PAGES[page].quote;
	document.getElementById("person").innerHTML = PAGES[page].person;
};

choosePage();