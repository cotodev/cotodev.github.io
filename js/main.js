

	$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
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
		// $('#contact').each(function () {
	 //        $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
	        
	 //        $('#overlay').on("mouseup",function(){          // lock it when mouse up
	 //            $('#map').addClass('scrolloff'); 
	 //            //somehow the mouseup event doesn't get call...
	 //        });
	 //        $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
	 //            $('#map').removeClass('scrolloff');
	 //        });
	 //        $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
	 //            $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
	 //                                                        // or you can do it on some other event
	 //    });
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
            $('#menu').mixItUp({
                transitionSpeed: 350,
                load: {
                filter: '.takeout'
              }
            });
        });

          $(function() {
            $( "#datepicker" ).datepicker();
        });


    
    };


