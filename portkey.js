// function lastClicked () {

// }
var lastClicked = [];
	var W = 119, 
	A = 97, 
	S = 115, 
	D = 100;

$(document).ready(function () {
	$('.squarespace').click(function () {
		lastClicked.push($(this).hide());
	});
	$('.power').click(function () {
		if ($('.gray').hasClass('gray')) { 
			$('.gray').removeClass('gray');
		} else { 
			$('.game-body').addClass('gray');
			$('.power').addClass('lighten-up');
		}
	});

	$('body').keypress(function (event) {
		if (event.which === 13) {
			lastClicked.pop().show();
		}
	});

	$('.square').click(function () {
		$('.active')
			.animate({left: '0', top: '0'}, 600)
			.removeClass('active');
		$(this).addClass('active');
	});
	$(document).keypress(function (event) {
		switch (event.which) {
			case W:
				$('.active').animate({top: '-=50px'}, 100);
				break;
			case A:
				$('.active').animate({left: '-=50px'}, 100);
				break;
			case S:
				$('.active').animate({top: '+=50px'}, 100);
				break;
			case D:
				$('.active').animate({left: '+=50px'}, 100);
				break;
			
		}
	});

});