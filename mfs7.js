var expr = require("express")
var app = expr()
app.use(expr.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<form action='/data' method='post'>username:<input type='text' name='uname'>Age:<input type='number' name='age'><input type='submit'></form>`)
})
app.post('/data',(req,res)=>{
    var uname = req.body.uname
    var age = req.body.age
    res.send(`Welcome ${uname} and ${age}`)
})
app.listen(5656,()=>{console.log("Create Server")})