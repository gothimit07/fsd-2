var expr=require('express')
var app=expr()
app.get('test/:data/mark/:ans',(req,res)=>{
    res.send(req.params)
})
app.listen(3645,()=>{console.log("Sjusdf")})