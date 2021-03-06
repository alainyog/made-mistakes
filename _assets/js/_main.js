/*! Responsive Menu */
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/
//  The function to change the class
var changeClass = function (r,className1,className2) {
	var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
	if( regex.test(r.className) ) {
		r.className = r.className.replace(regex,' '+className2+' ');
		}
		else{
		r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
		}
		return r.className;
};  
//  Creating our button in JS for smaller screens
var menuElements = document.getElementById('site-nav');
menuElements.insertAdjacentHTML('afterBegin','<button type="button" role="button" id="menutoggle" class="navtoogle lines-button x" aria-hidden="true"><span class="lines"></span>menu</button>');

//  Toggle the class on click to show / hide the menu
document.getElementById('menutoggle').onclick = function() {
	changeClass(this, 'navtoogle active', 'navtoogle');
};
// http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
document.onclick = function(e) {
	var mobileButton = document.getElementById('menutoggle'),
		buttonStyle =  mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

	if(buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
		changeClass(mobileButton, 'navtoogle active', 'navtoogle');
	}
};

/*! Plugin options and other jQuery stuff */

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
	$('.image-popup').magnificPopup({
		disableOn: function() {
			if( $(window).width() < 500 ) {
				return false;
			} 
			return true;
		},
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
		},
		removalDelay: 300, // Delay in milliseconds before popup is removed
		// Class that is added to body when popup is open. 
		// make it unique to apply your CSS animations just to this exact popup
		mainClass: 'mfp-fade'
	});
});

// FitVids options
$(function() {
	$("article").fitVids();
});

// Lazy Load  
$("img.load").show().lazyload({ 
		effect: "fadeIn",
		threshold: 200
});