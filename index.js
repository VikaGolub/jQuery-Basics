// ----------------------------------------------
// JS 1
// document.getElementById("elem").innerHTML = "!";

// jQuery 1
let elem = $("#elem").html("!");

// ----------------------------------------------
// JS 2
// const elems = document.getElementsByClassName("www");

// for (let i = 0; i < elems.length; i++) {
//   elems[i].style.color = "red";
// }

// jQuery 2
$(".www").css("color", "red");
$(".vvv").css("color", "blue").html("jquery list");

// ----------------------------------------------
// JS 3
// const elems = document.getElementsByClassName("www");

// for (let i = 0; i < elems.length; i++) {
//   elems[i].innerHTML = "!!!";
// }

// jQuery 3
// $(".www").html("!!!");
// or
let elems = $(".www");
elems.html("!!!");
//
