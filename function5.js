let num = parseInt(prompt("enter number: "));
total = 0;
while (num) {
  total += num % 10;
  num = Math.floor(num / 10);
}
document.getElementById("answer").innerHTML = total;
