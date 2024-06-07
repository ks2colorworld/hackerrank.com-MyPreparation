var div = document.createElement("Div");

div.id = "btns";
div.className = "buttonContainer";

document.body.appendChild(div);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((item, i) => {
  let btn = document.createElement('button');
  btn.id = 'btn' + (i + 1);
  btn.innerHTML = item;
  div.appendChild(btn);

});

document.getElementById('btn5').onclick = function () {
  var originalbtn1 = btn1.innerHTML;
  btn1.innerHTML = btn4.innerHTML;
  btn4.innerHTML = btn7.innerHTML;
  btn7.innerHTML = btn8.innerHTML;
  btn8.innerHTML = btn9.innerHTML;
  btn9.innerHTML = btn6.innerHTML;
  btn6.innerHTML = btn3.innerHTML;
  btn3.innerHTML = btn2.innerHTML;
  btn2.innerHTML = originalbtn1;
};