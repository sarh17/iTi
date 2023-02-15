// 1-Make div has class, id, and name and use 5 ways to select this div. 
var allDivs=document.getElementsByClassName("hp")
var allDivs=document.getElementsByTagName ("div")
var allDivs=document.getElementById("dr")
var allDivs= document.getElementsByName("sarah")
var allDivs=document.querySelector("#dr>div")
// console.log("allDivs")
////////////////////////////////////////////////////////////
// 2-Create a page that contains 3 images, 
// and use JavaScript Code to handle onmouseover and onmouseleave event on all of them,
//  to increase and decrease a size when each image when mouse over and leave. 
// search about  this to make best practise code  


function setNewImage(x){
  x.style.width ="150px"
}

function setoldimage(x){
  x.style.width= "64px"
}

    
    ////////////////////////////////////////////////////////////////////////////////////////////
    // 3-Make    I am new child  and image   
    
    function createDiv(x){

      var newDiv= document.createElement("div")
      var newPar= document.createElement("p")
      var newImg= document.createElement("img")

      newPar.innerText= "hi I am a new child :)"
      newImg.src="1.jpg"
      newImg.style.width = "50px"

      newDiv.appendChild(newPar)
      newDiv.appendChild(newImg)
      document.body.appendChild(newDiv)
      
      
      
    }
    //////////////////////////////////////////////////////////////////////////
//     a.	Form fields: 
// i.	Full Name (Required)
// ii.	Email (Required, input type: email)
// iii.	City (Drop-down list filled with some cities)
// iv.	Password
// v.	“I accept the terms and conditions” checkbox.
// vi.	Register button, 
// var nameX =document.getElementById("fullname").focus();
// var emailX =document.getElementById("nEmial").focus();
// var passX =document.getElementById("nPassword").focus();
function setfocus(x){
  x.style.border = "1px solid red"
}
////////////////////////////////////////////////////////////////////////////////////////////
// 5-make slide show have 4 button one to go next 	image ,
// to go to back image ,
// to show all images 	one after one each 
// 2 second and last button to 	stop slide.


