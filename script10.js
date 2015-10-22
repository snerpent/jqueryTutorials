$(document).ready(function() {
	var x = $('#myDiv').text();
	alert(x);
	var text = $('#seeThis').text();
	var html = $('#seeThis').html();

	$('#seeThis').after(text);
	$('#seeThis').after(html);
});
