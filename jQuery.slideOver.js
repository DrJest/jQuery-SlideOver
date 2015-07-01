(function($) {
  $.fn.slideOver= function (params) {
  	var defaults = { 
  		initial_offset: 0,
  		offset: 0
  	};
  	var settings = $.extend({}, defaults, params);
  	$.extends
  	var initial_offset=settings.initial_offset,
  		top=initial_offset,
  		offset = settings.offset,
  		$this=this, 
  		zindex=1;
  	this.each(function() {
  		$(this).css({position:"absolute",top:top,zIndex:++zindex});
  		$(this).data("so-top",top);
  		top += $(this).outerHeight();
  	});
  	this.last().css("min-height",$(window).innerHeight()-offset);
  	$("body, html").css("height", top)
  	$(window).scroll(function() {
  		$this.each(function(){
  			var h = $(this).outerHeight(),
  				wts = Math.min($(window).innerHeight()-h, 0),
  				sct = $(window).scrollTop()+offset,
  				top = $(this).data("so-top"),
  				wh = $(window).innerHeight()-offset;
  			if(top+h<sct+wh && sct>top)
  				$(this).css({position: "fixed", top: wts==0?wts+offset:wts})
  			else
  				$(this).css({position: "absolute", top: top});
  		})
  	})
  };
})(jQuery);
