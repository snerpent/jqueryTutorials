$(document).ready(function() {
		$('#myInputBox').change(function() {
			alert('You just changed!');	
		});

		var myP = "<p>Hello world! I'm just born!</p>" ;
		$('#myInputBox').after(myP);
		
		var myO = "<p>Hi,I am before the box!!</p>" ;
		$('#myInputBox').before(myO);

		$('#myInputBox').next().html("You're just modified baby!");
		$('span').prev().val("You're just modified baby!");

		var myI = "<p>Hi, I am insertAfter!!</p>" ;
		$(myI).insertAfter('#myInputBox'); // parameter is $(content).insertAfter('selector');

		var myY = "<p>Hi, I am insertBefore!!</p>" ;
		$(myY).insertBefore('#myInputBox');

		$('li').css({				// eq(elementOrder).css({});
			"background":"black",
			"color":"white"
		});



});
