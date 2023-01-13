const express = require('express');
const path= require("path")
const app = express();
const fs=require('fs');
 

app.use(express.urlencoded({extended:true}))

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "lab3.html"))
})

app.get("/welcome/:name" , function(request, response) {
    response.send("Welcome " + request.params.name);

})

app.get('/welcome', function(request, response){
    response.send("Welcome ");
});


app.post('/login', function(request, response){
    console.log(request.body)
    response.send("Welcome " + request.body); 
});
/*iii)	In Express service make a route “/products:id”, and validate that the id must be number of 2 digits.
(a)	Make an Array of products names.
(b)	“/products:id” should respond by the name of the product with index equal to the given id.
*/
let products = [
    1,2,3, 4,5,6,7,8,9,"Head first design patterns","clean code","algorithms to live"
];

app.get("/products/:id", (req, res) => {
    let id = req.params.id;
    if (id > 9) {
        res.send(products[id - 1]);
    } else {
        res.send("id must be a number of 2 digits.'");
    }
});

app.listen(8000,function()
{
        console.log("listen")
})
/////////////////////////////////////////////////////////////////////////////////////////////////


