document.getElementById('luck').addEventListener('click', myFunction)
function myFunction (){
  let x = Math.floor(Math.random() * 6) + 1
  let y = document.getElementById('box').value
  y = parseInt(y)
  if (x === y) {
    alert('you guessed correctly!')
  }
}
