// array of objects to store zodiac data
var zodiac = [
	{
		sign: "aquarius",
		fortune: 'Progressive, original, independent, humanitarian, Runs from emotional expression, temperamental, uncompromising, aloof',
		image: "img/aquaries.gif",
	},
	{
		sign: "aries", 
		fortune: "Comfortable, confident, enthusiastic, optimistic, honest, passionate,Impatient, moody, short-tempered, impulsive, aggressive",
		image: "img/aries.gif"
	},
	{
		sign: "cancer",
		fortune: "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive, Moody, pessimistic, suspicious, manipulative, insecure, Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends",
		image: "img/cancer.gif"
	},
	{
		sign: "capricorn",
		fortune: "Family, tradition, music, understated status, quality craftsmanship, Know-it-all, unforgiving, condescending, expecting the worst",
		image: "img/capricorn.gif"
	},
	{
		sign: "gemini",
		fortune: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas, Music, books, magazines, chats with nearly anyone, short trips around the town",
		image: "img/geminii.gif"
	},
	{
		sign: "leo",
		fortune: "Theater, taking holidays, being admired, expensive things, bright colors, fun with friends, Creative, passionate, generous, warm-hearted, cheerful, humorous",
		image: "img/leo.gif"
	},
	{
		sign: "libra",
		fortune: "Cooperative,diplomatic, gracious, fair-minded, social,Indecisive, avoids confrontations, will carry a grudge, self-pity, Harmony, gentleness, sharing with others, the outdoors, Violence, injustice, loudmouths, conformity",
		image: "img/libra.gif"
	},
	{
		sign: "pisces",
		fortune: "Compassionate, artistic, intuitive, gentle, wise, musical,Being alone, sleeping, music, romance, visual media, swimming, spiritual themes",
		image: "img/pices.gif"
	},
	{
		sign: "sagittarius",
		fortune: "Generous, idealistic, great sense of humor, Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
		image: "img/sagitarrius.gif"
	},
	{
		sign: "scorpio",
		fortune: "Resourceful, brave, passionate, stubborn, a true friend, Distrusting, jealous, secretive, violent",
		image: "img/scorpio.gif"
	},
	{
		sign: "taurus",
		fortune: "Gardening, cooking, music, romance, high quality clothes, working with hands, Sudden changes, complications, insecurity of any kind, synthetic fabrics",
		image: "img/taurus.gif"
	},
	{
		sign: "virgo",
		fortune: "Shyness, worry, overly critical of self and others, all work and no play, Rudeness, asking for help, taking center stage",
		image: "img/virgo.gif"
	}
];
// This is code so the enter key also fires (runs/invokes/instantiates) the function
var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);

// function to determine user horoscope, function fires on user clicking button line 24 index.html
function horoscope() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata");

	// confirm the element exists and what value the user submits
	console.log(userdata);
	console.log("users value is: " + userdata.value);

	// loop through zodiac array one item at a time
	for(var i = 0; i < zodiac.length; i = i + 1) {
		// check what the users value is before using it in a condition
		console.log("users value lowercase is: " + userdata.value.toLowerCase());
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran");

			// check some values in the console before updating HTML
			console.log("users typed in: " + userdata.value);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current fortune value is: " + zodiac[i].fortune);

			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = userdata.value;
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = zodiac[i].image;
			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "Your best attributes are: " + zodiac[i].fortune;

			// stop the function because we found a match and added the data to the screen!!!
			return;
		};

		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		// if no match is found, do opposite of above, mostly clearing content and images
		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!";
		document.getElementById("yourHoroscope").textContent = "";
		document.getElementById("icon").src = "";
	};
};
