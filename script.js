document.getElementById("luck").addEventListener("click", myFunction);
function myFunction() {
  var x = Math.floor(Math.random() * 6) + 1;
  var y = document.getElementById("box").value
  y = parseInt(y);
  if (x == y) {
   alert("you guessed correctly!")
  }
}