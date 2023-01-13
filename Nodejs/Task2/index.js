const http=require('http');
const fs=require('fs');


http.createServer(function(req,response)
{

    let id=parseInt(req.url.split("/")[2])  
    let  productForm = fs.readFileSync('productDB.json','utf-8');
    let product = JSON.parse(productForm)[id - 1 ];

     if(req.url=="/home")
    {
        response.write("<h1>Welcome to our APIs</h1>")
    }

    else if(req.url=="/products")
    {
        response.write(productForm);
        
    }

    else if(req.url=="/products/" + id && id <= JSON.parse(productForm).length)
    {
        console.log(product)
        response.write(JSON.stringify(product))
    }

    else
    {
        console.log("Error 404")
    }
   
    response.end()

}).listen(4001,function()
{
    console.log('listen in port 4001')
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
