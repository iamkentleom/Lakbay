function logIn(){
	console.log("hello world");
	document.getElementById("signUp").innerHTML = "<h2>Sign Up</h2><p></p><input type=\"text\" placeholder=\"Username\" class=\"form-control\"><p></p><input type=\"password\" placeholder=\"Password\" class=\"form-control\"><p></p><button class=\"btn btn-success\">Log In</button> <span><a href=\"#\" onclick=\"logIn()\">or Log in to existing account </a></span>";
}