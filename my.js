document.getElementById("text").style.color="red";
// document.getElementById("text").style.marginTop = "300px";
document.getElementById("text").style.font = " bold 100px arial,serif";
document.getElementById("text").style.textAlign="center"



document.write("<br>")


var s =prompt();
function add(n){
  
  document.getElementById("answer").style.font = " bold 100px arial,serif";
  document.getElementById("answer").style.color = "blue";
  document.getElementById("answer").style.textAlign = "center";
  
  n++;
  return n;
}  
   
document.getElementById("answer").innerHTML=add(s);



