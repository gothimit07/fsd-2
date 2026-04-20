var expr = require("express")
var app = expr()
const a = (req,res,next)=>{
    console.log("I am A")
    next()
}
const b = (req,res,next)=>{
    console.log("I am B")
    next()
}
app.use('/ee',a,b)
app.get('/ee',(req,res)=>{
    res.send("Name="+req.name+"with marks"+req.marks)
})
app.listen(1235,()=>{console.log("Create Server")})