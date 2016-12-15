var cards = [];
for(var i=1; i<=13; i++){
	cards.push('<img src="../blackjack/cards/'+ i + 'h.png">')
	cards.push('<img src="../blackjack/cards/'+ i + 'h.png">')
};
console.log(cards);

// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 16; //to make game bigger, increase gridSize,add images to cards array
	var gridOfCard = [];
	var mgHTML = '';
	gridOfCard = cards.slice(0, gridSize);
	console.log(gridOfCard);

	var randomizedCards = [];
	
	var loopLength = gridOfCard.length;
	for(var i=0; i < loopLength; i++){
		var randomIndex = Math.floor(Math.random() * gridOfCard.length);
		console.log(gridOfCard.length);
		var card = gridOfCard[randomIndex];
		randomizedCards.push(card);
			mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+ randomizedCards[i] +'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
		gridOfCard.splice(randomIndex, 1);
	}

    $('.mg-contents').html(mgHTML);
    $('.mg-tile-inner').click(function(){
    	$(this).toggleClass('flip');

    	var cardsUp = $('.flip'); 
    	if(cardsUp.length == 2){
    		//check to see if they are the same
    		var cardsUpImages = cardsUp.find('.mg-front img');

    		if(cardsUpImages[0].src == cardsUpImages[1].src){
    			//MATCH!!!!
    			cardsUp.addClass('matched');
    			console.log("match");
    			cardsUp.removeClass('flip');

    		}else{
    			//the user flipped two unmatching cards, flip them back over
    			setTimeout(function(){
    				cardsUp.removeClass('flip');
    			}, 1000);
    		}

    	}

    	var score = (($('.matched').length)/2);
    	$('.score').text("Score:" + score + "/8");


    })
});