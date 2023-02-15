// 1-	Make a function that takes today’s temperature as a parameter, prints: 
// 	“HOT” if the entered temperature are more than or equals 30 and “Cold”
//      if it’s less than 30 (use ternary conditional operator).
var x= prompt("enter the temperature");
if(x>=30){
    console.log("HOT")
}
else{
    console.log("COLD")
}
// ////////////////////////////////////////////
// 2-	Change the previous function to take 2 parameters: Temperature and Actual feel temperature to have 3 cases:
// a.	Prints normal if both of temperature and actualFeel between 25 and 30.
// b.	Prints Cold if both of temperature and actualFeel less than 25.
// c.	Prints Hot if both of temperature and actualFeel higher than 30.
// Can you use ternary conditional operator in previous example? Why?

var x= prompt("enter the temperature");
var y= prompt("enter the actual temperature");
if(x,y>=25 && x,y<=30){
    console.log("Normal")
}
else   if(x,y>=25)
{
    
    console.log("COLD")
}
else{
    console.log("HOT")

}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3-	Make a function that takes Student faculty as a parameter, checks:
// a.	If the entered faculty: FCI, show message: “You’re eligible to Programing tracks”.
// b.	If the entered faculty: Engineering, show message: “You’re eligible to Network and Embedded tracks”.
// c.	If the entered faculty: Commerce, show message: “You’re eligible to ERP and Social media tracks”.
// d.	For any other faculty, show message: “You’re eligible to SW fundamentals track”.
// Use switch(). 

var fac=0;
switch("fac"){

    case 0 :
        fac="FCI"
        console.log("You’re eligible to Programing tracks")
        break;
    
    case 1 :
        fac="Engineering"
        console.log("You’re eligible to Network and Embedded tracks")
        break;
    
    case 2 :
        fac="Commerce"
        console.log("You’re eligible to ERP and Social media tracks")
        break;
    
    case 3 :
        fac="Engineering"
        console.log("You’re eligible to Network and Embedded tracks")
        break;
        default:
            console.log("You’re eligible to SW fundamentals track")

}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4-	Write a function that takes 2 parameters: start and end number and print odd numbers between the given 2 numbers.
// var num1= prompt("enter start num");
// var num2= prompt("enter end num");
// for (var num = num1 ; num1 = num2; num++){
//     if ( num % 2==0 ){
//         console.log("this num is even")
//     }
//     else {
//         console.log("this num is odd")
//     }
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5-	On contact page prompt user to enter his name, make sure that name is string, 
// and let the user enter his birth year and make sure that it is a number, and it is less than 2010, 
// and then calculate his age. For each prompt if user input valid show him next prompt,
//  if not valid show him the same prompt again until user enters it correctly (use loops). 
//  And after validating user input, write all user input on the page in that format:
// Name: ahmed
// Birth year: 1981
// Age: 30

var user = new Object();

 user.name = prompt("enter your name");
 user.year = prompt("enter your birth year");

while(user.year<=2010 && eval(user.year)){
    console.log("name="+ user.name);
    console.log("age="+ user.year);
    var age =(2022-user.year);
    console.log("age=" + age);
}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6-	Write a  program to check a triangle is equilateral, isosceles or scalene
// inputs :x=6 y=8 , z=12
// output: scalene

var e=6;
var f=8;
var g=12;

if( e == f && f == g){
    console.log("this triangle is equilateral ");
} 
else if(e==f){
    console.log("this triangle is isosceles")
}
else{
    console.log("this triangle is scalene")

}
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// 7-Create an array that hold the following students grades: 60, 100,10,15,85, and handle the following:
// a.	 find the highest student degree 
// b.	Print the grades of all students with grades below 60.

var arr=[60, 100,10,15,85];
var max = arr[0];
for (var i=0;i<=arr.length;i++ ){
    if(arr[i]>=max){
        max = arr[i];
    }
    console.log(max)
    var arr=[60, 100,10,15,85]
    console.log(math.max(arr));
    arr.sort(function(x,y){return(x-y)});
    for(var i=arr[0]; arr[i]<60;i--){
        console.log(arr[i]);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

   