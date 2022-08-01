

/*
These lines were causing problem in github pages

document.getElementById("message").innerHTML = "Hello <b>World</b> <i>testing</i>"
function myResponse() {
  document.getElementById("message").innerHTML = "It's not you, it's me!";
}


refference

https://stackoverflow.com/questions/18239430/cannot-set-property-innerhtml-of-null


*/


window.onload = function() {

        what();

        function what() {
document.getElementById("message").innerHTML = "Hello <b>World</b> <i>testing</i>"
        };

    }

function myResponse() {
  document.getElementById("message").innerHTML = "It's not you, it's me";
}
