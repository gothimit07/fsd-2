var expr = require('express')
var app = expr()
app.use(expr.static('../public',{index:'form.html'}))
app.get('/process-get',(req,res)=>{
    var name = req.query.firstname
    var pwd = req.query.password
    res.send(`Welcome ${name} With Password ${pwd}`)
})
app.listen(3264,()=>{console.log("Creat Server")})