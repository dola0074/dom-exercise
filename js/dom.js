/*global console*/

//TASK 1

var tag = document.getElementById("tag-line");
//console.log(tag);

var headings = document.querySelectorAll(".bg-main-content h2");
//console.log(headings);

var collect =  "A Web Designer’s Site Launch Checklist" + "\n------------------------------\n"; 
//console.log(collect);

for (var i = 0; i < headings.length; i++) {
    collect += headings[i].innerHTML + "\n";   
}
    alert(collect);
    
// TASK 2

var when_to_launch = document.querySelectorAll(".bg-main-content .box");
//console.log(when_to_launch);

var scoop = when_to_launch[12].children
//console.log(scoop);

var collect = "When To Launch" + "\n------------------------------\n"; 
//console.log(collect);

for (var i = 1; i < scoop.length; i++) {
    collect += scoop[i].innerHTML + "\n" + "\n" + "\n";
}
    alert(collect);



