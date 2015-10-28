$(document).ready(function() {
//	$('#A, #B').something(colorThis);
	$('*').css('background', 'yellow');
	$('.myDiv:contains(jQuery)').css('background', 'white');
	console.log($('span[data-xyz]').html());
	$('a[href^="https"]').css('background', 'black').css('color', 'white');
	$('span[class$= "abc"]').css('background', 'black').css('color', 'white');
	$('div:not(.abcd)').css('color', 'red');
});
