


// Navbar

var bars = document.querySelector(".bars");
var nav  = document.querySelector("header nav");
var hTop = document.querySelector(".header-top");


bars.addEventListener("click" , bar);

function bar(){
	nav.classList.toggle("toggle");
}

window.onscroll = function() {
	if(scrollY > 80) {
		hTop.style.background = "#333";
		btn.style.right = "15px";

	} else {
		hTop.style.background = "transparent";
		btn.style.right = "-1000px";
	}

}



// Main

var scroll     = document.querySelector(".header-scroll-bottom");
var sectionOne = document.querySelector(".sectionOne");


scroll.addEventListener("click" , scrollToSectionOne);

function scrollToSectionOne(){
	document.body.scrollTop = sectionOne.offsetTop;
	document.documentElement.scrollTop = sectionOne.offsetTop;
}





// Scroll To Top

var btn = document.querySelector(".scrollToTop");

btn.addEventListener("click" , scrollToTop);

function scrollToTop() {
	document.body.scrollTop = "0";
	document.documentElement.scrollTop = "0";
}






