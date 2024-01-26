var count1 = 1;
var count2 = 1;
var count3= 1;

var countElement1 = document.querySelector("#like10");
var countElement2 = document.querySelector("#like20");
var countElement3 = document.querySelector("#like30");

function add1() {
    countElement1.innerText=count1+ "";
    console.log(count1);
    count1++;
    console.log(countElement1);
}

function add2() {
    countElement2.innerText=count2+ "";
    console.log(count2);
    count2++;
    console.log(countElement2);
}

function add3() {
    countElement3.innerText=count3+ "";
    console.log(count3);
    count3++;
    console.log(countElement3);
}


function hide(element) {
    element.remove();
}

function showmessage(value) {

    alert("You selected tiramisu");
}
