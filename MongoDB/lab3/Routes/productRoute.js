const express = require('express')
const route = express.Router();
const productController = require('../Controllers/productController')


route.get('/get',async function(req , res)
{
    let data =await productController.getAllProduct();
    res.send(data)
  
   
})

route.post('/add', async function(req,res){
    let data = await productController.addProduct(req.body)
    console.log(req.body)
    res.redirect('/home')
   
    
})

route.patch('/update/:id', async function(req,res){
    let data = await productController.updateProduct(req.params.id, req.body)
    
    res.redirect('/home')
    
})


route.delete('/delete/:id', async function(req,res){
    let data = await productController.deleteProduct(req.params.id)
    res.redirect("/home")
    
})



module.exports= route;