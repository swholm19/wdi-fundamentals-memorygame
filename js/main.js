var cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id'); //What is "this" in reference too... what object???
	
	//Still not sure what "this" is calling...
	//Why when you click the second card this is so slow to update the picture that the alert appears first?
	this.setAttribute('src', cards[cardId].cardImage);

	//Why doesnt this code below work but "this" above does...
	//document.getElementById('game-board')[cardId].setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	//Moved if statement that checks for length to flipCard function because i dont want to go to
	//checkForMatch function until i have atleast two cards
	if (cardsInPlay.length == 2) { 
		checkForMatch();
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard); //Why does this need to be inside for loop?
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();




