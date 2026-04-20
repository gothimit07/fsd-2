var expr=require('express')
var app=expr()
app.get('/user/:uid',(req,res)=>{
    // res.send(req.params)
    res.send("Welcome "+req.params.uid)
})
app.listen(3456,()=>{console.log("Creat Server")})