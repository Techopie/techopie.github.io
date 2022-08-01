

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
  document.getElementById("message").innerHTML = "It's not you, it's me!

  <div style="text-aling: center; margin: auto"><iframe src="http://www.youtube.com/embed/33YPOr6ZGw4?yt:stretch=16:9&vq=hd720p&loop=0&color=red&iv_load_policy=3&rel=0&showinfo=0&autohide=0&controls=1" width="560" height="315" allowtransparency="true" frameborder="0" ></iframe></div>
  
  ";
}
