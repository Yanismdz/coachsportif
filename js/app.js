$(document).foundation()

$(window).scroll(function(){
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

$(document).ready(function(){
    // Fade in au chargement de la page
    $("body").css("display", "none");
    $("body").fadeIn(400);
    // Désactivation du lien pour lancer le fade out avant de rediriger
    $('.globallink').click(function(e){
	redirect = $(this).attr('href');
	e.preventDefault();
	$('body').fadeOut(400, function(){
	    document.location.href = redirect
	});
    });
});
