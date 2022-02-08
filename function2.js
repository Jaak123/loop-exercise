let x = parseInt(prompt("Enter numbers: "));
function num(){
    total = 0;
    for(i=1; i<=x;i++) {
        total = total +i;
        avrg = total / x;
        } 
    document.getElementById("answer").innerHTML = " Average : " + avrg;
}
num();
