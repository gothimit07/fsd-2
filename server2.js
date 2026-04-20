var expr = require('express')
var app = expr()
app.use(expr.static('../public',{index:'hello.html'}))
app.listen(5016,()=>{console.log("Create Server")})