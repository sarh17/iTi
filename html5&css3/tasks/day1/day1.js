<<<<<<< HEAD
var canvas = document.getElementById ("canvas");
var ctx = canvas.getContext("2d");

// ctx.strokeStyle = "#";
//  ctx.rect(10,0,50,50);
//  ctx.stroke()



var col=document.getElementById("colorPicker");
var btnApp = document.getElementById("btnApp")
btnApp.addEventListener("click", function() {
  for (let index = 0; index < 20; index++) {
    ctx.beginPath()
    let x= Math.random()*600
    let y= Math.random()*100
    var cir= ctx.arc(x,y,10, 0,2*Math.PI,false);
    ctx.fillStyle= col.value;
    ctx.strokeStyle= col.value;
    ctx.fill();
    ctx.stroke();
      ctx.closePath();
    }
   console.log(col.value)
  });


=======
var canvas = document.getElementById ("canvas");
var ctx = canvas.getContext("2d");

// ctx.strokeStyle = "#";
//  ctx.rect(10,0,50,50);
//  ctx.stroke()



var col=document.getElementById("colorPicker");
var btnApp = document.getElementById("btnApp")
btnApp.addEventListener("click", function() {
  for (let index = 0; index < 20; index++) {
    ctx.beginPath()
    let x= Math.random()*600
    let y= Math.random()*100
    var cir= ctx.arc(x,y,10, 0,2*Math.PI,false);
    ctx.fillStyle= col.value;
    ctx.strokeStyle= col.value;
    ctx.fill();
    ctx.stroke();
      ctx.closePath();
    }
   console.log(col.value)
  });


>>>>>>> 9b3aa67b9e971d0212fbdffdb52f727fde4f5221
////////////////////////////////////////////////////////////////////////////////////