var expr = require('express')
var app = expr()
var path = require('path')
sp = path.join(__dirname,'../public')
app.use(expr.static(sp))
app.get('/',(req,res)=>{
    res.sendFile(sp+'/index.html')
})
app.listen(5672,()=>{console.log('Creat Server')})