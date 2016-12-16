(function(document, window, $){
$('body').scrollTop(0);
});

var viz=true, win = $(window), nav=$('nav');

win.scroll(function(){

    pos = win.scrollTop();
  
    if ( viz && pos >= $('#service').position().top-100){
    	viz = false;
      // nav.addClass('bg');
	    $('#navo').addClass('navbar-inverse');
		$('#navo').removeClass('navbar-default');
    }else if ( !viz && pos < $('#service').position().top-100 ){
      viz = true;
      // nav.removeClass('bg');
    $('#navo').addClass('navbar-default');
	$('#navo').removeClass('navbar-inverse');
    }

});
 $('#navList ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
    $(this).position().top+200;
});

})(document, window, window.jQuery);
    
    // var shiftWindow = function() { scrollBy(0, -100) };

    // window.addEventListener("hashchange", shiftWindow);
    // function load() { if (window.location.hash) shiftWindow(); }