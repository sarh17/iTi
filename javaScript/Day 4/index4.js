// Make a button (Start clock), that showing alert saying “Clock Started” and 
// displays clock every sceond with current time in local format  

function display(){
alert("clock started")

}
var clockBtn = document.getElementById("start");

clockBtn.addEventListener("click", function() {
  setInterval(function() {
    var timeNow = new Date().toLocaleTimeString('en-us');
    console.log(timeNow);  
  },1000)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Make a button that when press it create new window linkedin. 
var button= document.getElementById("newTab");
   console.log(button);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Make a link that on itSs onClick event opens new advertising window after 3 seconds, and write long paragraphs on it.
//  Also, make another link that closes this page. (Note that the browser may block 
//     the opening of the new window; make sure that you allow this page to open popups in your browser).
var wind= document.getElementById("window1");
var dynwind;
wind.addEventListener("click",function(){
  setTimeout( function(){
  dynwind= window.open('')
  dynwind.document.write("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi, eaque quod nostrum et cumque voluptatem vero neque eos impedit adipisci officiis quae quidem dicta modi quis cum? Magni autem sint quod molestiae saepe recusandae voluptas ipsa, inventore ipsam omnis, delectus, ullam obcaecati minima deserunt dolores a minus consequatur optio!")
  } ,3000)
})

var btnClose= document.getElementById("close");
btnClose.addEventListener("click",function(){
  var closewind= dynwind.close()
  
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4-	Make page when scroling  down  to y>777 show alert say “hi”
// var winbody = document.getElementsByTagName("body");

window.addEventListener("scroll", function(){

  if (window.scrollY > 777){
    alert("hi")
    
  }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5- Prompt user to enter his Full Name and email address, and use regular expression only 
// (don't use string functions) to validate his input to make sure it is in correct format using these criteria: 
// a.	Full Name should be characters only (without numbers or special characters) and has the following structure:
// •	Characters (alphabetic only) more than 3.
// b.	Email must be from Egypt (.eg domain), for example name@domain.com.eg

var nameValidation= /[a-zA-Z]{3,}$/
var nameUser =prompt("enter your name")
console.log(nameValidation.test(nameUser))

var emailValidation=/^[a-zA-Z]{,20}[0-9]@[a-z]{4,10}(.)[a-z]{3,5}.eg/
var emailUser =prompt("enter your email");
console.log(emailValidation.test(emailUser));

//  var email =prompt("enter your email")
//  function email(){
//    email= /^[a-zA-Z]{3,}/
//  }