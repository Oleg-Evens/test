// $('.b1').on('click',function(){
// 	$('.blackout').addClass('show');
// 	$('.modal-window').removeClass('show-w');
// 	$('.mw1').addClass('show-w');
// });
// $('.b2').on('click',function(){
// 	$('.blackout').addClass('show');
// 	$('.modal-window').removeClass('show-w');
// 	$('.mw2').addClass('show-w');
// });
// $('.b3').on('click',function(){
// 	$('.blackout').addClass('show');
// 	$('.modal-window').removeClass('show-w');
// 	$('.mw3').addClass('show-w');
// });
// $('.blackout').on('click',function(){
// 	$('.blackout').removeClass('show');
// 	$('.modal-window').removeClass('show-w');
// });
$('.btn-scroll').on('click',function(){
	$('body,html').animate({scrollTop:$('.main-leven').offset().top},1500,'swing');
});

function messages(){
	var size = $('.message').css('font-size');
	$('.space').animate({
		scrollTop: 0
	}, 500);
	$('.smile1').css('display','none');
	$('.smile1').css('width','0px');
	$('.smile2').css('display','none');
	$('.smile2').css('width','0px');
	$('.message').css('display','none');
	$('.message').css('width','0px');
	$('.message').css('padding','0px');
	$('.message').css('font-size','0px');
	setTimeout(function(){
		$('.message').css('display','block');
		$('.smile1').css('display','inline');
		$('.smile2').css('display','inline');
	}, 500)
	var n = 0;
	var timer = setInterval(function(){
		n++;
		$('.message:nth-child('+ n +')').css('width','250px');
		$('.message:nth-child('+ n +')').css('padding','5px');
		$('.message:nth-child('+ n +')').css('font-size',size);
		var h = [];
		var g = [];
		var q = 15;
		for(var i = 0; i < 8; i++) {
			h[i] = $('.message:nth-child(' + (i + 1) + ')').height();
		}

		g[0] = 0;

		for(var i = 1; i < 8; i++) {
			g[i] = h[i - 1] + g[i - 1] + q;
			$('.message:nth-child('+ (i + 1) +')').css('top', g[i]);
		}
		var hd = $('.display').height();
		if(g[7] + h[7] > 450 && $('.space').scrollTop() < 100 && n < 8) {
			$('.space').animate({
				scrollTop: 100
			}, 500)
		}
		if(n == 3) {
			$('.smile1').css('width','15px');
		}
		if(n == 8) {
			$('.smile2').css('width','15px');
		}
		if(n == 3 && size == '6px') {
			$('.smile1').css('width','10px');
		}
		if(n == 8 && size == '6px') {
			$('.smile2').css('width','10px');
		}

	}, 3000)
	setTimeout(function(){
		messages();
	},30000)
}
messages();