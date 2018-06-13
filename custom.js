// JavaScript Document
//Lightbox
$('.modal-btn').click(function(){
	$('.modal-body').empty();
//	var title = $(this).parent('a').attr("title");
//	$('.modal-title').html(title);
	//$($(this).parents('div').html()).appendTo('.modal-body');
	console.log($(this));
	var arr = $(this).parents();
	var bg = window.getComputedStyle(arr[2], ':before').getPropertyValue('background-image');
	console.log(bg.replace("url(\"", "").replace("\")", ""));
	var bgUrl= bg.replace("url(\"", "").replace("\")", "");
	//$("#modal-img").attr("src", bgUrl);
	$('.modal-body').prepend('<img src="'+ bgUrl+'" width="100%">')
	$('#modalBox').modal({show:true});
});

//Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});