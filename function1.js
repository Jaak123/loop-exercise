
let x = parseInt(prompt("Enter numbers: "));
function num(){
    total = 0;
    for(i=1; i<=x;i++) {
        total = total + i;
        console.log(i);
        } 
    document.getElementById("answer").innerHTML = "The first "+ x +" natural number is: "+ i + "<br/>"+ " sum : " + total;
}
num();



