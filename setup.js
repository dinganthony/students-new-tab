/*
	Cityscapes New Tab
	Built by Anthony Ding
	http://anthonyding.com
	Copyright 2019 by Anthony Ding.
*/
const PAGES = [
{
	quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
	person: "Maya Angelou",
	image: "nyc.jpg",
	credit: "Pedro Lastra",
	city: "New York City, USA"
}, 
{
	quote: "Move fast and break things.",
	person: "Mark Zuckerberg",
	image: "citynights.jpg",
	credit: "Denys Nevozhai",
	city: "New York City, USA"
},
{
	quote: "You are braver than you believe, stronger than you seem, and smarter than you think.",
	person: "Christopher Robin",
	image: "beijing.jpg",
	credit: "Wong Zihoo",
	city: "Beijing, China"
},
{
	quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
	person: "Henry David Thoreau",
	image: "nycheli.jpg",
	credit: "Thomas Habr",
	city: "New York City, USA"
},
{
	quote: "Courage is grace under pressure.",
	person: "Ernest Hemingway",
	image: "sydney.jpg",
	credit: "Ethan Ou",
	city: "Sydney, Australia"
},
{
	quote: "No bird soars too high if he soars with his own wings.",
	person: "William Blake",
	image: "moscow.jpg",
	credit: "Astemir Almov",
	city: "Moscow, Russia"
},
{
	quote: "Don't let yesterday take up too much of today.",
	person: "Will Rogers",
	image: "marina.jpg",
	credit: "Chen Hu",
	city: "Singapore"
},
{
	quote: "We don't stop playing because we grow old; we grow old because we stop playing.",
	person: "George Bernard Shaw",
	image: "nycbw.jpg",
	credit: "Jesse Orrico",
	city: "New York City, USA"
},
{
	quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	person: "Ralph Waldo Emerson",
	image: "taipei.jpg",
	credit: "Adli Wahid",
	city: "Taipei, Taiwan"
},
{
	quote: "The future belongs to those who believe in the beauty of their dreams.",
	person: "Eleanor Roosevelt",
	image: "seattle.jpg",
	credit: "Milkovi",
	city: "Seattle, USA"
},
{
	quote: "It is during our darkest moments that we must focus to see the light.",
	person: "Aristotle",
	image: "gray.jpg",
	credit: "The Roaming Platypus",
	city: "Seoul, Korea"
},
{
	quote: "Keep your eyes on the stars, and your feet on the ground.",
	person: "Theodore Roosevelt",
	image: "highrise.jpg",
	credit: "Verne Ho",
	city: "Credits: Unsplash"
},
{
	quote: "Start where you are. Use what you have. Do what you can.",
	person: "Arthur Ashe",
	image: "willis.jpg",
	credit: "Justin Eisner",
	city: "Chicago, USA"
},
{
	quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
	person: "Confucius",
	image: "shanghai.jpg",
	credit: "Zhang Kaiyv",
	city: "Shanghai, China"
},
{
	quote: "All our dreams can come true, if we have the courage to pursue them.",
	person: "Walt Disney",
	image: "redcity.jpg",
	credit: "Piotr Chrobot",
	city: "Credits: Unsplash"
},
{
	quote: "Today's accomplishments were yesterday's impossibilities.",
	person: "Robert H. Schuller",
	image: "hongkong.jpg",
	credit: "Natalya Letunova",
	city: "Hong kong"
},
{
	quote: "Success is not final; failure is not fatal. It is the courage to continue that counts.",
	person: "Winston Churchill",
	image: "reflection.jpg",
	credit: "Peng Yuhao",
	city: "Credits: Unsplash"
},
{
	quote: "You can waste your lives drawing lines. Or you can live your life crossing them.",
	person: "Shonda Rhimes",
	image: "daynyc.jpg",
	credit: "Jeff Brown",
	city: "New York City, USA"
},
{
	quote: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
	person: "Marcus Aurelius",
	image: "minneapolis.jpg",
	credit: "Nicole Harrington",
	city: "Minneapolis, USA"
},
{
	quote: "Someday is not a day of the week.",
	person: "Denise Brennan-Nelson",
	image: "hkday.jpg",
	credit: "Ruslan Bardash",
	city: "Hong Kong"
},
{
	quote: "Don't be afraid to give up the good and go for the great.",
	person: "Steve Prefontaine",
	image: "black.jpg",
	credit: "Julia Solonina",
	city: "Credits: Unsplash"
},
{
	quote: "The world is full of magical things patiently waiting for our wits to grow sharper.",
	person: "Eden Phillpotts",
	image: "bluecity.jpg",
	credit: "Pedro Lastra",
	city: "Chicago, USA"
},
{
	quote: "Do not let making a living prevent you from making a life.",
	person: "John Wooden",
	image: "toronto.jpg",
	credit: "Devin McGloin",
	city: "Toronto, Canada"
},
{
	quote: "Be yourself, everyone else is already taken.",
	person: "Oscar Wilde",
	image: "seattleaerial.jpg",
	credit: "Ryan Wilson",
	city: "Seattle, USA"
},
{
	quote: 	"Feet, what do I need them for if I have wings to fly.",
	person: "Frida Kahlo",
	image: "goldengate.jpg",
	credit: "Chris Leipelt",
	city: "San Francisco, USA"
},
{
	quote: "Bridge the gap which exists between where you are now and the goal you intend to reach.",
	person: "Earl Nightingale",
	image: "brooklynbridge.jpg",
	credit: "Colton Duke",
	city: "New York City, USA"
},
{
	quote: "Hi.",
	person: "Aesop",
	image: "hk.jpg",
	credit: "Dan Freeman",
	city: "Hong Kong"
}
];

const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

let today = new Date();

function isLeapYear() {
	let year = today.getFullYear();
	if ((year % 4) != 0) {
		return false;
	} else {
		return ((year % 100) != 0 || (year % 400) == 0);
	}
}

function getDayOfYear() {
	let mm = today.getMonth();
	let dd = today.getDate();
	let dayOfYear = dayCount[mm] + dd;
	if (mm > 1 && isLeapYear()) {
		return dayOfYear + 1;
	} else {
		return dayOfYear;
	}
}

function choosePage() {
	let page = (getDayOfYear() + today.getFullYear()) % PAGES.length;
	//page = Math.floor(Math.random() * PAGES.length);
	return 15;
}

let page = choosePage();
