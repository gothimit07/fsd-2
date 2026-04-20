var expr = require("express")
var app = expr()
app.use(expr.urlencoded({extended:true}))
app.use(expr.static('../public',{index:'task4.html'}))
app.post('/process-post',(req,res)=>{
    Fname = req.body.firstname
    pass = req.body.password
    Gender = req.body.r1
    res.write(`<h1 style='color:red'>${Fname}</h1>`)
    res.write(`<h1 style='color:green'>${pass}</h1>`)
    res.write(`<h1 style='color:black'>${Gender}</h1>`)
    res.send()
})
app.listen(3003,()=>{console.log('Start Server')})