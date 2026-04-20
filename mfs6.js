var expr = require("express")
var app = expr()
app.get('/',(req,res)=>{
    res.send(`<form action='/data' method='get'>username:<input type='text' name='uname'>Age:<input type='number' name='age'><input type='submit'></form>`)
})
app.get('/data',(req,res)=>{
    var uname = req.query.uname
    var age = req.query.age
    res.send(`Welcome ${uname}${age}`)
})
app.listen(5677,()=>{console.log("Create Server")})