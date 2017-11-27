// console.log("내가 두번째 왔다.!! ")


// function myFunction() {
//     setInterval(function(){ alert("Hello"); }, 3000);
// }

function alertRest() {
    var time = new Date();
    console.log(time);
    var hour = time.getHours();
    console.log(hour);
    if(hour >= 17)
    {
        alert("잘가용!!!");    
    }
    else
    {
        alert("열공해요~~");
    }
}


// setInterval(alertRest, 1000*5)
// alertRest();