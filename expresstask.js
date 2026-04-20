// Write an express js script to define one JSON array of 3 objects having properties name and age. Short these objects according to age. If user request sorted names in url then all names along with age should be printed according to descending order of age. Also, display these sorted values on “Sort page” and display JSON object on “Home page”.

var expr=require('express')
var app=expr()
const data=[{name:"pqr",age:22},{name:"abc",age:28},{name:"xyz",age:20}]
app.get('/',(req,res)=>{
    res.json(data)
})
app.get('/sort',(req,res)=>{
    ans=data.sort((a,b)=>b.age-a.age)
    for(i of ans){
        res.write(i.name+"="+i.age)
    }
    res.send()
})
app.get('/pqr',(req,res)=>{
    res.write("age of "+data[1].name+" is "+data[1].age)
    res.send()
})
app.listen(6003,()=>{console.log("Creat server")})