function setTitle() {
    var titles = document.getElementsByClassName('title');
    // console.log(titles);
    for(var i = 0; i < titles.length; i++) {
        titles[i].innerHTML = "title을 변경한다. .. ";
    }
}



// var btn = document.getElementsByTagName('button')[0];
var btn = document.getElementsByTagName('setTitle');
// console.log(btn);

/*익명함수*/
btn.onclick = function() {
    alert("Done");
    setTitle();
}

setTitle();