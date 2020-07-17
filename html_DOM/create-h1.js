var h1 = document.createElement("h1");
var content = document.querySelector(".content");

h1.innerHTML = "A new H1 with js dom manipulation";
content.appendChild(h1);

var p = document.querySelector(".content > p");
var removed_tag = content.removeChild(p);
console.log(removed_tag.innerHTML);
