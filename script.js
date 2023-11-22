//your code here
let inputElement = document.getElementById("evaluatedText");
let heading = document.getElementById("letterCount");
console.log(inputElement);
heading.innerText = 0;
inputElement.addEventListener("input", onChange);
function onChange() {
	heading.innerText = inputElement.value.length;
}