$(".questionSelect > a, .btn").click(function(){
	if ("onhashchange" in window) {
		$("body").hide()
		$("body").fadeIn(500);
	}
})
