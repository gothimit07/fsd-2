var expr=require('express')
var app=expr()
app.get('/user/:uid',(req,res)=>{
    var name=req.query.name
    var age=req.query.age
    var uid=req.params.uid
    res.json({uid,name,age})
})
app.listen(5678,()=>{console.log("Create Server")})