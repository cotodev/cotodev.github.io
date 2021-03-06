

	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		$('.nav a').on('click', function(){
			 $('.navbar-toggle').click();
		});
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('navactive');
			})
			$(this).addClass('navactive');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();

		$('.nav li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('ul.nav li a').removeClass("navactive");
				currentLink.addClass("navactive");
			}
			else{
				currentLink.removeClass("navactive");
			}
		});

		$('.map-container')
			.click(function(){
					$(this).find('iframe').addClass('clicked')})
			.mouseleave(function(){
					$(this).find('iframe').removeClass('clicked')});
	
    $(function(){
        $('#menu-types').mixItUp({
            animation: {
            	duration: 350,
            },
            load: {
            	filter: '.takeout'
          	},

        });
    });

    };


