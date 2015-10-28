$(document).ready(function() {
	$('#focus').focusout(function(){
		alert('I\'m focused!');
	});

	$('.textInput').change(function(){
		console.log($(this).val());
	}); //can use keyup and keydown

	$('#myForm').submit(function(){
		alert('You submitted me!');
	});

});
