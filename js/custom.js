//Lightbox
$('.thumbnail').click(function(){
	$('.modal-body').empty();
	var title = $(this).parent('a').attr("title");
	$('.modal-title').html(title);
	$($(this).parents('div').html()).appendTo('.modal-body');
	$('#modalBox').modal({show:true});
});

//Collapse
$(document).ready(function(){
  $("#portfolio").on("show.bs.collapse", function(){
    $(".morefirst").hide();
  });
  $("#portfoliotwo").on("show.bs.collapse", function(){
    $(".moresecond").hide();
  });
});

//Carousel
$('#startCarousel').carousel({
	interval: 5000
})

$('#artcarousel').carousel({
	interval: 10000
})

$('#artcarousel .item').each(function(){
	var next = $(this).next();
	if(!next.length){
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	if(next.next().length>0){
		next.next().children(':first-child').clone().appendTo($(this));
	}
	else{
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}

});