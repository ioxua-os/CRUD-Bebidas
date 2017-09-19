(function($) {
	var allClasses = ['animated', 'fadeOutUp', 'fadeInUp'],
		enter = 'modal-container animated fadeInUp',
		exit = 'modal-container animated fadeOutUp';

	$.fn.extend({
		showModal: function() {
			let darkness = $(this);
			let content = darkness.find(".modal-container");

			console.log(darkness);
			darkness.css({
				display: 'block'
			});

			content.attr('class', enter);
		},
		hideModal: function() {
			let darkness = $(this);
			let content = darkness.find(".modal-container");

			// IF IN CHROME ANIMATION BUGS, ERASE webkitAnimationEnd
			content
				.one('webkitAnimationEnd animationEnd', function(event) {
					darkness.css({
						display: 'none'
					});
				})
				.attr('class', exit);
		}
	});
})(jQuery);