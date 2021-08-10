document.getElementById("text").style.color="red";
// document.getElementById("text").style.marginTop = "300px";
document.getElementById("text").style.font = " bold 100px arial,serif";




document.write("<br>")
var n;


var s =prompt();
function add(n){

  n++;
  return n;
}  
    var answer=document.getElementById("answer").innerHTML=add(s);
    document.getElementById("answer").style.font = " bold 100px arial,serif";
    document.getElementById("answer").style.color = "red";
    // s=add(s);

document.write(answer);



