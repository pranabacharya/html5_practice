// //1. Function Practice
// // function add(a, b){
// //         c = a+b;
// //         return c;
// //     }

// //         c1 = add(4,5);
// //         c2 = add(6,5);
// //         document.write(c1);
// //         document.write(c2);


// //2. Function Practice
// //  function add(x ,y) {
// //      z = (x/y)*100 ;
// // return z;
// // }


// // z1 = add(55,5);
// // z2 = add(333,3);
// // z3 = add(555,5);
// // z4 = add(55555,55555);

// // console.log(z1,z2,z3,z4);
// // document.write(z1,z2,z3,z4);
// // alert(z4);

// //3. Function Practice----Loop
// // var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] 
// // var arr = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
// // console.log (arr);
// // for(var i = 0; i<arr.length; i++){
// //     console.log(arr[i]);
// //     document.writeln(arr[i]);
// // console.log(arr.length);
// // }
// // console.log(arr);
// // document.writeln(arr.length);
// // for(var i = 0; i<arr.length; i++){
// //     console.log(arr[i]);
// //     document.writeln(arr[i]);
// // }

// //4.Function Practice---- ForEach Loop
// // var array = [1,2,3,4,5,6,7]
// // // array.forEach(function(value){
// // //     console.log(value);
// // //     document.writeln(value);
// // // })
// // console.log(array[5]);

// // var arr = ['L', 'U', 'C', 'K', 'Y'];

// // arr.forEach(function (data) {
// //     console.log(data);
// //     document.writeln(data);
// // })

// // String Methods

// // let mystr = "Pranab is a good boy.";

// // // MahString.replace("good","bad");
// // d = mystr.replace ("Pranab","Lucky");

// // console.log(d, mystr);

// // function action(){
// //     console.log ('The button was clicked');
// //     alert ('click sucessful');
// // }

// // window.onload = function(){
// //     console.log('This page loaded sucesfully');
// // }
// //var name = prompt("what is your name ?");

// // if (name !== null && name != "") {
// //     document.getElementById("_value").innerHTML = "Welcome" + " " + name;
// // // } else if (name == null) {
// // //     alert('enter a valid name');
// // // }
// // } else {
// //     alert('enter a valid name');
// // }

// /*
// if (name === null) {
//     alert('name cannt be null, enter a valid name');
// } else if(name == "") {
//     alert('name cannt be empty, enter a valid name');
// } else if (!isNaN(name)){
//     alert('name cannt be number, enter a valid name');
// }else{
//     document.getElementById("_value").innerHTML = "Welcome" + " " + name;
// }
// */

// /*
// function xyz(){
//     var errorMessage = "MyErrorMessage";
// }
// function abc(){
//     console.log(errorMessage);
// }

// xyz();
// abc();
// */


// /*
// //Global scope
// var errorMessage = "";
// var flag = true;

// function validateForm () {
//     errorMessage = "";
//     flag = false;
//     if (name === null) {
//         errorMessage = 'name cannt be null, enter a valid name';
//         flag = false;
//     } else if(name == "") {
//         errorMessage = 'name cannt be empty, enter a valid name';
//         flag=false;
//     } else if (!isNaN(name)){
//         errorMessage='name cannt be number, enter a valid name';
//         flag=false;
//     }else{
//         flag=true;
//     }
// }

// function showMessage(){
//     if(flag){
//         document.getElementById("_value").innerHTML = "Welcome" + " " + name;
//     }else{
//         alert(errorMessage);
//     }   
// }

// validateForm();
// showMessage();
// */


// /*

// //Function arguement

// function validateForm () {
//     //Local scope
//     var errorMessage = "";
//     var flag = false;
//     if (name === null) {
//         errorMessage = 'name cannt be null, enter a valid name';
//         flag = false;
//     } else if(name == "") {
//         errorMessage = 'name cannt be empty, enter a valid name';
//         flag=false;
//     } else if (!isNaN(name)){
//         errorMessage='name cannt be number, enter a valid name';
//         flag=false;
//     }else{
//         flag=true;
//     }
//     showMessage(errorMessage, flag);
//     //showMessage();
// }

// function showMessage(errorMessage, flag){
//     if(flag){
//         document.getElementById("_value").innerHTML = "Welcome" + " " + name;
//     }else{
//         alert(errorMessage);
//     }   
// }

// validateForm();
// showMessage();

// */

// /*
// Class Water {
//     var color;
//     var molucules;

//     function setColor(){
//         color = color;
//     }
//     function molucles(){
//         tase = taste;
//     }
//     function getColor(){
//         return color;
//     }
//     function getMolucles(){
//         return molucules;
//     }
//     //getter
// }

