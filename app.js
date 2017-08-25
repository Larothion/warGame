var scores, activePlayer, playerOneDeck, playerTwoDeck, completeCardDeck

playerOneDeck = [];

playerTwoDeck = [];

pOnes = [1,2,3,4];
pTwos = [1,2,3,4];
completeCardDeck = [pOnes,pTwos];

shuffle()

/*Shuffling the deck between the two players*/
function shuffle() {

	for (var i = 0; i < completeCardDeck.length; i++ ) {
		
		//generates which player the card is going into
		var coinFlip = Math.floor(Math.random() * 2) + 1;

		//decides whih specific card is going into the player's deck. 
		if (coinFlip === 1) {
			if (playerOneDeck.length < 5) {
				playerOneCard = completeCardDeck[i][Math.floor(Math.random() * 3) + 1];
				console.log(playerOneCard);
				playerOneDeck.push(playerOneCard);
				console.log("Player 1s Deck: " + playerOneDeck);
			} else {
				playerTwoCard = completeCardDeck[i][Math.floor(Math.random() * 3) + 1];
				playerTwoDeck.push(playerTwoCard);
				console.log("Player 2s Deck: " + playerTwoDeck);
			}
			
		} else if ( coinFlip === 2) {
			if (playerTwoDeck.length < 5) {
				playerTwoCard = completeCardDeck[i][Math.floor(Math.random() * 3) + 1];
				playerTwoDeck.push(playerTwoCard);
				console.log("Player 2s Deck: " + playerTwoDeck);
			} else {
				playerOneCard = completeCardDeck[i][Math.floor(Math.random() * 3) + 1];
				playerOneDeck.push(playerOneCard);
				console.log("Player 1s Deck: " + playerOneDeck);
			}
		} 
	}

}
 

/*When a player selects "Deal Card" then the first "card" from the shuffled array should display on the screen.
The player with the highest scoring card wins*/

  //2. Display the result

  	document.querySelector('.dealBtn').addEventListener('click', function() {


  		

        /*Choosing a random card from the cards in the player's deck*/
  		var p1randomChoice = Math.floor(Math.random() * playerOneDeck.length);
  		var p2randomChoice = Math.floor(Math.random() * playerTwoDeck.length);
  		console.log(p1randomChoice);
  		
  		var p1cardChoice = playerOneDeck[p1randomChoice];
  		var p2cardChoice = playerTwoDeck[p2randomChoice];
  		console.log(p1cardChoice);
  	

  		/*displaying the chosen cards to the DOM*/
        var p1cardDOM = document.getElementById('p1card');
        p1cardDOM.src = 'images/card-' + p1cardChoice + '.png';

        var p2cardDOM = document.getElementById('p2card');
        p2cardDOM.src = 'images/card-' + p2cardChoice + '.png';



    });


/*The winner then gets the losing players card and adds it ot their own deck*/

	/*create arrays for each power group.  E.g. "pOnes = [1,2,3,4]"
	match images folder with the following.  E.g. images/pOnes/card-1.png
	re-configure card selection to select within above folders*/


/*The game keeps going until a player runs out of card, then the card get 'reshuffled' and the game starts over*/




/*if two players get cards with the same value, it is war.  One card is turned over face down and the others face up, 
the highest card wins*/





/*When a player runs out of cards it is GG.*/

