(function($) {
	// Initilize tooltipster tooltips
	$('.tooltipster').tooltipster({
	   animation: 'fade',
	   delay: 0,
	   theme: 'tooltipster-donnie-dark',
	   touchDevices: false,
	   trigger: 'hover'
	});

	// Add tooltip for topright corner avatar
	$('#top-user-image').tooltipster({
    	content: $('<span>'+donnie_dark_blog_description+'</span>'),
			delay: 0,
			theme: 'tooltipster-donnie-dark'
	});

	// Highlight current page on header, if any
	$("#donnie-dark-header-content ul.top-navigation-list > li").each(function(index) {
		//console.log( index + ": " + $( this ).children("a").attr("id") );
		var curItemName = $(this).children("a").attr("id");
		if (curItemName != null && curItemName != "") {
			var pathname = window.location.pathname;
			pathname = pathname.replace(/\//g, "");
			curItemName = curItemName.replace("nav-item-", "");
			if (pathname == curItemName) {
				$(this).children("a").addClass("nav-item-selected");
			}
		}
	});

}(jQuery));

// Make navigator smaller when scrolling page out of top
$(window).scroll( function() { 
	var scrolled_val = $(document).scrollTop().valueOf();
	var maxVal = 20;
	if (scrolled_val > maxVal) {
		$("div#donnie-dark-top-area").addClass("navScrolled");
		$("div#top-user-image").addClass("topImgScrolled");
	}
	else if (scrolled_val == maxVal || scrolled_val < maxVal) {
		$("div#donnie-dark-top-area").removeClass("navScrolled");
		$("div#top-user-image").removeClass("topImgScrolled");
	}
});