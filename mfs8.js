var expr = require("express")
var app = expr()
app.use(expr.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<form action='/data' method='post'>Number1:<input type='number' name='Num1'>Number2:<input type='number' name='Num2'><input type='submit'></form>`)
})
app.post('/data',(req,res)=>{
    var num1 = parseInt(req.body.Num1)
    var num2 = parseInt(req.body.Num2)
    var Num = num1 + num2
    res.send(`Add Num1 And Num2 ${Num}`)
})
app.listen(2364,()=>{console.log("Create Server")})