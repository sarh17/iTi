const express = require('express')
const app = express ()
const path = require('path')
const port = 8000
const meth= require('method-override')
const productRoute = require('./Routes/productRoute')



const mongoose= require('mongoose')
mongoose.set("strictQuery",false)
mongoose.connect("mongodb://127.0.0.1:27017/store").then(()=>
{
    console.log('open connection to DB')
}) 

app.use(meth("_method"))
app.use("/font", express.static("node_modules/bootstrap-icons/font"))
app.use("/dist", express.static("node_modules/bootstrap/dist"))
app.use(express.urlencoded({extended:true}))
app.use('/product',productRoute)
app.get('/home', (req, res)=> res.sendFile(path.join(__dirname, "main.html")))
app.listen(port, () => console.log(`example app listening on port ${port}`))












