$(".questionSelect > a, .btn").click(function(){
	
	window.onhashchange = function(e){
		
		var oldDiv = "#" + e.oldURL.split("#")[1];
		var newDiv = "#" + e.newURL.split("#")[1];
		console.log("new Div " + newDiv)
		console.log("old Div " + oldDiv)

		$("body").hide()
		$("body").fadeIn(500);
	}
})
