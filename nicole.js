var symbols = [
	"😀",
	"🐶",
	"🌹",
	"🚗",
	"🎵",
	"⚽",
	"📱",
	"🌍",
	"🍔",
	"💡",
	"📚",
	"🎨",
	"🎲",
	"💻",
	"🏆",
	"🎉",
	"🎈",
	"💰",
	"🔑",
	"🔭",
	"🍣",
	"🍩",
	"🎃",
	"🌈",
	"🏝️",
	"🚦",
	"🌟",
	"🎭",
	"🔥",
	"❤️",
	"🚀",
	"🐠",
];

var commonEmoji;

function displaySymbols() {
	var containerBlue = document.getElementById("symbolContainer1");
	var containerRed = document.getElementById("symbolContainer2");
	var symbolHTML1 = "";
	var symbolHTML2 = "";

	// Randomly select one common emoji
	var tempSymbols = symbols.slice();
	let commonIndex = Math.floor(Math.random() * tempSymbols.length);
	commonEmoji = tempSymbols.splice(commonIndex, 1)[0];

	// Randomly select 12 unique emojis for each container
	var selectedEmojis1 = [];
	var selectedEmojis2 = [];

	while (selectedEmojis1.length < 11) {
		let randomIndex = Math.floor(Math.random() * tempSymbols.length);
		let emoji = tempSymbols.splice(randomIndex, 1)[0];
		selectedEmojis1.push(emoji);
	}

	while (selectedEmojis2.length < 11) {
		let randomIndex = Math.floor(Math.random() * tempSymbols.length);
		let emoji = tempSymbols.splice(randomIndex, 1)[0];
		selectedEmojis2.push(emoji);
	}

	// Insert the common emoji at a random position in each container's array
	let randomIndex1 = Math.floor(Math.random() * 13);
	let randomIndex2 = Math.floor(Math.random() * 13);
	selectedEmojis1.splice(randomIndex1, 0, commonEmoji);
	selectedEmojis2.splice(randomIndex2, 0, commonEmoji);

	// Loop through selected emojis and create HTML elements
	selectedEmojis1.forEach(function (emoji) {
		symbolHTML1 += "<span>" + emoji + "</span>";
	});
	selectedEmojis2.forEach(function (emoji) {
		symbolHTML2 += "<span>" + emoji + "</span>";
	});

	// Append HTML to containers
	containerBlue.innerHTML = symbolHTML1;
	containerRed.innerHTML = symbolHTML2;
}

// Call the function to display symbols in symbolContainer1 and symbolContainer2 when the page loads
window.onload = function () {
	displaySymbols();
};

function validateCommonEmoji() {
	var userInput = document.getElementById("submitGuess").value.trim();
	if (userInput === commonEmoji) {
		alert("Correct! The common emoji is " + commonEmoji);
		displaySymbols();
	} else {
		alert("Incorrect. Try again.");
	}
	document.getElementById("submitGuess").value = "";
}

document
	.getElementById("submitButton")
	.addEventListener("click", validateCommonEmoji);
