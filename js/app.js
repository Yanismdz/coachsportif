$(document).foundation()

$(window).scroll(function()
			    {
				var fromTopPx = 50; // distance a parcourir pour que la bar change de couleur
				var scrolledFromtop = $(window).scrollTop();
				if(scrolledFromtop > fromTopPx)
				{
				    $(".top-bar, .menu").addClass("scrolled");
				}
				else
				{
				    $(".top-bar, .menu").removeClass("scrolled");
				}
			    });
