var expr=require('express')
var app=expr()
app.get('/',(req,res)=>{
    res.type('text/pain')
    res.write("Hii")
    res.send()
})
app.listen(5000,()=>{
    console.log("Creat Server")
});