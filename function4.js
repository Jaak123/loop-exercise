total = " ";
for (let i = 1; i <= 100; i++) {
  if (i % 11 === 0) {
    total += " " + i + "\n";
  }
}
document.getElementById("answer").innerText = total;
