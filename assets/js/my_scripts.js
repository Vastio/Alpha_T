// fade in title and message
var divs = $('.title, .message');
$(window).scroll(function(){
   if($(window).scrollTop() < 5){
         divs.stop(true,true).fadeIn(1500);
   } else {
         divs.stop(true,true).fadeOut(1500);
   }
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

var isScrolling = false;

//Scrolls window to the next div element using the scroll wheel.
// Scroll bug fixed! 
$(function() {          
    $('body').mousewheel(function(event, delta) {
		if(!isScrolling){
			isScrolling = true;
			var $current = $('div.current');
			
			//console.log(delta);
			//console.log($current);
					
			if (delta > 0) {
				$prev = $current.prev('.container');
				
				if ($prev.length) {
					$('body').scrollTo($prev, 500);
					$current.removeClass('current');
					$prev.addClass('current');
				}
			} else {
				$next = $current.next('.container');
				
				if ($next.length) {
					$('body').scrollTo($next, 500);
					$current.removeClass('current');
					$next.addClass('current');
				}
			}
				
			
			event.preventDefault();
			setTimeout(function(){
				isScrolling = false;
			}, 500);
		}
    });
});
