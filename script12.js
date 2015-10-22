function createADiv() {
	var div = "<div class='dDiv'>I'm Born</div>";
	$('button').after(div);
}

function callThisDiv() {
	alert('You just called me!');
}

$(document).ready(function() {
	$('button').click(createADiv);
	$(document).on('click', '.dDiv', callThisDiv);
});
