/*More*/

function Spoiler() {
var ele = document.getElementById("contentSpoiler");
var text = document.getElementById("linkSpoiler");
if(ele.style.display == "block") {
ele.style.display = "none";
text.innerHTML = "Подробнее";
}
else {
ele.style.display = "block";
text.innerHTML = "Скрыть";
}
} 
