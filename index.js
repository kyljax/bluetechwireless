const express = require("express");
const app = express();
const path = require("path")


app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
});
app.get('/about.html',(req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"));
})
app.get('/service.html',(req,res)=>{
    res.sendFile(path.join(__dirname,"service.html"));
})
app.get('/contact.html',(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"));
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
})