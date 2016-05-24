var ready;
ready = function() {
	var home = document.getElementById("home");
	var projects = document.getElementById("projects");
	var contact = document.getElementById("contact");
	var underline = document.getElementById("underline");

	home.addEventListener('click', function(){
		underline.style.left = "0.7em";
		underline.style.width = "3em";

	});

	projects.addEventListener('click', function(){
		underline.style.left = "5.5em";
		underline.style.width = "4em";

	});

	contact.addEventListener('click', function(){
		underline.style.left = "11.5em";
		underline.style.width = "3.7em";

	});
}

$(document).ready(ready);
$(document).on('page:load', ready);