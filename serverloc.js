var expr = require('express')
var app = expr()
app.use(expr.static('./'))
app.listen(5006,()=>{console.log("Create Server")})