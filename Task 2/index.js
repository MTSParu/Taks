const btn = document.getElementById('btn');

let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});


var date = new Date();
document.getElementById("p1").innerHTML = date;

const addBtn = document.getElementById("add-btn")
addBtn.addEventListener('click', function onClick() {
  const number1 = document.getElementById("number1").value
  const number2 = document.getElementById("number2").value
  const total = parseInt(number1) + parseInt(number2);
  document.getElementById("total-results").innerHTML = total;
});