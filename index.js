import express from "express";
import bodyParser from "body-parser";


const app = express();
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({extended:true}));




const today=[];
const work=[];
app.get('/' , (req,res) => {
    res.render("index.ejs",{todaysList:today});
});

app.get('/today',(req,res)=>{
    res.render("index.ejs",{todaysList:today});
});

app.get('/work',(req,res)=>{
    
    res.render("index.ejs",{todaysList:work});
});

app.post('/' , (req,res)=>{
    if(req.body.type==='today')
    {
        today.push(req.body.task);
    }
    if(req.body.type==='work')
    {
        work.push(req.body.task);
    }
    res.render("index.ejs",{todaysList:today});
});


app.listen(3000 ,() =>{
    console.log("server started on port 3000");
});