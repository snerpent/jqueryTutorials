function colorThis() {
	$(this).css('background', 'orange');
}
$(document).ready(function() {
	$('li').click(colorThis)
});
