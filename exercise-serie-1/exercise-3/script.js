 
var vname = prompt(" Give me your super villain name!");
document.write("Villain-san: ", vname, "<br><br>");

var pname = prompt(" And what is your super power?");
document.write("The villain ", vname , " power(s): ", pname, "<br><br>");

var mname = prompt(" What motivates you to be a villain?");
document.write("The villain ", vname , " Motivation is: ", mname, "<br><br>");

var pname = prompt(" And do you have a plan to destroy or conquer?");
document.write("The villain ", vname , " plan is: ", pname, "<br><br>");


function refreshPage(){
    window.location.reload();
} 