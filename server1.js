var expr = require('express')
var app = expr()
app.use(expr.static('../public'))
app.listen(5007,()=>{console.log("Create Server")})