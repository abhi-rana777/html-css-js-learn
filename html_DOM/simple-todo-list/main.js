var ul = document.querySelector('ul');

var addItem = document.querySelector('.addItem');

addItem.onclick = function() {
    var inputValue = document.getElementById('text-input');

    // console.log('To-Do added');
    // console.log(inputValue.value);
    if(inputValue.value !== ''){
        var li = document.createElement('li');
        li.innerHTML = inputValue.value;
        ul.appendChild(li);
        inputValue.value = "";
    }
    
}