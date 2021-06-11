function calculate() {
	var widnowWidth = window.innerWidth; 
	var windowHeight = window.innerHeight;
	if (widnowWidth >= 576 && windowHeight <= 500) { // Wide position at the top of the screen
		var windowHeight = window.innerHeight;
		var windowHeight = window.innerHeight; 
		var navHeight = $('#navbar').outerHeight(true); // Navbar height
		var result = windowHeight - navHeight; 
		var elem = document.getElementById('wrapper'); 
		document.getElementById("myImage").style.maxWidth = "90%"
		document.getElementById("myImage").style.maxHeight = "90%"
		elem.style.height = result + "px";	// Change the height of a "wrapper" div with image
	}
	else if (widnowWidth <= 576 && windowHeight <= 450) { // Narrow position at the top of the screen
		var windowHeight = window.innerHeight;
		var windowHeight = window.innerHeight; 
		var navHeight = $('#navbar').outerHeight(true); // Navbar height
		var result = windowHeight - navHeight; 
		var elem = document.getElementById('wrapper'); 
		document.getElementById("myImage").style.maxWidth = "80%" // Changing image size in order not to block the text
		document.getElementById("myImage").style.maxHeight = "80%" 
		elem.style.height = result + "px";	// Change the height of a "wrapper" div with image
	}
	else if (widnowWidth >= 768 && windowHeight >= 450) { // Wide position at the bottom of the screen
		var windowHeight = window.innerHeight; 
		document.getElementById("wrapper").className = "col-md-6";
		var navHeight = $('#navbar').outerHeight(true); // Navbar height
		var result = windowHeight - navHeight; 
		var elem = document.getElementById('wrapper'); 
		document.getElementById("myImage").style.maxWidth = "90%"
		document.getElementById("myImage").style.maxHeight = "90%"
		elem.style.height = result + "px";	// Change the height of a "wrapper" div with image
	}
	else { // Narrow position at the bottom of the screen
		var windowHeight = window.innerHeight;
		document.getElementById("wrapper").className = "col-md-6";
		var navHeight = $('#navbar').outerHeight(true); 
		var infoHeight = $('#main-section').outerHeight(true); // Main-section height
		var result = windowHeight - navHeight - infoHeight;
		var elem = document.getElementById('wrapper');
		document.getElementById("myImage").style.maxWidth = "90%"
		document.getElementById("myImage").style.maxHeight = "90%"
		elem.style.height = result + "px";
	}
}
function screen_height() { // Adding one more position (col-sm-4) for the small screens
	var windowHeight = window.innerHeight; 
	if (windowHeight <= 500) {
		document.getElementById("wrapper").className = "col-sm-4 col-md-6";
	}
}