// class Fruit extends Water{
//     var private color;//properties or vairables
//     var private shape;//properties=value
//     var private taste;

//     //constructor----to give default value of properties or variables
//     Fruit(colorName, shapeName, tasteName){
//         this.color=colorName;
//         this.shape=shapeName;//properties=value
//         this.taste=tasteName;
//     }

//      Fruit(){
//         this.color="green";
//         this.shape="eliptical";//properties=value
//         this.taste="shower";
//     }
    
//     //method or functions
//     function setColor(){
//         color = color;
//     }
//     function setTase(){
//         tase = taste;
//     }
//     function setShape(){
//         shape = shape;
//     }
//     function getColor(){
//         return color;
//     }
//     function getTase(){
//         return taste;
//     }
//     function getShape(){
//         return  shape;
//     }
//     function showDate(){

//     }

// }

// Fruit apple = new Fruit("green", "round", "sweet");

// Fruit apple = new Fruit();

// apple.setColor(){
//     Fruit.color="red";
// }

// apple.getColor()//red

// Fruit myFruitObj = new Fruit();
// apple.setColor(){
//     Fruit.color="xyz";
// }

// //get
// console.log(myFruitObj.color); // green------------XXXXXXXXXXXXXXXXXXXXXXXXX
// //set
// myFruitObj.color = "Orange";====XXXXXXXXXXXXXXXXX
// myFruitObj.getColor()

// */

// /*

// class Car {
//     //var carName;
//     constructor(brandName, color, highestSpeed){
//         this.carName=brandName;
//         this.color=color;
//         this.highestSpeed = highestSpeed;
//     }
//     // constructor(){
//     //     this.carName="XXXX";
//     //     this.color="YYYY";
//     //     this.highestSpeed ="ZZZZZZ";
//     // }
// }

// myCar = new Car("JAMESB007BMW", "blue", "1000m/h");
// console.log(myCar.carName);
// console.log(myCar.color);
// console.log(myCar.highestSpeed);
// console.log("-------------------------------------------------------------------");
// myCar2 = new Car("LUMBER007", "red", "2000m/h");
// console.log(myCar2.carName);
// console.log(myCar2.color);
// console.log(myCar2.highestSpeed);
// console.log("-------------------------------------------------------------------");
// myCar3 = new Car("JAGUAR007", "black", "200000m/h");
// console.log(myCar3.carName);
// console.log(myCar3.color);
// console.log(myCar3.highestSpeed);
// console.log("-------------------------------------------------------------------");
// myCar4 = new Car();
// console.log(myCar4.carName);
// console.log(myCar4.color);
// console.log(myCar4.highestSpeed);

// */

// /*
// var name = prompt("what is your car name ?");

// class Car {
//     constructor(brand){
//         this.brand=brand;
//     }
//     present(x){
//         return x+"I have a "+this.brand+" car";
//     }
// }

// brand = new Car(name);
// console.log(brand.present("Hello.."));

// */
// /*
// let a = 6;
// let b = 7;
// let c = 8;
// let d = 6;
// console.log(a==b,"" ,a==c,"" ,a!==d);
// console.log(a+b,b+c+d,a+b==d);
// */

// // var a = 55;
// // var b = 55;
// // console.log(a + b);

// // var a = 3;
// // var b = 4;
// // console.log(a % b);
// // console.log(a ** b); //exponentiation power of another.
// // console.log(a *=b); //a= a+b; same for other operator.

// //adding string + numbers ;
// // var a = 5;
// // var b = 2;
// // var c= (a*b)/3;
// // console.log(c);

// // a++;  //increatement operators
// // b++;  //increatement operators
// // var c =a;
// // var d =b;
// // console.log(c , d);
// // // console.log("a+b= ",a+b); //this is how we can add strting + number     
// // // console.log("a*b=",a*b);  //this is how we can add strting + number 

// /*
// let x = 5;
// let y = 8;
// //console.log(x&&y);

// console.log(2 && 5);
// /*
// 0010
// 0101
// */

// /*
// var age = parseInt(prompt("Whats your age!!"));
// //14--90
// */



// // 1--14  90--
// // if (age >=14 && age<=90){
// //     alert("Age matched");
// // }else{
// //     alert("Sorry!!!!!!");
// // }

// // if (age <=14 && age>=90){
// //     alert("Age matched");
// // }else{
// //     alert("Sorry!!!!!!");
// // }

// // if (!age >=14 && !age<=90){
// //     alert("Age matched");
// // }else{
// //     alert("Sorry!!!!!!");
// // }

// "use strict";

// var i="Lucky";

// alert(i);