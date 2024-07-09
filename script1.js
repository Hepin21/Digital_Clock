function myFunction() {
  var popup = document.getElementById("myPopup");
	var msgbox = document.getElementById("msg");
	popup.textContent = msgbox.value;
	msgbox.value = "";
	popup.classList.toggle("show");
	
}

function myFunction5min() {
  var popup = document.getElementById("myPopup");
	var msgbox = document.getElementById("msg");
	popup.textContent = "માઈકથી થોડું દૂર રેહવા વિનંતી.";
	popup.classList.toggle("show");
	
}

function myFunction2min() {
  var popup = document.getElementById("myPopup");
	var msgbox = document.getElementById("msg");
	popup.textContent = "૨ મિનિટ  નો  સમય  બાકી છે.";
	popup.classList.toggle("show");
}

function myFunctiontimeup() {
  var popup = document.getElementById("myPopup");
	var msgbox = document.getElementById("msg");
	popup.textContent = "સમય પૂર્ણ થયેલ છે.";
	popup.classList.toggle("show");
	
}

function myFunctionblink() {
  var popup = document.getElementById("myPopup");
  var msgbox = document.getElementById("msg");
  var whole_time =document.getElementById("tableObj");
  whole_time.classList.toggle("blink");  
}