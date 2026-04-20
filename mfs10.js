var expr = require("express")
var app = expr()
const fun = (req,res,next)=>{
    console.log("Student Entered")
    next()
}
const fun1 = (req,res,next)=>{
    const hasId = true
    if(hasId){
        console.log("Student Has valid Id Card")
        next()
    }
    else{
        res.send("Not Entered")
        console.log("Student Has not Id")
    }
}
app.use('/',fun,fun1)
app.get('/',(req,res)=>{
    res.send('Welcome Student')
})
app.listen(5679,()=>{console.log("Creat Server")})