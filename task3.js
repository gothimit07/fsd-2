var expr = require('express')   
var app = expr()
app.use(expr.static('../public',{index:'calc.html'}))
app.get('/calc',(req,res)=>{
    n1 = parseInt(req.query.n1)
    n2 = parseInt(req.query.n2)
    if(req.query.formula==='addition'){
        ans = n1 + n2
        res.write("Addition = "+ans)
        res.send()
    }
    else if(req.query.formula==='subtraction'){
        ans = n1 + n2
        res.write("Subtraction = "+ans)
        res.send()
    }
    else if(req.query.formula==='multi'){
        ans = n1 * n2
        res.write("Multiplication = "+ans)
        res.send()
    }
    else if(req.query.formula==='div'){
        if(n1<0 && n2<0){
            res.write("Value is 0")
            res.send()
        }
        else{
            ans = n1 / n2
            res.write("Division = "+ans)
            res.send()
        }
    }
})
app.listen(5963,()=>{console.log("Start Server")})