//your code here
let input = document.getElementById("evaluatedText");
let heading = document.getElementById("letterCount");
heading.innerText = 0;
input.addEventListener("change", onChange);
function onChange() {
	heading.innerText = inpt.value.length;
}