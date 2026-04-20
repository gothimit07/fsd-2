var expr=require('express')
var app=expr()
app.get('/',(req,res)=>{
    data={name:'abc',age:23}
    // res.write(JSON.stringify(data))
    // res.send(data)
    // res.send()
    res.json(data)
})
app.listen(5002,()=>{console.log("Creat Server")})