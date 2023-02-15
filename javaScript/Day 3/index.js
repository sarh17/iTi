var x= prompt("enter the temperature");
if(x>=30){
    console.log("HOT")
}
else{
    console.log("COLD")
}
////////////////////////////////////////////

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
////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////
var num1= prompt("enter start num");
var num2= prompt("enter end num");
for (var num = num1 ; num1 = num2; num++){
    if ( num % 2==0 ){
        console.log("this num is even")
    }
    else {
        console.log("this num is odd")
    }
}
////////////////////////////////////////////////////////////////////////
var user = new Object();

 user.name = prompt("enter your name");
 user.year = prompt("enter your birth year");

while(user.year<=2010 && eval(user.year)){
    console.log("name="+ user.name);
    console.log("age="+ user.year);
    var age =(2022-user.year);
    console.log("age=" + age);
}
//////////////////////////////////////////////////////
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
///////////////////////////////////////////////////

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


   