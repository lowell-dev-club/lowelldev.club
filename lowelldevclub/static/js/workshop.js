$(function(){
	$(".construction").typed({
		strings: ["Under Construction"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 0,
		// time before typing starts
		startDelay: 0,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
$(function(){
	$(".flask").typed({
		strings: ["Full Stack Web Devlopment"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 0,
		// time before typing starts
		startDelay: 0,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
/*
	This is the type script for the club description in the about page
*/
var i = 0;
var txt = "We are working on the workshop. Check out our github to take a peak at the source code or what this weeks workshop will be on here: https://github.com/lowell-dev-club";
var speed = 40;
var delayInMilliseconds = 1200
setTimeout(function() {
    if (i < txt.length) {
      document.getElementById("message").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}, delayInMilliseconds);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var i = 0;
var txt1 = "1. Repl.it";
var speed = 40;
var delayInMilliseconds = 1200
setTimeout(function() {if (i < txt1.length) {document.getElementById("link1").innerHTML += txt1.charAt(i);i++;setTimeout(typeWriter1, speed);}}, delayInMilliseconds);
function typeWriter1() {if (i < txt1.length) {document.getElementById("link1").innerHTML += txt1.charAt(i);i++;setTimeout(typeWriter1, speed);}}
i = 0;
var delayInMilliseconds2 = 3000
var txt2 = "2. https://lowelldev.club/workshop/hack1";
setTimeout(function() {if (i < txt2.length) {document.getElementById("link2").innerHTML += txt2.charAt(i);i++;setTimeout(typeWriter2, speed);}}, delayInMilliseconds2);
function typeWriter2() {if (i < txt2.length) {document.getElementById("link2").innerHTML += txt2.charAt(i);i++;setTimeout(typeWriter2, speed);}}
i = 0;
var delayInMilliseconds1 = 5000
var txt3 = "3. https://lowelldev.club/workshop/hack2";
setTimeout(function() {if (i < txt3.length) {document.getElementById("link3").innerHTML += txt3.charAt(i);i++;setTimeout(typeWriter3, speed);}}, delayInMilliseconds3);
function typeWriter3() {if (i < txt3.length) {document.getElementById("link3").innerHTML += txt3.charAt(i);i++;setTimeout(typeWriter3, speed);}}