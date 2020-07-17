// random color function
var randomColor = function() {
    var rvalue = function(){
        return Math.round(Math.random()*255);
    }

    return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

var button = document.querySelector('.button');

var tealOn = true;

button.onclick = function() {
    // if (tealOn == true) {
    //     this.style.backgroundColor = 'white';
    //     this.style.color = 'teal';
    //     this.style.border = '5px solid teal';
    //     tealOn = false;
    //     // alert("Teal is on");
    // } else {
    //     this.style.backgroundColor = 'teal';
    //     this.style.color = 'white';
    //     this.style.border = '5px solid teal';
    //     tealOn = true;
    //     // alert("Teal is off");
    // }
    this.style.backgroundColor = randomColor();
    
}