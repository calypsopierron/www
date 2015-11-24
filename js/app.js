//quand le dom est ready
$(function() {
	//j'injecte le bouton du menu dans le HTML
	$('.js #header .wrap').append('<div class="btn-menu"></div>');
	//au click sur btn-menu
	$('.btn-menu').click(function(){
		//j'ajoute/supprime une classe .menu-collapse sur le menu
		$('.menu').toggleClass('menu-collapse');
	});

	$('#totop').click(function(){
		$('body, html').animate({
			scrollTop:0
		}, 400);
		return false;
	});
});