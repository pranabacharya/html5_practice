/*
var defaultVale = "80";
var promptBox = prompt("Enter  your age??", defaultVale);
alert(`Your age is ${promptBox}`);
var name = "Lucky";
var message = `Hello ${name}`;
 message = `Hello ${3+2}`;
 message = 'hELLO'+3+2
console.log(message);
var confirmBox = confirm("R u sure age is "+promptBox);
if(confirmBox){
    alert("Succcessfully submitted");
}else{
    alert("Try once more!!");
}

*/
function action(){
//     document.getElementById('myParagraph').innerHTML=
// document.getElementById('username').value;

// document.getElementById('username').value = "sample";

     document.getElementById('myParagraph').innerText=
 "<b>"+document.getElementById('username').value+"</b>"+"</br>"+
 "<i>"+document.getElementById('password').value+"</i>"+"</br>"

}
