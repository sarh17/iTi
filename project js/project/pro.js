var x = document.getElementById("login")
var y = document.getElementById("Register")
var z = document.getElementById("btn")

function Register(){
    x.style.left="-25rem";
    y.style.left="3.125rem";
    z.style.left="6.875rem";
}

function login(){
    x.style.left="3.125rem";
    y.style.left="28.125rem";
    z.style.left="0";
}
function store(){
   var user= getElementById('userId').value;
   var userPass= getElementById('pass').value;
   var Mail= getElementById('email').value;
   localStorage.setItem('',JSON.stringify(a));

   localStorage.setItem('user');
   localStorage.setItem('userPass');
   localStorage.setItem('Mail');
}
function get(){
  
   localStorage.getItem('user');
   localStorage.getItem('userPass');
   localStorage.getItem('Mail');
}

var inputs = document.querySelectorAll("input");
var submit = document.querySelector(".submit-btn");
      
inputs.forEach(input => {
    input.addEventListener("focus", function(){
        input.style.border="  ";
    });
})

submit.addEventListener("click", function(e){
    e.preventDefault();
    var userName = document.querySelector("#userId").value;
    console.log(userName);
    var Mail = document.querySelector("#email").value;
    console.log(Mail);
    
    var userPass = document.querySelector("#pass").value;
    console.log(userPass);  
});

