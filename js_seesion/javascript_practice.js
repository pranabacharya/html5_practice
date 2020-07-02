"use strict";

var userName = prompt("Enter your Username?")
if (userName == 'Admin' || userName == 'Pranab' || userName == 'Niki') {
    var passWord = prompt("Password?")
    if (passWord == 'TheMaster' || passWord == 'PA00@476868' || passWord == 'Niki1234' ) {
        if (userName == 'Admin'){
            alert("Welcome Admin");
            document.writeln("Welcome Admin");            
        }else if (userName == 'Pranab'){
            alert("Welcome Pranab");
            document.writeln("Welcome Pranab"); 
        }else{
            alert("Welcome Niki");
            document.writeln("Welcome Niki");
        }
        
    } else if (passWord == null || passWord == "") {
        alert("Enter valid credentials");
        document.writeln("Enter valid credentials");
    } else {
        alert("Wrong Password Entered");
        document.writeln("Wrong Password Entered");
    }
    
} else if (userName == null || userName == "") {
    alert("Cancelled");
    document.writeln("Cancelled");
} else {
    alert("i dont know you");
}