var cards = [
	'<img src="../blackjack/cards/12h.png">',
	'<img src="../blackjack/cards/13h.png".png">'
];
// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 8;    //to make game bigger, increase gridSize,add images to cards array

	var card = '<img src="../blackjack/cards/12h.png">';

	var mgHTML = '';
	for(var i = 0; i < gridSize; i++){
		if(i < 2){card = cards[0];
		}else if(i<4){card = cards[1];
		}else if(i<6){card = cards[0];
		}else{card = cards[1];
		}
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}
console.log(mgHTML);
    $('.mg-contents').html(mgHTML);
    $('.mg-tile-inner').click(function(){
    	$(this).toggleClass('flip');
    })
});