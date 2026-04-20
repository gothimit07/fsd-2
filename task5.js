var expr = require("express")
var app = expr()
app.use(expr.urlencoded({extended:true}))
app.use(expr.static('../public',{index:'task5.html'}))
app.post('/login',(req,res)=>{
    Fname = req.body.uname
    pass = req.body.password
    sub = req.body.Submit
    res.write(`User Name:${Fname}\n`)
    res.write(`PassWord:${pass}\n`)
    res.write(`Submit:${sub}`)
    res.send()
})
app.listen(1985,()=>{console.log("Start Server")})